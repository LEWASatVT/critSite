/**
 * @jsx React.DOM
 */

var hashCode = require('../../util/util').hashCode;
var React = require('react'),
    config = require('../../config'),
    NoteActions = require('../../actions/NoteActions.js'),
    TextArea=require('./TextArea.jsx'),
    Observation=require('./Observation.jsx');

var Note = React.createClass({

    getInitialState:function(){
        return {dateTime: ""};
    },

    handleEdit:function(id,event){
        event.preventDefault();
        this.props.onEdit(id);
        this.props.onSelect(id);
    },

    handleDelete:function(id,event){
        event.preventDefault();
        NoteActions.deleteNote({_id:id});
    },

    componentDidMount:function() {
        var component=this;
        var noteImageEl = this.getDOMNode().querySelector('#thumbnail_'+this.props.note._id);
        console.log("Image Element: "+noteImageEl);
        if(this.props.note.file) {
            console.log("fileName: "+this.props.note.file);
            var reader = new FileReader();
            reader.onload = function(e) {
                noteImageEl.setAttribute('src',e.target.result);
            };
            reader.readAsDataURL(this.props.note.file);
        }
    },

    render: function() {
        var note=this.props.note;
	var title='';
	if (note.text) {
	    title=note.text.length >= 20 ? note.text.substring(0,20) : note.text;
	}
	var image_src = config.baseUrl + note.href;
        var className = this.props.active ? 'active' : null;
	var observations = note._embedded ? note._embedded.observations ? note._embedded.observations : [] : [];
	var observationNodes = observations.map(function(observation) {
	    var key = hashCode('Observation' + observation.id);
	    return (
		<Observation key={key} value={observation.value} metric={observation._embedded.metric} units={observation._embedded.units} />
	    );
	});

	var lat = note.location ? note.location.geo.coordinates[0] : null;
	var lon = note.location ? note.location.geo.coordinates[1] : null;
	
	return (
            <div  className={'list-group-item '+className}>
            <a href="#" onClick={this.handleEdit.bind(null,note._id)}>{title}</a>
            <img src={image_src} id={"thumbnail_"+note._id}/>
            <span className='timestamp'>{note.datetime}</span>
            <span className='latitude'>{lat}</span>,
            <span className='longitude'>{lon}</span>
            <a href="#" onClick={this.handleDelete.bind(null,note._id)}>       X</a>
	    <div className="list-observations">
	         {observationNodes}
	    </div>
            </div>
        );
    }
});

module.exports=Note;