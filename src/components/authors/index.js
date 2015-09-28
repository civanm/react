(function () {
    "use strict";
    var React = require('react'),
        AuthorApi = require('../../api/authorApi'),
        AuthorList = require('./authorList'),
        Link = require('react-router').Link;

    var AuthorPage = React.createClass({

        getInitialState: function () {
            return {
                authors: []
            };
        },
        componentDidMount: function () {
            if (this.isMounted) {
                this.setState({ authors: AuthorApi.getAllAuthors() });
            }
        },

        /*jshint ignore:start */
        render: function () {

        return (
                <div>
                    <h1>Authors</h1>
                    <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                    <AuthorList authors={this.state.authors} />
                </div>
            );
        }
        /*jshint ignore:end */
    });

module.exports = AuthorPage;
})();
