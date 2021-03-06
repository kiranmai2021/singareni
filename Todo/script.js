// Problem: User interaction doesn't provide desired results.
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");


//New Task List Item
var createNewTaskElement = function(taskString) {
    //Create List Item
    var listItem = document.createElement("li");


    //input (checkbox)
    var checkBox = document.createElement("input"); // checkbox
    //label
    var label = document.createElement("label");
    //input (text)
    var editInput = document.createElement("input"); // text
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");

    //Each element needs modifying

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;


    // each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

// Add a new task
var addTask = function() {
    console.log("Add task...");
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement(taskInput.value);
    //Append listItem to incompleteTasksHolder
    var incomplete = incompleteTasksHolder.appendChild(listItem);
    localStorage.setItem("listitem", "tharun");
    localStorage.getItem("listitem")
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";
}

// Edit an existing task
var editTask = function() {
    console.log("Edit Task...");

    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text]")
    var label = listItem.querySelector("label");

    var containsClass = listItem.classList.contains("editMode");
    //if the class of the parent is .editMode 
    if (containsClass) {
        //switch from .editMode 
        //Make label text become the input's value
        label.innerText = editInput.value;
    } else {
        //Switch to .editMode
        //input value becomes the label's text
        editInput.value = label.innerText;
    }

    // Toggle .editMode on the parent
    listItem.classList.toggle("editMode");

}


// Delete an existing task
var deleteTask = function() {
    console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    //Remove the parent list item from the ul
    ul.removeChild(listItem);
}

// Mark a task as complete 
var taskCompleted = function() {
    console.log("Task complete...");
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

// Mark a task as incomplete
var taskIncomplete = function() {
    console.log("Task Incomplete...");
    // When checkbox is unchecked
    // Append the task list item #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    //select taskListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    //bind editTask to edit button
    editButton.onclick = editTask;

    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

// var ajaxRequest = function() {
//   console.log("AJAX Request");
// }

// Set the click handler to the addTask function
//addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
// addButton.addEventListener("click", ajaxRequest);


// Cycle over the incompleteTaskHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    // bind events to list item's children (taskCompleted)
    // console.log(incompleteTasksHolder.children.length)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
// Cycle over the completeTaskHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
    // bind events to list item's children (taskIncompleted)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);

}

// for(var i = 0; i < 10; i++) {
//   setTimeout(console.log.bind(console, i), 10);
// }

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

var Person = function (name, age) {
  // The next line creates an object that will
  // delegate to the person's prototype on failed lookups.

var obj = Object.create(Person.prototype);
console.log(obj)
  // The next line sets 'this' to the newly created object
  // this = obj;

  this.name = name;
  this.age = age;

   return this;
}

console.log(Person('tharun',2));