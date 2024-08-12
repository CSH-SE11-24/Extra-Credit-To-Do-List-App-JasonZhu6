// Create an empty array called 'todoList' to store your to-do list items.
let todoList = []

// You will be implementing a loop that repeatedly displays possible options, takes user input, and performs actions accordingly. 
// Print "Welcome to the To-Do List App"
console.log("Welcome to the To-Do List App! ")

// Print the options 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit
console.log("1 - display the list")
console.log("2 - add new task to end")
console.log("3 - add new task to beginning")
console.log("4 - delete first task")
console.log("5 - exit \n")

// Define a variable called userChoice and set it to 0
let userChoice = parseInt(prompt("What do you want to do: "))

// Create a while loop that runs while the user doesn't type in 5

// In the loop, use conditionals to match the action to the option 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit
let task

while (userChoice != 5) {
  if (userChoice == 1) {
    console.log(todoList)
    userChoice = parseInt(prompt("What do you want to do next: "))
  } else if (userChoice == 2) {
    task = prompt("Enter your task, it will be added to the end of the list: ")
    todoList.push(task)
    userChoice = parseInt(prompt("What do you want to do next: "))
  } else if (userChoice == 3) {
    task = prompt("Enter your task, it will be added to the beginning of the list: ")
    todoList.unshift(task)
    userChoice = parseInt(prompt("What do you want to do next: "))
  } else if (userChoice == 4) {
    todoList.shift()
    console.log("The first task is deleted. ")
    userChoice = parseInt(prompt("What do you want to do next: "))
  } else {
    userChoice = parseInt(prompt("Please enter a valid numebr: "))
  }
}
console.log("Hope you enjoy this program! ")