# Serverless Pipa

> ServerlessPipa is function to execute middleware for Serverless, inspired by pipajs (https://github.com/madebyais/pipajs).

### Why Serverless

> The idea of ServerlessPipa is about how to use middleware or exceute multiple function in one method for Servless.

### Installation

```bash
$ npm install ServerlessPipa
```

### How-To

There are two ways in how to use ServerlessPipa,

#### How-To-Execute-Single-Functions
```js
var serverlessPipa = require('serverlesspipa')

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

```

#### How-To-Execute-Multiple-Functions

```js
var serverlessPipa = require('serverlesspipa')

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

```

### Code Sample

You can try to run the code sample in `sample` folder.

### Contact

If you have any questions, feedback, idea or anything, please drop me a message at `septiyan.andika@gmail.com`

### License

  [MIT](LICENSE) Copyright © 2017