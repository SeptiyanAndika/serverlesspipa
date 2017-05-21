'use strict';
let serverlessPipa = require('../index');

module.exports.single = serverlessPipa.handleControllers((event, context, callback)=>{
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
});




function middleware(event, context, callback) {
        event.pipa.message = 'from middleware'
        serverlessPipa.nextHandler(event,context,callback);
        
    
};

function helloMultiple(event, context, callback) {
        
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: event.pipa.message,
    }),
  };

  callback(null, response);
    
};

module.exports.multiple =  serverlessPipa.handleControllers([middleware,helloMultiple]);
