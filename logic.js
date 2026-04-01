class ToDoList{
    constructor(){
        this.task = [];
    }

    addtask(){
        const value = prompt("\nWrite the task you want to append in your work list:");
        this.task.push(value);
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
        try{
            let listIndex = parseInt(prompt("Write the number of Index which you want to remove it from the list: "));

            listIndex = listIndex - 1;


            if (listIndex >= 0 && listIndex < this.task.length){
                let poppedTask = this.task.splice(listIndex, 1)[0];

                console.log(`\nremoved task from my to do list: ${poppedTask}`);
                console.log(`\nUpdate to do list: `, this.task);
            }else{
                console.log("\nInvalid index");
            }
        }catch (error){
            console.log("\nplease enter a valid number")
        }

    }
}

const tdl = new ToDoList();

while (true){
    let menu = "1. Add task\n2. View Task\n3. Delete Task\n4. Exit" 
    let choice = prompt(menu);

    if(choice === "1"){
        tdl.addtask();
    } else if (choice === "2"){
        tdl.viewTask();
    } else if (choice === "3"){
        tdl.deletetask();
    }else if (choice === "4"){
        console.log("exiting...");
        break;
    }else{
        console.log("\nInvalid input ")
    }
}