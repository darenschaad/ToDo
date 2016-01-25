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

    $(".taskTitle").show();

    $("ul#tasks").append("<li><span class='task'>" + newToDo.task + "</span></li>");

    $("input#inputtedTask").val("");
    $("input#inputtedNotes").val("");
    $("input#inputtedCompleteDate").val("");

    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newToDo.task);
      $(".notes").text(newToDo.notes);
      $(".date").text(newToDo.date);

    });


  });
});
