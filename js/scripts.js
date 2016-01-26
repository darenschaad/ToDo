function ToDo(task, notes, date){
  this.task = task;
  this.notes = notes;
  this.date = date;
}



$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#inputtedTask").val();
    var inputtedNotes = $("input#inputtedNotes").val();
    var inputtedCompleteDate = $("input#inputtedCompleteDate").val();
    var newToDo = new ToDo(inputtedTask, inputtedNotes, inputtedCompleteDate);
    var noSpace = inputtedTask.replace(/\s+/g, '');
    var nothing = noSpace.replace(/[^\w\s]/gi, '');

    $(".taskTitle").show();

    $("ol#tasks").append("<span class='task' id =" + nothing + "><li>" + newToDo.task + "</li></span>");

    $("input#inputtedTask").val("");
    $("input#inputtedNotes").val("");
    $("input#inputtedCompleteDate").val("");

    $(".task").last().click(function() {
      $("#show-task").show();
      $(".deleteButton").remove();
      $("#show-task h2").text(newToDo.task);
      $(".notes").text(newToDo.notes);
      $(".date").text(newToDo.date);
       $("#show-task").append("<span class='deleteButton'><button id='" + nothing + "' class='btn btn-danger btn-md deleteTask'>Delete Task</button></span>");
    });

    $(document).on('click', '.deleteTask', function() {
      $("#show-task").last().hide();
      $("span#" + this.id).remove();
    });
  });

});


// btn btn-danger btn-md
