describe("NoteController", function(){
  it("controller can be instantiated", function(){
    var list = new NoteList();
    var view = new NoteListView(list);
    var controller = new NoteController(view);
    isTrue(controller.view === view);
  });

  it("inserts html into index", function(){
    var list = new NoteList();
    list.saveNote("zee");
    var view = new NoteListView(list);
    var appElement = {id: "app"};
    document.getElementById = function(){
      return appElement;
    };
    var controller = new NoteController(view);
    controller.insert();
    var htmlOutput = view.returnList();
    isTrue(htmlOutput === appElement.innerHTML);
    document.getElementById = document.__proto__.getElementById;
  });

  it("loads page corresponding to hash", function(){
    var list = new NoteList();
    list.saveNote("zee");
    var view = new NoteListView(list);
    var controller = new NoteController(view);

    var appElement = {id: "app"};
    document.getElementById = function(){
      return appElement;
    };

    document.onload = function(){window.location.hash = "#0"};
    controller.showNote();
    isTrue(appElement.innerHTML === "<div>zee</div>");

  });
});
