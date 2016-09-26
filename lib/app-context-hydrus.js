'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _es6require = require('@mattinsler/es6require');

var _es6require2 = _interopRequireDefault(_es6require);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function getInitFn(context, opts) {
  if (opts.service) {
    return function (container) {
      var ServiceClass = (0, _es6require2.default)(context.root, opts.service);
      if (!ServiceClass || typeof ServiceClass !== 'function') {
        throw new Error('hydrus service must be a class: ' + opts.service);
      }

      container.export(new ServiceClass());

      if (context.httpServer) {
        container.attach(context.httpServer);
      } else if (context.httpsServer) {
        container.attach(context.httpsServer);
      }
    };
  } else {
    try {
      return (0, _es6require2.default)(context.root, 'hydrus');
    } catch (err) {
      if (err.code !== 'MODULE_NOT_FOUND') {
        throw err;
      }
    }
  }
}

function appContextHydrus(opts) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(context) {
      var hydrus, Container, container, fn;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              hydrus = void 0;
              _context.prev = 1;

              hydrus = require(_path2.default.join(context.root, 'node_modules', 'hydrus'));
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context['catch'](1);
              throw new Error('Could not find hydrus. You must "npm install hydrus" first.');

            case 8:
              Container = hydrus.Container;
              container = new Container();
              fn = getInitFn(context, opts);


              if (fn) {
                fn(container, context);
              }

              if (!opts.register) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return container.register(opts.register);

            case 15:

              context.hydrus = container;

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 5]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

appContextHydrus.defaultArgs = {};

