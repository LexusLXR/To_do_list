class ToDoList{
    constructor(){
        this.task = [];
    }

    addtask(value){
       if(value && value.trim() !==""){
            let taskObj = {
                id: Math.floor(Math.random() * 10000),
                text: value
            };
            this.task.push(taskObj);
        }   
    }

    viewtask(){
        const taskList = document.getElementById("task-list")

        taskList.innerHTML = ""; // clear old list

        this.task.forEach((task) =>{
            let li = document.createElement("li");

            li.innerHTML = `<input type="checkbox"> ${task.text}`;

            li.title = `ID: ${task.id}`;

            taskList.appendChild(li);
        });
    }

    deletetask(){
        let listItems = document.querySelectorAll("#task-list li")

        for(let i = listItems.length - 1; i>= 0; i--){
            let li = listItems[i];
            let checkbox = li.querySelector("input")

            if (checkbox.checked){
                li.remove();
                this.task.splice(i, 1)
            }
        }

    }

}

const tdl = new ToDoList();

