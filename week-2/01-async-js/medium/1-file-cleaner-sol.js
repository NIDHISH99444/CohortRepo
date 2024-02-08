const fs=require('fs');

const fileCleaner = (filePath) => {
    fs.readFile(filePath, 'utf8', (err,data) => {
        if (err) {
            console.log(err);
        }
        else {
            const clearedData = data.replace(/\s+/g, ' ');
            fs.writeFile(filePath, clearedData, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log('File cleaned')
            })
        }
    })
};


fileCleaner('test-file.txt')


