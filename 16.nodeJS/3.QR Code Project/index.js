/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name: 'url',
        message: 'Digite sua URL:'
    }
  ])
  .then((answers) => {
    var qr_image = qr.image(answers.url, { type: 'png' });
    qr_image.pipe(fs.createWriteStream('qr_code.png'));
    fs.writeFile('qr_code_url.txt', answers.url, (err) => {
        if (err) throw err;
        console.log("Salvo com sucesso!");
    });
    console.log('QR code criado.')
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

