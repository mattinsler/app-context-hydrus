import path from 'path';
import es6require from '@mattinsler/es6require';

function appContextHydrus() {
  return (context) => {
    let hydrus;

    try {
      hydrus = require(path.join(context.root, 'node_modules', 'hydrus'));
    } catch (err) {
      throw new Error('Could not find hydrus. You must "npm install hydrus" first.');
    }

    const Container = hydrus.Container;
    const container = new Container();

    try {
      const fn = es6require(path.join(context.root, 'hydrus'));
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

export default appContextHydrus;
