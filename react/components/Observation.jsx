/** * @jsx React.DOM */

var React = require('react');

var Observation = React.createClass({
    render: function() {
	return (  
	    <div className="observation">
	    <span className="observation-metric">{this.props.metric.name}</span>
	    <span className="observation-value">{this.props.value}</span>
	    <span className="observation-units">{this.props.units.abbv}</span>
	    </div>
	);
    }
});

module.exports=Observation;