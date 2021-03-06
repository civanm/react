(function () {
    "use strict";
    var React = require('react');

    var AuthorList = React.createClass({
        propTypes: {
            authors: React.PropTypes.array.isRequired
        },

        /*jshint ignore:start */
        render: function () {

            var createAuthorRow = function (author) {
                    return (
                        <tr key={author.id}>
                            <td><a href={"/#authors/"+ author.id}> {author.id} </a></td>
                            <td>{author.firstName} {author.lastName}</td>
                        </tr>
                    );
            };

            return (
                <div>
                    <table className="table">
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                        </thead>
                        <tbody>
                            {this.props.authors.map(createAuthorRow, this)}
                        </tbody>
                    </table>
                </div>
            );
        }
        /*jshint ignore:end */
    });

module.exports = AuthorList;
})();
