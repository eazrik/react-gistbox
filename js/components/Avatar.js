
var Avatar = React.createClass({
    getDefaultProps: function() {
        return {
            path : 'http://bit.ly/1NABbkf'
        };
    },

    render: function() {
        return (
            <div>
                <a href={this.props.path}>
                    <img src={this.props.path} />
                </a>
            </div>
        );
    }

});

React.render(<Avatar path="https://secure.gravatar.com/avatar/5fcccc3344ed53ac6b05913890cc976d" />, document.body);
