import { 
    addTask, 
    removeTask, 
    listTasks 
} from './todo.js';

console.log("\n--- To-Do Manager (Bonus) ---");

console.log(addTask("Buy groceries")); 
console.log(addTask("Finish JS assignment")); 
console.log(addTask("Call plumber")); 
console.log("\n" + listTasks());
console.log("\n" + removeTask(2));
console.log("\n" + listTasks());
console.log("\n" + removeTask(99));