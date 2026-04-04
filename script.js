const float = document.getElementById("float")
const addBtn = document.getElementById("addBtn")
const closefloat = document.getElementById("closefloat")

//open floating window
addBtn.addEventListener("click", function(){
    float.style.display = "flex";
});

//close model
closefloat.addEventListener("click", function(){
    float.style.display = "none";
});

//Delete button connection
const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", function(){
    tdl.deletetask();
})

const dueDateInput = document.getElementById("duedate")

//making first letter capital
function capitalizeFirstLetter(str){
    if(!str) return ""
    return str.charAt(0).toUpperCase() + str.slice(1);
}


//Saving task btn connection
const saveTask = document.getElementById("saveTask");
const taskInput = document.getElementById("taskinput");
const descInput = document.getElementById("descinput")
const taskList = document.getElementById("task-list")

saveTask.addEventListener("click", function(){
    let value = taskInput.value;
    let desc = descInput.value;
    let dueDate = dueDateInput.value

    value = capitalizeFirstLetter(value);
    desc = capitalizeFirstLetter(desc);

    tdl.addtask(value, desc, dueDate);
    tdl.viewtask();

    taskInput.value = "";
    descInput.value = "";
    dueDateInput.value = "";

    float.style.display = "none";
})