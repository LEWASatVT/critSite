/**
 * Created by Sandeep on 06/10/14.
 */
var Reflux=require('reflux');
var NoteActions=require('../actions/NoteActions');
var $ = require('jquery');
var ImageUtil = require('../util/util.js');

var _notes=[];

var NoteStore = Reflux.createStore({

    init: function() {
        this.listenTo(NoteActions.createNote, this.onCreate);
        this.listenTo(NoteActions.editNote, this.onEdit);
        this.listenTo(NoteActions.deleteNote, this.onDelete);
        this.listenTo(NoteActions.fetchTurbidity, this.fetchTurbidity);

    },

    getInitialState: function() {
        return _notes;
    },

    onCreate: function(note) {
        note.sync = false;
        if (note.file) {
            ImageUtil.extractExifData(note.file, function(tags){
                note.dateTime = tags.ModifyDate;
                note.lat = tags.GPSLatitude;
                note.lon = tags.GPSLongitude;
                _notes.push(note);
                this.trigger(_notes);  
            }.bind(this));
        } else {
            _notes.push(note);
            this.trigger(_notes);
        }
    },

    onEdit: function(note) {
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===note._id){
                _notes[i].text=note.text;
                this.trigger(_notes);
                break;
            }
        }
    },

    onDelete: function(note) {
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===note._id){
                _notes.splice(i,1);
                this.trigger(_notes);
                break;
            }
        }
    },

    fetchTurbidity: function() {
	console.log('NoteStore: fetchTurbidity');
        $.get("http://192.168.1.10:8080/sites/stroubles1/metrics/25/timeseries?limit=1",null,function(object){
                this.onCreate({_id:0,text:"Turbidy: "+object.data[0][0],dateTime:object.data[0][1]});
        }.bind(this));  
    },

    getNotes:function(){
        return _notes;
    },

    getNote:function(id){
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===id){
                return _notes[i];
            }
        }
    }

});

module.exports=NoteStore;
