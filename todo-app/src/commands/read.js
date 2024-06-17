const {writeTasksToFile, readTasksFromFile}  = require('../utils/fileOps');

const read = () => {
    const tasks = readTasksFromFile();
    if( Object.keys(tasks).length === 0) {
        console.log('No taksks found');
        return;
    }

    for (var key in tasks) {
        console.log("--------------------------------------------------");
        console.log(`${key} : ${tasks[key]}`)
        console.log("--------------------------------------------------");
    }
}

module.exports = {read};