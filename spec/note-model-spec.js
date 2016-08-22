var note;

describe("Note", function(){

  it("instantiates with text", function(){
    note = new Note("My favourite language is JavaScript");
    isTrue(note.getText() == "My favourite language is JavaScript");
  });

});
