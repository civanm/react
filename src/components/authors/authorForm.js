(function () {
    "use strict";
    var React = require('react');

    var AuthorForm = React.createClass({


        /*jshint ignore:start */
        render: function () {
            var author = this.props.author;
        return (
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        ref="firstName"
                        onChange={this.props.onChange}
                        value={this.props.author.firstName} />
                    <br />
                    <label htmlFor="lastName">First Name</label>
                    <input type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        ref="lastName"
                        onChange={this.props.onChange}
                        value={this.props.author.lastName} />
                    <br />

                    <input type="submit" value="Save" className="btn btn-primary" onClick={this.props.onSave} />
                </form>
            );
        }
        /*jshint ignore:end */
    });

    module.exports = AuthorForm;
})();
