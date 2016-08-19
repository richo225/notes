describe("NoteListView", function(){

  it("shows only first 20 characters", function(){
    var list = new NoteList();
    var twenty = "I really love ruby and I miss it!";
    list.saveNote(twenty);
    var view = new NoteListView(list);
    var result = "<ul><li><a href='#0'>I really love ruby a</a></li></ul>";
    isTrue(view.returnList() === result);

  });
});
