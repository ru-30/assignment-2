import { 
    getTasks, 
    addTaskToStorage, 
    removeTaskFromStorage 
} from './storage.js';

let nextId = 1;

export const addTask = (description) => {
    if (!description) return "Task description is required.";
    
    const newTask = {
        id: nextId++,
        description: description,
        completed: false
    };
    addTaskToStorage(newTask);
    return `Added task ${newTask.id}: "${description}"`;
};

export const removeTask = (id) => {
    const success = removeTaskFromStorage(id);
    return success 
        ? `Task with ID ${id} removed.` 
        : `Task with ID ${id} not found.`;
};

export const listTasks = () => {
    const tasks = getTasks();
    if (tasks.length === 0) {
        return "No tasks in the list.";
    }

    const taskListString = tasks.map(task => 
        `${task.id}. [${task.completed ? 'x' : ' '}] ${task.description}`
    ).join('\n');

    return `--- To-Do List (${tasks.length} items) ---\n${taskListString}`;
};