(function(exports){

  function NoteController(view){
    this.view = view;
  }

  NoteController.prototype.insertList = function(){
    var list = document.getElementById("list");
    list.innerHTML = this.view.returnList();
  };

  NoteController.prototype.getNote = function() {
    return this.view.noteListModel.notes[this.getIdByHash()];
  };

  NoteController.prototype.getIdByHash = function(){
    return window.location.hash.split("#")[1];
  };
  
  NoteController.prototype.showNote = function(){
    var singleNote = new SingleNoteView(this.getNote());
    var note = document.getElementById("note");
    note.innerHTML = singleNote.returnHTML();
  };

  NoteController.prototype.formSubmit = function(submitText){
    this.view.noteListModel.saveNote(submitText);
    this.insertList();
  };

  exports.NoteController = NoteController;

})(this);
