let fs=require('fs');

const writingString = 'Hello World here right';
fs.writeFile('file.txt',writingString,'utf8',(err)=>{
    if(err){
        console.log('error');
    }
    console.log('file written');
})
console.log('start')