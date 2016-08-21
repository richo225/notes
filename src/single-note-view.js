(function(exports){

  function SingleNoteView(noteModel){
    this.noteModel = noteModel;
  }

  SingleNoteView.prototype.returnHTML = function(){
    return  '<div>' + this.noteModel.getText() + '</div>';
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
