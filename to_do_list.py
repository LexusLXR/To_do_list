class ToDoList():
    def __init__(self):
        self.task = []

    def add_task(self):
        value = input("\nWrite the task you want to append in your work List:")
        self.task.append(value)

    def view_task(self):
        if len(self.task) == 0:
           print("\nNo task is available")
        else:
            for index, task in enumerate(self.task):
                print(index+1, task)
           
    def  delete_task(self):
        try:

            list_index = int(input("Write the number of Index which you want to remove it from the list: "))
            list_index = list_index-1
        
            if list_index >= 0 and list_index < len(self.task):
                pop_Index = self.task.pop(list_index)
                #print thee remove element and updated list
                print(f"\nremoved task from my to do list:{pop_Index}")
                print(f"\nUpdated to do list:{self.task}")
            else:
                print("\nInvalid index")
        except:
            print("\nPlease enter a valid  number")
            

tdl = ToDoList()

while True:
    print("1. Add Task")
    print("2. View Task")
    print("3. Delete Task")
    print("4. Exit")

    choice = input("\nEnter your choice: ")

    if choice == "1":
        tdl.add_task()
    elif choice == "2":
        tdl.view_task()
    elif choice == "3":
        tdl.delete_task()
    elif choice == "4":
        break
    else:
        print("\nInvalid input")




