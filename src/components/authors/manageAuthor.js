(function () {
    "use strict";
    var React = require('react'),
        Router = require('react-router'),
        AuthorApi = require('../../api/authorApi'),
        AuthorForm = require('./authorForm'),
        toastr = require('toastr');

    var ManageAuthorPage = React.createClass({
        mixins: [
            Router.Navigation
        ],
        getInitialState: function () {
            return {
                author: {id: '', firstName: '', lastName: ''},
                errors: {}
            };
        },
        setAuthorState: function (event) {
            var field = event.target.name,
                value = event.target.value;

            this.state.author[field] = value;
            return this.setState({author: this.state.author});
        },
        authorFormIsValid: function () {
            var formIsValid = true;
            this.state.erros = {};

            if (this.state.author.firstName.length <3 ) {
                this.state.errors.firstName = 'First name should be at least 3 characters';
                formIsValid = false;
            }

            if (this.state.author.lastName.length <3 ) {
                this.state.errors.lastName = 'Last name should be at least 3 characters';
                formIsValid = false;
            }

            this.setState({erros: this.state.errors});

            return formIsValid;
        },

        saveAuthor: function (event) {
            event.preventDefault();
            AuthorApi.saveAuthor(this.state.author);
            toastr.success('Author Saved!');
            this.transitionTo('authors');
        },
        /*jshint ignore:start */
        render: function () {

        return (
                <div>
                    <h1>Manage Author</h1>
                    <AuthorForm
                        author={this.state.author}
                        onChange={this.setAuthorState}
                        onSave={this.saveAuthor}
                        errors={this.state.errors}/>
                </div>
            );
        }
        /*jshint ignore:end */
    });

    module.exports = ManageAuthorPage;
})();
