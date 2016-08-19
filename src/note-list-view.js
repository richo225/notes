(function(exports){
  function NoteListView(noteList) {
    this.noteListModel = noteList;
  }

  NoteListView.prototype.returnList = function(){
    var listhtml = this.noteListModel.getNotes();
    var mappedlist = listhtml.map(function(note){
    var atag = "<a href='#" + note.id + "'>";
      return "<li>" + atag + note.getText().slice(0,20) + "</a>" + "</li>";
    });

    return "<ul>" + mappedlist.join("") + "</ul>";
  };

  exports.NoteListView = NoteListView;


})(this);
