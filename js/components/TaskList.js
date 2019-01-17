var TaskList = React.createClass({

    render: function() {
        //this is ECMA5
        // var displayTask = function(task) {
        //     return <li>{task}</li>
        // };

//this is ES6
        var displayTask = (task) => <li>{task}</li>

        return (
            <ul>
                { this.props.items.map(displayTask) }
            </ul>
        );
    }

});
