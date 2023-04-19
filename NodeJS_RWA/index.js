/*
Create a node application to perform the following operation on the JSON file:

read the content of the file
add the content of the file 
overwrite the content of the file.
*/

const fs = require('fs');

const filePath = './data.json';

// Reading the content of the file
const readFile = (filePath) => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  }

// Adding the content of the file
const addFileContent = (filePath, content) => {
    const data = readFile(filePath);
    data.push(content);
    fs.writeFileSync(filePath, JSON.stringify(data));
  }
  
// Overwriting the content of the file
  const overwriteFileContent = (filePath, content) => {
    fs.writeFileSync(filePath, JSON.stringify(content));
  }

// Read the content of the file
const fileData = readFile(filePath);
console.log(fileData);

// Add the content of the file
const newContent = { name: 'Harsh', age: 20 };
addFileContent(filePath, newContent);

// Overwrite the content of the file
const overwriteContent = [{ name: 'HJ', age: 19 }];
overwriteFileContent(filePath, overwriteContent);