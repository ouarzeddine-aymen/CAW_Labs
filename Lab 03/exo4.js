const fs = require('fs');

const filePath = process.argv[2];
const text = process.argv.slice(3).join(" ");

fs.writeFile(filePath, text, (err) => {
    if (err) {
        console.error("Error :", err);
        return;
    }
    console.log("saved");

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File contents:");
        console.log(data);
    });
});
