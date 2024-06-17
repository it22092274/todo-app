// src/commands/update.js
const { readTasksFromFile, writeTasksToFile } = require('../utils/fileOps');

const updateTask = (key, newValue) => {
    const tasks = readTasksFromFile();
    if (tasks[key]) {
        tasks[key] = newValue;
        writeTasksToFile(tasks);
        console.log(`Task "${key}" updated.`);
    } else {
        console.log(`Task "${key}" not found.`);
    }
};

module.exports = { updateTask };
