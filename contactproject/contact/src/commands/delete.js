const { fileRaaderUtil, fileWriterUtil } = require('../utils/fileOps');

const deleteTask = (key) => {
  const contact = fileRaaderUtil();
  if (contact[key]) {
    delete contact[key];
    fileWriterUtil(contact);
    console.log(`Contact "${key}" deleted.`);
  } else {
    console.log(`Contact "${key}" not found.`);
  }
};

module.exports = { deleteTask };
