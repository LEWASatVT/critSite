/**
 * @jsx React.DOM
 */

/**
 *  For rendering the app on client side.
 * Note: Make sure require('iso') appears before require('react') 
 * or you may/will exprience 
 * https://github.com/facebook/react/issues/2402
 */

var Iso = require('iso');
var Router = require('react-router');
var React = require('react/addons');

var routes = require('./routes.jsx');

if (typeof window !== 'undefined') {
    window.onload = function() {
        /*React.render(App(), document); */
	Iso.bootstrap(function(state, meta, container) {
	    Router.run(routes, Router.HistoryLocation, (Handler) => {
		var node = React.createElement(Handler);
		React.render(node, container);
	    });
	});
    };
}