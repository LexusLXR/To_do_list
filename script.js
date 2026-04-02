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


//Saving task btn connection
const saveTask = document.getElementById("saveTask");
const taskInput = document.getElementById("taskinput");
const taskList = document.getElementById("task-list")

saveTask.addEventListener("click", function(){
    let value = taskInput.value;

    tdl.addtask(value);

    if(value && value.trim() !== ""){
        let li = document.createElement("li");
        li.innerHTML = `<input type= "checkbox"> ${value}`;
        taskList.appendChild(li);

        taskInput.value = "";
    }
})