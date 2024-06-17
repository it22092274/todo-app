// src/commands/delete.js
const { readTasksFromFile, writeTasksToFile } = require('../utils/fileOps');

const deleteTask = (key) => {
    const tasks = readTasksFromFile();
    if (tasks[key]) {
        delete tasks[key];
        writeTasksToFile(tasks);
        console.log(`Task "${key}" deleted.`);
    } else {
        console.log(`Task "${key}" not found.`);
    }
};

module.exports = { deleteTask };
