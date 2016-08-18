(function(exports){
  function NoteController(view){
    this.view = view;
  }

  NoteController.prototype.insert = function(){
    var app = document.getElementById("app");
    app.innerHTML = this.view.returnList();
  };
  exports.NoteController = NoteController;

  NoteController.prototype.getNote = function() {
    return this.view.noteListModel.notes[this.getIdByHash()];
  };

  NoteController.prototype.getIdByHash = function(){
    return window.location.hash.split("#")[1];
  };

  NoteController.prototype.showNote = function(){
    console.log(this);
    var note = this.getNote();
    var singleNote = new SingleNoteView(note);
    var app = document.getElementById("app");
    app.innerHTML = singleNote.returnHTML();
  };

  NoteController.prototype.listenForFormSubmit = function(){
    document.addEventListener('submit', function(){
        event.preventDefault();
        showEvent(event);
    })
  };


})(this);
