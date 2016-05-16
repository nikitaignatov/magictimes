var React = require('react');

var User = React.createClass({
    render: function () {
        var data = this.props.user;
        return (
            <div className="box box-info">
                <div className="box-body">
                    <h3> {data.Name}</h3>
                </div>
            </div>
        );
    }
});


module.exports = User;