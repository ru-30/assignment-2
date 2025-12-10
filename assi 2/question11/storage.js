const tasks = [];
export const getTasks = () => [...tasks];
export const addTaskToStorage = (task) => tasks.push(task);
export const removeTaskFromStorage = (id) => {
    const initialLength = tasks.length;
    tasks.splice(tasks.findIndex(task => task.id === id), 1);
    return tasks.length < initialLength; 
};