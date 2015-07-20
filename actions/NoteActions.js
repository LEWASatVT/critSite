/**
 * Created by Sandeep on 06/10/14.
 */

var Reflux=require('reflux');

var NoteActions = Reflux.createActions([
    "createNote",
    "editNote",
    "deleteNote",
    "fetchTurbidity"
]);

module.exports=NoteActions;