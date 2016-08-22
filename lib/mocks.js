(function(exports){

  function mockElement(element){
    appElement = {id: element};
    document.getElementById = function(){
      return appElement;
    };
  }

  function mockHash(hash){
    controller.getIdByHash = function(){
      return hash;
    };
  }

  function stubForm(){
    NoteController.prototype.formSubmit = function(submitText){
      this.view.noteListModel.saveNote(submitText);
    };
  }

  function unstubForm(){
    NoteController.prototype.formSubmit = function(submitText){
      this.view.noteListModel.saveNote(submitText);
      this.insertList();
    };
  }

  exports.mockElement = mockElement;
  exports.mockHash = mockHash;
  exports.stubForm = stubForm;
  exports.unstubForm = unstubForm;

})(this);
