const { fileRaaderUtil, fileWriterUtil } = require('../utils/fileOps');

const add = (key, value) => {
  let contact = fileRaaderUtil();
  contact[key] = value;
  fileWriterUtil(contact);
};

module.exports = { add };
