
$ = jQuery = require('jquery');

var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes');

Router.run(routes, function (Handler) {
    /*jshint ignore:start */
    React.render(<Handler />, document.getElementById('app'));
    /*jshint ignore:end */
});
