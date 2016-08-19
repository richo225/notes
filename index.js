var list = new NoteList();

var view = new NoteListView(list);
var controller = new NoteController(view);
controller.insert();

window.addEventListener("hashchange", showNote);

function showNote(){
  controller.showNote();
}

controller.listenForFormSubmit();
