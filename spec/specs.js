describe ('ToDo', function(){
  it("will create a to do list with the task, notes and a date which to complete the task by", function(){
    var testToDo = new ToDo("Pay Electric Bill", "Pacific Power", 01/29/2016);
    expect (testToDo.task).to.equal("Pay Electric Bill");
    expect (testToDo.notes).to.equal("Pacific Power");
    expect (testToDo.date).to.equal(01/29/2016);
  });
});
