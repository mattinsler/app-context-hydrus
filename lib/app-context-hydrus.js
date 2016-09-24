'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _es6require = require('@mattinsler/es6require');

var _es6require2 = _interopRequireDefault(_es6require);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function appContextHydrus() {
  return function (context) {
    var hydrus = void 0;

    try {
      hydrus = require(_path2.default.join(context.root, 'node_modules', 'hydrus'));
    } catch (err) {
      throw new Error('Could not find hydrus. You must "npm install hydrus" first.');
    }

    var Container = hydrus.Container;
    var container = new Container();

    try {
      var fn = (0, _es6require2.default)(_path2.default.join(context.root, 'hydrus'));
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

exports.default = appContextHydrus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAtY29udGV4dC1oeWRydXMuanMiXSwibmFtZXMiOlsiYXBwQ29udGV4dEh5ZHJ1cyIsImNvbnRleHQiLCJoeWRydXMiLCJyZXF1aXJlIiwiam9pbiIsInJvb3QiLCJlcnIiLCJFcnJvciIsIkNvbnRhaW5lciIsImNvbnRhaW5lciIsImZuIiwiY29kZSIsImRlZmF1bHRBcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxnQkFBVCxHQUE0QjtBQUMxQixTQUFPLFVBQUNDLE9BQUQsRUFBYTtBQUNsQixRQUFJQyxlQUFKOztBQUVBLFFBQUk7QUFDRkEsZUFBU0MsUUFBUSxlQUFLQyxJQUFMLENBQVVILFFBQVFJLElBQWxCLEVBQXdCLGNBQXhCLEVBQXdDLFFBQXhDLENBQVIsQ0FBVDtBQUNELEtBRkQsQ0FFRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixZQUFNLElBQUlDLEtBQUosQ0FBVSw2REFBVixDQUFOO0FBQ0Q7O0FBRUQsUUFBTUMsWUFBWU4sT0FBT00sU0FBekI7QUFDQSxRQUFNQyxZQUFZLElBQUlELFNBQUosRUFBbEI7O0FBRUEsUUFBSTtBQUNGLFVBQU1FLEtBQUssMEJBQVcsZUFBS04sSUFBTCxDQUFVSCxRQUFRSSxJQUFsQixFQUF3QixRQUF4QixDQUFYLENBQVg7QUFDQSxVQUFJSyxFQUFKLEVBQVE7QUFDTkEsV0FBR0QsU0FBSCxFQUFjUixPQUFkO0FBQ0Q7QUFDRixLQUxELENBS0UsT0FBT0ssR0FBUCxFQUFZO0FBQ1osVUFBSUEsSUFBSUssSUFBSixLQUFhLGtCQUFqQixFQUFxQztBQUNuQyxjQUFNTCxHQUFOO0FBQ0Q7QUFDRjs7QUFFREwsWUFBUUMsTUFBUixHQUFpQk8sU0FBakI7QUFDRCxHQXhCRDtBQXlCRDs7QUFFRFQsaUJBQWlCWSxXQUFqQixHQUErQixFQUEvQjs7a0JBRWVaLGdCIiwiZmlsZSI6ImFwcC1jb250ZXh0LWh5ZHJ1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGVzNnJlcXVpcmUgZnJvbSAnQG1hdHRpbnNsZXIvZXM2cmVxdWlyZSc7XG5cbmZ1bmN0aW9uIGFwcENvbnRleHRIeWRydXMoKSB7XG4gIHJldHVybiAoY29udGV4dCkgPT4ge1xuICAgIGxldCBoeWRydXM7XG5cbiAgICB0cnkge1xuICAgICAgaHlkcnVzID0gcmVxdWlyZShwYXRoLmpvaW4oY29udGV4dC5yb290LCAnbm9kZV9tb2R1bGVzJywgJ2h5ZHJ1cycpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaHlkcnVzLiBZb3UgbXVzdCBcIm5wbSBpbnN0YWxsIGh5ZHJ1c1wiIGZpcnN0LicpO1xuICAgIH1cblxuICAgIGNvbnN0IENvbnRhaW5lciA9IGh5ZHJ1cy5Db250YWluZXI7XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZuID0gZXM2cmVxdWlyZShwYXRoLmpvaW4oY29udGV4dC5yb290LCAnaHlkcnVzJykpO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGZuKGNvbnRhaW5lciwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5oeWRydXMgPSBjb250YWluZXI7XG4gIH07XG59XG5cbmFwcENvbnRleHRIeWRydXMuZGVmYXVsdEFyZ3MgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwQ29udGV4dEh5ZHJ1cztcbiJdfQ==