exports.default = appContextHydrus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAtY29udGV4dC1oeWRydXMuanMiXSwibmFtZXMiOlsiZ2V0SW5pdEZuIiwiY29udGV4dCIsIm9wdHMiLCJzZXJ2aWNlIiwiY29udGFpbmVyIiwiU2VydmljZUNsYXNzIiwicm9vdCIsIkVycm9yIiwiZXhwb3J0IiwiaHR0cFNlcnZlciIsImF0dGFjaCIsImh0dHBzU2VydmVyIiwiZXJyIiwiY29kZSIsImFwcENvbnRleHRIeWRydXMiLCJoeWRydXMiLCJyZXF1aXJlIiwiam9pbiIsIkNvbnRhaW5lciIsImZuIiwicmVnaXN0ZXIiLCJkZWZhdWx0QXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxPQUFuQixFQUE0QkMsSUFBNUIsRUFBa0M7QUFDaEMsTUFBSUEsS0FBS0MsT0FBVCxFQUFrQjtBQUNoQixXQUFPLFVBQVNDLFNBQVQsRUFBb0I7QUFDekIsVUFBTUMsZUFBZSwwQkFBV0osUUFBUUssSUFBbkIsRUFBeUJKLEtBQUtDLE9BQTlCLENBQXJCO0FBQ0EsVUFBSSxDQUFDRSxZQUFELElBQWlCLE9BQU9BLFlBQVAsS0FBeUIsVUFBOUMsRUFBMEQ7QUFDeEQsY0FBTSxJQUFJRSxLQUFKLHNDQUE2Q0wsS0FBS0MsT0FBbEQsQ0FBTjtBQUNEOztBQUVEQyxnQkFBVUksTUFBVixDQUFpQixJQUFJSCxZQUFKLEVBQWpCOztBQUVBLFVBQUlKLFFBQVFRLFVBQVosRUFBd0I7QUFDdEJMLGtCQUFVTSxNQUFWLENBQWlCVCxRQUFRUSxVQUF6QjtBQUNELE9BRkQsTUFFTyxJQUFJUixRQUFRVSxXQUFaLEVBQXlCO0FBQzlCUCxrQkFBVU0sTUFBVixDQUFpQlQsUUFBUVUsV0FBekI7QUFDRDtBQUNGLEtBYkQ7QUFjRCxHQWZELE1BZU87QUFDTCxRQUFJO0FBQ0YsYUFBTywwQkFBV1YsUUFBUUssSUFBbkIsRUFBeUIsUUFBekIsQ0FBUDtBQUNELEtBRkQsQ0FFRSxPQUFPTSxHQUFQLEVBQVk7QUFDWixVQUFJQSxJQUFJQyxJQUFKLEtBQWEsa0JBQWpCLEVBQXFDO0FBQ25DLGNBQU1ELEdBQU47QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTRSxnQkFBVCxDQUEwQlosSUFBMUIsRUFBZ0M7QUFBQTs7QUFDOUI7QUFBQSx5REFBTyxpQkFBT0QsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRGMsb0JBREM7QUFBQTs7QUFJSEEsdUJBQVNDLFFBQVEsZUFBS0MsSUFBTCxDQUFVaEIsUUFBUUssSUFBbEIsRUFBd0IsY0FBeEIsRUFBd0MsUUFBeEMsQ0FBUixDQUFUO0FBSkc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFNRyxJQUFJQyxLQUFKLENBQVUsNkRBQVYsQ0FOSDs7QUFBQTtBQVNDVyx1QkFURCxHQVNhSCxPQUFPRyxTQVRwQjtBQVVDZCx1QkFWRCxHQVVhLElBQUljLFNBQUosRUFWYjtBQVlDQyxnQkFaRCxHQVlNbkIsVUFBVUMsT0FBVixFQUFtQkMsSUFBbkIsQ0FaTjs7O0FBY0wsa0JBQUlpQixFQUFKLEVBQVE7QUFDTkEsbUJBQUdmLFNBQUgsRUFBY0gsT0FBZDtBQUNEOztBQWhCSSxtQkFrQkRDLEtBQUtrQixRQWxCSjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQW1CR2hCLFVBQVVnQixRQUFWLENBQW1CbEIsS0FBS2tCLFFBQXhCLENBbkJIOztBQUFBOztBQXNCTG5CLHNCQUFRYyxNQUFSLEdBQWlCWCxTQUFqQjs7QUF0Qks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCRDs7QUFFRFUsaUJBQWlCTyxXQUFqQixHQUErQixFQUEvQjs7a0JBRWVQLGdCIiwiZmlsZSI6ImFwcC1jb250ZXh0LWh5ZHJ1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGVzNnJlcXVpcmUgZnJvbSAnQG1hdHRpbnNsZXIvZXM2cmVxdWlyZSc7XG5cbmZ1bmN0aW9uIGdldEluaXRGbihjb250ZXh0LCBvcHRzKSB7XG4gIGlmIChvcHRzLnNlcnZpY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgICBjb25zdCBTZXJ2aWNlQ2xhc3MgPSBlczZyZXF1aXJlKGNvbnRleHQucm9vdCwgb3B0cy5zZXJ2aWNlKTtcbiAgICAgIGlmICghU2VydmljZUNsYXNzIHx8IHR5cGVvZihTZXJ2aWNlQ2xhc3MpICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaHlkcnVzIHNlcnZpY2UgbXVzdCBiZSBhIGNsYXNzOiAke29wdHMuc2VydmljZX1gKTtcbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyLmV4cG9ydChuZXcgU2VydmljZUNsYXNzKCkpO1xuXG4gICAgICBpZiAoY29udGV4dC5odHRwU2VydmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hdHRhY2goY29udGV4dC5odHRwU2VydmVyKTtcbiAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5odHRwc1NlcnZlcikge1xuICAgICAgICBjb250YWluZXIuYXR0YWNoKGNvbnRleHQuaHR0cHNTZXJ2ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGVzNnJlcXVpcmUoY29udGV4dC5yb290LCAnaHlkcnVzJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcENvbnRleHRIeWRydXMob3B0cykge1xuICByZXR1cm4gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBsZXQgaHlkcnVzO1xuXG4gICAgdHJ5IHtcbiAgICAgIGh5ZHJ1cyA9IHJlcXVpcmUocGF0aC5qb2luKGNvbnRleHQucm9vdCwgJ25vZGVfbW9kdWxlcycsICdoeWRydXMnKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGh5ZHJ1cy4gWW91IG11c3QgXCJucG0gaW5zdGFsbCBoeWRydXNcIiBmaXJzdC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBDb250YWluZXIgPSBoeWRydXMuQ29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcblxuICAgIGNvbnN0IGZuID0gZ2V0SW5pdEZuKGNvbnRleHQsIG9wdHMpO1xuXG4gICAgaWYgKGZuKSB7XG4gICAgICBmbihjb250YWluZXIsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnJlZ2lzdGVyKSB7XG4gICAgICBhd2FpdCBjb250YWluZXIucmVnaXN0ZXIob3B0cy5yZWdpc3Rlcik7XG4gICAgfVxuXG4gICAgY29udGV4dC5oeWRydXMgPSBjb250YWluZXI7XG4gIH07XG59XG5cbmFwcENvbnRleHRIeWRydXMuZGVmYXVsdEFyZ3MgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwQ29udGV4dEh5ZHJ1cztcbiJdfQ==