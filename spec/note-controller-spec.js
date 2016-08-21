var list, view, controller, appElement;

function setupModel(){
  list = new NoteList();
  view = new NoteListView(list);
  controller = new NoteController(view);
}

function mockElement(element){
  appElement = {id: element};
  document.getElementById = function(){
    return appElement;
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

describe("NoteController", function(){

  it("controller can be instantiated", function(){
    setupModel();
    isTrue(controller.view === view);
  });

  it("submit creates a note with text from input", function(){
    setupModel();
    stubForm();
    controller.formSubmit("This is my first note");
    isTrue(list.notes[0].getText() === "This is my first note");
  });

  it("submitted note has HTML inserted into list", function(){
    setupModel();
    mockElement("list");
    unstubForm();
    controller.formSubmit("This is my first note");
    isTrue(view.returnList() === appElement.innerHTML);
  });

});
