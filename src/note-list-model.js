(function(exports) {

  function NoteList() {
    this.notes = [];

  }

    NoteList.prototype.saveNote = function(text) {
      var note = new Note(text);
      note.id = this.notes.length;
      this.notes.push(note);
    };

    NoteList.prototype.getNotes = function() {
      return this.notes;
    };

  exports.NoteList = NoteList;

})(this);
