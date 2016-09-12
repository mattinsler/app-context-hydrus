var path = require('path');
var es6require = require('@mattinsler/es6require');

function appContextHydrus() {
  return function(context) {
    var hydrus;

    try {
      hydrus = require(path.join(context.root, 'node_modules', 'hydrus'));
    } catch (err) {
      throw new Error('Could not find hydrus. You must "npm install hydrus" first.');
    }

    var Container = hydrus.Container;
    var container = new Container();

    try {
      var fn = es6require(path.join(context.root, 'hydrus'));
      if (fn) {
        fn(container, context);
      }
    } catch (err) {
      if (err.code !== 'MODULE_NOT_FOUND') {
        throw err;
      }
    }

    context.hydrus = container;
  };
}

appContextHydrus.defaultArgs = {};

module.exports = appContextHydrus;



// import path from 'path';
// import es6require from '@mattinsler/es6require';
//
// function appContextHydrus(opts = {}) {
//   return function(context) {
//     const Container = require('hydrus').Container;
//
//     const container = new Container();
//
//     try {
//       const fn = es6require(path.join(context.root, 'service'));
//       if (fn) {
//         fn(container, context);
//       }
//     } catch (err) {
//       if (err.code !== 'MODULE_NOT_FOUND') {
//         throw err;
//       }
//     }
//
//     context.hydrus = container;
//   };
// }
//
// appContextHydrus.defaultArgs = {};
//
// export default appContextHydrus;
