class ToDoList{
    constructor(){
        this.task = [];
    }

    addtask(value){
       if(value && value.trim() !==""){
        this.task.push(value);
       }
    }

    viewtask(){
        if(this.task.length === 0){
            console.log("\nNo task is available");
        } else {
            this.task.forEach((task, index)=>{
                console.log(index + 1, task)
            });
        }
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

