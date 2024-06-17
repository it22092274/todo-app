const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'tasks.json');

const readTasksFromFile = () => {
    try {
        if (fs.existsSync(filepath)){
            const data = fs.readFileSync(filepath, 'utf-8')
            return data ? JSON.parse(data) : {}
        }
    } catch (error) {
        console.error(" Error reading or parsing tasks files", error);
    }
}

const writeTasksToFile = (tasks) => {
    try {
        fs.writeFileSync(filepath, JSON.stringify(tasks, null, 2));

    } catch (error) {
        console.error("error writing tasks to file", error)
    }
}

module.exports = {
    readTasksFromFile,
    writeTasksToFile
}