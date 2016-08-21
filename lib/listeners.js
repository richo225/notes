(function(exports){

  function showNote(){
    controller.showNote();
  }

  function formSubmit(){
    event.preventDefault();
    controller.formSubmit(event.target[0].value);
  }

  exports.showNote = showNote;
  exports.formSubmit = formSubmit;

})(this);
