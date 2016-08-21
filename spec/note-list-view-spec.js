var list, view, result;

function setupModel(){
  list = new NoteList();
  view = new NoteListView(list);
  list.saveNote("I really love ruby and I miss it!");
}

describe("Note list view", function(){

  it("shows only first 20 characters", function(){
    setupModel();
    result = "<ul><li><a href='#0'>I really love ruby a</a></li></ul>";
    isTrue(view.returnList() === result);
  });

});
