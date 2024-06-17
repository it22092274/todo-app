const { fileRaaderUtil } = require('../utils/fileOps');

const read = () => {
  let contact = fileRaaderUtil();

  if (Object.keys(contact).length === 0) {
    console.log("No contacts available");
  }

  for (let key in contact) {
    console.log(`${key} : ${contact[key]}`);
  }
};

module.exports = { read };
