const fs = require('fs');

// fs.writeFile('Message.txt', 'Hello From NodeJS!', (err) => {
//     if (err) throw err; 
//     console.log('The message was create!')
// });

fs.readFile('./Message.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});