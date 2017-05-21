class ServerlessPipa  {


  constructor() {
  
  } 
  
  handleControllers(controllers){
    let self = this;
    return function(event, context, callback) {
      
      if (!event.pipa) 
          event.pipa = {};

      if(Array.isArray(controllers)){
        
        if (!context._controllers)
            context._controllers = [];
      
        var len = controllers.length;
        for(var index=0; index<len; index++) {
          context._controllers.push(controllers[index]);
        }

        if(len>0){
          self.nextHandler(event, context, callback);
        }
        
      }else if (typeof controllers === "function"){ 
         controllers(event, context, callback);
      }else{ 
        const response = {
            statusCode: 500,
            body: JSON.stringify({
              Error: 'controllers is not function'
            }),
        };
        callback(null, response);
      }
    }

  }

  nextHandler(event, context, callback){
    let nextFunction =  context._controllers.shift();
    nextFunction(event, context, callback);
  }


}

module.exports = new ServerlessPipa();