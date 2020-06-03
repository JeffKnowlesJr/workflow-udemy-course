console.log('Hello World!');
const fs = require('fs');
const https = require('https');
// fs.writeFile(a,b,c)
fs.writeFile(__dirname + "/author.md", "written by Jeff Knowles", function(error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log('File executed without errors.');
    }
});

let photoURL = 'https://via.placeholder.com/150';

https.get(photoURL, function(response) {
    response.pipe(fs.createWriteStream(__dirname + '/150.jpg'));
})