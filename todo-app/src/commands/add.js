const { writeTasksToFile, readTasksFromFile } = require('../utils/fileOps');

const add = (key, value) => {
    let tasks = readTasksFromFile();
    
    // Handle case where tasks is not properly initialized
    if (!tasks || typeof tasks !== 'object') {
        tasks = {};
    }

    tasks[key] = value;
    writeTasksToFile(tasks);
    console.log(`Task "${key}" is added`);
}

module.exports = { add };
