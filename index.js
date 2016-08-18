var list = new NoteList();
list.saveNote("Favourite drink: Red bull");
var view = new NoteListView(list);
var controller = new NoteController(view);
controller.insert();
window.addEventListener("hashchange", showNote);
function showNote(){
  controller.showNote();
}


showEvent = function(event){

  console.log(event.target[0].value);
};
controller.listenForFormSubmit();
