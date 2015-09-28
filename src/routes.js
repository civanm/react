(function () {
    "use strict";

    var React = require('react'),
        Router = require('react-router'),
        DefaultRoute = Router.DefaultRoute,
        NotFoundRoute = Router.NotFoundRoute,
        Redirect = Router.Redirect;

        var Route = Router.Route;

        /*jshint ignore:start */
        var routes = (
            <Route name="app" path="/" handler={require('./components/app')}>
                <DefaultRoute handler={require('./components/home')} />
                <Route name="authors" handler={require('./components/authors')} />
                <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthor')} />
                <Route name="about" handler={require('./components/about')} />
                <NotFoundRoute handler={require('./components/common/404')} />
                <Redirect from="about-us" to="about" />
                <Redirect from="*about*" to="about" />
            </Route>
        );
        /*jshint ignore:end */

        module.exports = routes;

})();
