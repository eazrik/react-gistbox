var TaskApp = React.createClass({
    getInitialState: function() {
        return {
            items: ['test']
        };
    },

    render: function() {
        return (
            <div>
                <h1>My Tasks</h1>
                <TaskList items={this.state.items} />
            </div>
        );
    }

});

React.render(<TaskApp />, document.body);
