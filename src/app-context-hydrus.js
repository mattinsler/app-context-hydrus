import path from 'path';
import es6require from '@mattinsler/es6require';

function getInitFn(context, opts) {
  if (opts.service) {
    return function(container) {
      const ServiceClass = es6require(context.root, opts.service);
      if (!ServiceClass || typeof(ServiceClass) !== 'function') {
        throw new Error(`hydrus service must be a class: ${opts.service}`);
      }

      container.export(new ServiceClass());

      if (context.httpServer) {
        container.attach(context.httpServer);
      } else if (context.httpsServer) {
        container.attach(context.httpsServer);
      }
    }
  } else {
    try {
      return es6require(context.root, 'hydrus');
    } catch (err) {
      if (err.code !== 'MODULE_NOT_FOUND') {
        throw err;
      }
    }
  }
}

function appContextHydrus(opts) {
  return async (context) => {
    let hydrus;

    try {
      hydrus = require(path.join(context.root, 'node_modules', 'hydrus'));
    } catch (err) {
      throw new Error('Could not find hydrus. You must "npm install hydrus" first.');
    }

    const Container = hydrus.Container;
    const container = new Container();

    const fn = getInitFn(context, opts);

    if (fn) {
      fn(container, context);
    }

    if (opts.register) {
      await container.register(opts.register);
    }

    context.hydrus = container;
  };
}

appContextHydrus.defaultArgs = {};

export default appContextHydrus;
