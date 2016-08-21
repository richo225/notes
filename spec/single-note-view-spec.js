var noteModel, singleNoteView, output;

function setupModel(){
  noteModel = new Note('Favourite drink: Mango Juice');
  singleNoteView = new SingleNoteView(noteModel);
}

describe('Single note view',function(){

  it('takes a note model upon instantiation', function(){
    setupModel();
    isTrue(noteModel=== singleNoteView.noteModel);
  });

  it("returns a note's text as html", function(){
    setupModel();
    output = '<div>Favourite drink: Mango Juice</div>';
    isTrue(output === singleNoteView.returnHTML());
  });

});
