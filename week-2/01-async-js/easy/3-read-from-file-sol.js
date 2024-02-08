let fs=require('fs');


fs.readFile('file.txt','utf8',(err,data)=>{
    if(err){
        console.log('error');
    }
    console.log(data);
})
console.log('start')
for(let i=0;i<10;i++){
    console.log(i);
}
console.log('end')
