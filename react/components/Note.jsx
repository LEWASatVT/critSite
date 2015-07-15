/**
 * @jsx React.DOM
 */
var React = require('react');
var NoteActions = require('../../actions/NoteActions.js');
var TextArea=require('./TextArea.jsx');
var ImageUtil = require('../../util/util.js');

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
         console.log("Image Element: "+noteImageEl)
        if(this.props.note.file) {
            console.log("fileName: "+this.props.note.file)
            var reader = new FileReader();
            reader.onload = function(e) {
                console.log("Result Data: "+e.target.result)            
                noteImageEl.setAttribute('src',e.target.result);
            }
            reader.readAsDataURL(this.props.note.file);
            ImageUtil.extractExifData(this.props.note.file, function(tags){
                console.log(component)
                component.setState({dateTime: tags.ModifyDate});
                component.setState({lat: tags.GPSLatitude});
                component.setState({lon: tags.GPSLongitude});
            });
        }
    },

    render: function() {

        var note=this.props.note;

        var title=note.text.length >= 20 ? note.text.substring(0,20) : note.text;

        var className = this.props.active ? 'active' : null;

        return (
            <div  className={'list-group-item '+className}>
            <a href="#" onClick={this.handleEdit.bind(null,note._id)}>{title}</a>
            <img src="#" id={"thumbnail_"+note._id}/>
            <span className='timestamp'>{this.state.dateTime}</span>
            <a href="#" onClick={this.handleDelete.bind(null,note._id)}>       X</a>
            </div>
        )
    }
});

module.exports=Note;