const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, '../../contacts.json');

const fileRaaderUtil = () => {
  let contact = {};
  try {
    if (fs.existsSync(filepath)) {
      const data = fs.readFileSync(filepath, 'utf-8');
      contact = data ? JSON.parse(data) : {};
    }
  } catch (error) {
    console.error("Error reading or parsing the contacts from the store", error);
  }
  return contact;
};

const fileWriterUtil = (contact) => {
  try {
    fs.writeFileSync(filepath, JSON.stringify(contact, null, 2));
  } catch (error) {
    console.error("Error writing contacts to file", error);
  }
};

module.exports = {
  fileRaaderUtil,
  fileWriterUtil,
};
