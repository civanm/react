(function () {
    "use strict";
    var React = require('react'),
        AuthorApi = require('../../api/authorApi'),
        AuthorForm = require('./authorForm');

    var ManageAuthorPage = React.createClass({

        getInitialState: function () {
            return {
                author: {id: '', firstName: '', lastName: ''}
            };
        },
        setAuthorState: function (event) {
            var field = event.target.name,
                value = event.target.value;

            this.state.author[field] = value;
            return this.setState({author: this.state.author});
        },
        saveAuthor: function (event) {
            event.preventDefault();
            console.log('author saved!');
        },
        /*jshint ignore:start */
        render: function () {

        return (
                <div>
                    <h1>Manage Author</h1>
                    <AuthorForm
                        author={this.state.author}
                        onChange={this.setAuthorState}
                        onSave={this.saveAuthor}/>
                </div>
            );
        }
        /*jshint ignore:end */
    });

    module.exports = ManageAuthorPage;
})();
