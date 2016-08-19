describe("NoteList", function(){
  
  it("instantiates a note with unique id", function(){
    var list = new NoteList();
    list.saveNote("one");
    isTrue(list.notes[0].id === 0);
    list.saveNote("two");
    isTrue(list.notes[1].id === 1);
  });

  it("list instantiates with an empty array", function() {
    var notelist = new NoteList();
    isTrue(Array.isArray(notelist.notes));
  });

  it("array can contain note objects", function(){
    var notelist = new NoteList();
    notelist.saveNote("I am a note");
    var note = notelist.notes[0];
    isTrue(notelist.notes.includes(note));
  });

  it("can return notes from the list", function(){
    var notelist = new NoteList();
    var note1 = new Note();
    var note2 = new Note();
    notelist.notes = [note1, note2];
    isTrue(notelist.getNotes() == notelist.notes);
  });
});
