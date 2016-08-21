var list;

function setupModel(){
  list = new NoteList();
  list.saveNote("one");
  list.saveNote("two");
}

describe("Note list", function(){

  it("list starts out empty", function() {
    setupModel();
    isTrue(Array.isArray(list.notes));
  });

  it("can save a note with an ID", function(){
    setupModel();
    isTrue(list.notes[0].id === 0);
    isTrue(list.notes[1].id === 1);
  });

  it("can save a note with text", function(){
    setupModel();
    isTrue(list.notes[0].getText() === "one");
    isTrue(list.notes[1].getText() === "two");
  });

  it("can return notes from the list", function(){
    setupModel();
    isTrue(list.getNotes() === list.notes);
  });

});
