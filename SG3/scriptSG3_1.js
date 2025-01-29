var inputTaskName = document.getElementsByName("inputTask1")[0];
var taskList = document.getElementById("taskListParent");
var inputTaskId = document.getElementById("inputTask");
var addTaskButton = document.getElementById("addTask");
var textToChange;

function inputTaskReset(){
    inputTaskId.value = "";
    inputTaskId.setAttribute("placeholder", "Enter a Task");

    addTaskButton.value = "1";
    addTaskButton.textContent = "Add Task";
}

function swapAddEditButton(id){
    if(id.getAttribute("value") == 1){
        addTask();
    } else if(id.getAttribute("value") == 2){
        confirmEditTask();
    }
}

function addTask(){

    var newTask = document.createElement("span");
    var taskWriting = document.createElement("p");
    var newTaskEditButton = document.createElement("button");
    var newTaskDeleteButton = document.createElement("button");

    newTask.className = "taskListChild"

    taskWriting.textContent = inputTaskId.value;
    taskWriting.className = "taskText";         
    
    newTaskEditButton.className = "taskButtonEdit";
    newTaskEditButton.textContent = "Edit";
    newTaskEditButton.setAttribute("onclick", "editTask(this.parentElement)");

    newTaskDeleteButton.className = "taskButtonDelete";
    newTaskDeleteButton.textContent = "Delete";
    newTaskDeleteButton.setAttribute("onclick", "deleteTask(this)");

    taskList.appendChild(newTask);
    newTask.appendChild(taskWriting);
    newTask.appendChild(newTaskEditButton);
    newTask.appendChild(newTaskDeleteButton);

    inputTaskReset();

}

function editTask(parentId){
    textToChange = parentId.firstElementChild;

    inputTaskId.setAttribute("placeholder", "Edit a Task");
    addTaskButton.textContent = "Edit Task";
    addTaskButton.setAttribute("value", "2");

}

function confirmEditTask(){
    textChange = textToChange;
    textChange.textContent = inputTaskId.value;

    inputTaskReset();
}


function deleteTask(id){
    id.parentElement.remove();
}