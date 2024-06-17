const { fileRaaderUtil, fileWriterUtil } = require('../utils/fileOps');

const updateTask = (key, newValue) => {
  const contact = fileRaaderUtil();
  if (contact[key]) {
    contact[key] = newValue;
    fileWriterUtil(contact);
    console.log(`Contact "${key}" updated.`);
  } else {
    console.log(`Contact "${key}" not found.`);
  }
};

module.exports = { updateTask };
