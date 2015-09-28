(function () {
    "use strict";

    var React = require('react'),
        Header = require('./common/header.jsx'),
        RouteHandler = require('react-router').RouteHandler;

    var App = React.createClass({
        render: function () {
            
            /*jshint ignore:start */
            return (
                <div>
                    <Header/>
                    <div className="container-fluid">
                        <RouteHandler/>
                    </div>
                </div>
            );
            /*jshint ignore:end */
        }
    });

    module.exports = App;
})();
