describe("Note", function(){
  
  it("instantiates with text", function(){
    var note = new Note("My favourite language is JavaScript");
    isTrue(note.text == "My favourite language is JavaScript");
  });
});
