const counter=0;

function incrementCounter(){
    const date =new Date();
    const hours= String(date.getHours()).padStart(2,0)
    const min= String(date.getMinutes()).padStart(2,0)
    const sec= String(date.getSeconds()).padStart(2,0)

    console.log(`${hours}:${min}:${sec}`)
    //Eg 01:45:23 PM
    const updatedHours = hours > 12 ? hours-12 : hours;
    const amPm = hours > 12 ? "PM": "AM";
    const format =`${updatedHours}:${min}:${sec} ${amPm}`;
    console.log(format)
    setTimeout(incrementCounter,1000);
}
incrementCounter()