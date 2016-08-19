describe('Single note view',function(){

  it('takes a note model upon instantiation', function(){
    var noteModel = new Note('Favourite drink: Mango Juice');
    var singleNoteView = new SingleNoteView(noteModel);
    isTrue(noteModel=== singleNoteView.noteModel);
  });

  it('returns a single note in html', function(){
    var noteModel = new Note('Favourite drink: Mango Juice');
    var singleNoteView = new SingleNoteView(noteModel);
    var output  = '<div>Favourite drink: Mango Juice</div>';
    isTrue(output === singleNoteView.returnHTML());
  });
});
