
class ToDoList {
    constructor() {
        this.task = [];
    }

    addtask(value, description, dueDate) {
        if (value && value.trim() !== "") {
            let taskObj = {
                id: Math.floor(Math.random() * 10000),
                text: value,
                description: description,
                createdAt: new Date().toLocaleDateString(),
                dueDate: dueDate
            };
            this.task.push(taskObj);
        }
    }

    viewtask() {
        const taskList = document.getElementById("task-list")

        taskList.innerHTML = ""; // clear old list

        this.task.forEach((task) => {
            let li = document.createElement("li");

            li.innerHTML = `
                <input type="checkbox"> 
                <span class="task-text">${task.text}</span>

                <div class="task-card">
                    <div class="card-row"><strong>ID:</strong> ${task.id}</div>
                    <div class="card-row"><strong>Created:</strong>${task.createdAt}</div>
                    <div class="card-row"><strong>Due:</strong>${task.dueDate || "Not set"}</div>

                    <div class="card-row"><strong>Description:</strong></div>
                    <div class="card-desc">${task.description}</div>
                </div>
`;

            // li.title = `ID: ${task.id}\n${task.description}`;

            taskList.appendChild(li);

            //ux ease task list click
            li.addEventListener("click", function (e) {
                let checkbox = li.querySelector("input");

                //Prevent double toggle if click on the checkbox
                if (e.target.tagName !== "INPUT") {
                    checkbox.checked = !checkbox.checked;
                }
            })
        });
    }

    deletetask() {
        let listItems = document.querySelectorAll("#task-list li")

        for (let i = listItems.length - 1; i >= 0; i--) {
            let li = listItems[i];
            let checkbox = li.querySelector("input")

            if (checkbox.checked) {
                li.remove();
                this.task.splice(i, 1)
            }
        }

    }

}

const tdl = new ToDoList();

