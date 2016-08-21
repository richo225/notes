var list, view, controller, appElement;

function setupModel(){
  list = new NoteList();
  view = new NoteListView(list);
  controller = new NoteController(view);
}

describe("NoteController", function(){

  it("controller can be instantiated", function(){
    setupModel();
    isTrue(controller.view === view);
  });

  it("HTML for an empty note list is displayed when app loads", function(){
    mockElement("list");
    isTrue(appElement.innerHTML === undefined);
  });

  it("form submit creates a note with text from input", function(){
    setupModel();
    stubForm();
    controller.formSubmit("This is my first note");
    isTrue(list.notes[0].getText() === "This is my first note");
  });

  it("HTML for new note list is displayed when form submitted", function(){
    setupModel();
    mockElement("list");
    unstubForm();
    controller.formSubmit("This is my first note");
    isTrue(view.returnList() === appElement.innerHTML);
  });

  it("HTML for an empty single note is displayed when app loads", function(){
    mockElement("note");
    isTrue(appElement.innerHTML === undefined);
  });

  it("HTML for single note is displayed when clicked", function(){
    setupModel();
    mockElement("note");
    controller.formSubmit("This is my first note");
    mockHash("0");
    controller.showNote();
    isTrue(appElement.innerHTML === "<div>This is my first note</div>");
  });

});
