"use sctrict";

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var Header = React.createClass( {
    /*jshint ignore:start */
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand">
                        <img src="" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="authors">Authors</Link></li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                </div>
            </nav>
        );

    }
    /*jshint ignore:end */
});

module.exports = Header;
