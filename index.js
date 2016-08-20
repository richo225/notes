var list = new NoteList();
list.saveNote("First note here");
list.saveNote("Second note here");
var view = new NoteListView(list);
var controller = new NoteController(view);
controller.insert();
//inserts html of list into app div ie. shows clickable list

window.addEventListener("hashchange", showNote);

function showNote(){
  controller.showNote();
}

window.addEventListener('submit', formSubmit);

function formSubmit(){
  event.preventDefault();
  controller.formSubmit(event.target[0].value);
}
