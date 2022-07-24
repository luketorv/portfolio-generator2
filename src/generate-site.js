const fs = require('fs');
const pageTemplate = require('../src/page-template')

const writeFile = (data) => {
  fs.writeFile('./dist/index.html', pageTemplate(data), err => {
    if (err) {
      reject(err);
      return;
    }
    else {
      console.log('File created!')
    }
  })
}



module.exports = { writeFile };