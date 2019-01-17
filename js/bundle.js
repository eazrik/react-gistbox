(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsGistBox = require('./components/GistBox');

var _componentsGistBox2 = _interopRequireDefault(_componentsGistBox);

React.render(React.createElement(_componentsGistBox2['default'], null), document.querySelector('#app'));

},{"./components/GistBox":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Gist = React.createClass({
    displayName: "Gist",

    render: function render() {
        return React.createElement(
            "div",
            null,
            this.props.username,
            "'s last Gist is ",
            React.createElement(
                "a",
                { href: this.props.url },
                "here"
            )
        );
    }

});

exports["default"] = Gist;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var GistAddForm = React.createClass({
    displayName: 'GistAddForm',

    getInitialState: function getInitialState() {
        return {
            username: ''
        };
    },

    onChange: function onChange(e) {
        //this is ES6
        //var username = e.target.value;
        //this.setState({ username})

        //this is ecma5
        this.setState({ username: e.target.value });
    },

    addGist: function addGist(e) {
        e.preventDefault();

        this.props.onAdd(this.state.username);
        this.setState({ username: '' });
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { onSubmit: this.addGist },
                React.createElement('input', { value: this.state.username, onChange: this.onChange, placeholder: 'Type a Github username..' }),
                React.createElement(
                    'button',
                    null,
                    'Fetch Latest Gist'
                )
            )
        );
    }

});

exports['default'] = GistAddForm;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Gist = require('./Gist');

var _Gist2 = _interopRequireDefault(_Gist);

var _GistAddForm = require('./GistAddForm');

var _GistAddForm2 = _interopRequireDefault(_GistAddForm);

var GistBox = React.createClass({
    displayName: 'GistBox',

    getInitialState: function getInitialState() {
        return {
            gists: []
        };
    },

    addGist: function addGist(username) {
        var url = 'https://api.github.com/users/' + username + '/gists';

        $.get(url, (function (result) {
            var username = result[0].owner.login;
            var url = result[0].html_url;
            var gists = this.state.gists.concat({ username: username, url: url });
            this.setState({ gists: gists });
        }).bind(this));
    },

    render: function render() {
        var newGist = function newGist(gist) {
            return React.createElement(_Gist2['default'], { username: gist.username, url: gist.url });
        };

        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'GistBox'
            ),
            React.createElement(_GistAddForm2['default'], { onAdd: this.addGist }),
            this.state.gists.map(newGist)
        );
    }

});

exports['default'] = GistBox;
module.exports = exports['default'];

},{"./Gist":2,"./GistAddForm":3}]},{},[1]);
