const { fileRaaderUtil } = require('../utils/fileOps');

const search = (searchValue) => {
  let contact = fileRaaderUtil();

  if (Object.keys(contact).length === 0) {
    console.log("No contacts available");
    return;
  }

  if (contact[searchValue]) {
    console.log(`${searchValue} : ${contact[searchValue]}`);
  } else {
    console.log(`Contact "${searchValue}" not found.`);
  }
};

module.exports = { search };
