"use sctrict";

var React = require('react'),
    Link = require('react-router').Link;

var NotFoundPage = React.createClass( {
    /*jshint ignore:start */
    render: function() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Oops! Sorry there is nothing to see here.</p>
                <p><Link to="app">Back to Home</Link></p>
                
            </div>
        );

    }
    /*jshint ignore:end */
});

module.exports = NotFoundPage;
