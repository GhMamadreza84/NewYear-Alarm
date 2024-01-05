const oneDay = 24 * 60 * 60 * 1000;
const oneHours = 60 * 60 * 1000;
const oneMinute =  60 * 1000;
const counter = () => {
    const newYearDate = new Date("1 jan 2025").getTime();
    const currentDate = new Date().getTime();

    const diffrentTime = newYearDate - currentDate;

    const days = Math.floor( diffrentTime / oneDay );
    const hours = Math.floor( ( diffrentTime % oneDay ) / oneHours );
    const minute = Math.floor( ( diffrentTime % oneHours ) / oneMinute );
    const secound = Math.floor( ( diffrentTime % oneMinute) / 1000 ); 
    
    const values = [days ,hours ,minute ,secound];
    const deadLineNumbers = document.querySelectorAll(".dead-line-number");
    deadLineNumbers.forEach((item , index) =>{
        item.innerHTML = formatNumbers(values[index]);
    })

    if(diffrentTime <= 0){
        const newYearBox = document.querySelector(".new-year-wrapper");
        newYearBox.innerHTML = "<h1>Happy New Year 🎉✨</h1>"
        clearInterval(interval);
    }
    
}
const formatNumbers = (number) =>{
    if(number < 10){
        return `0${number}`;
    }else{
        return number;
    }
}
const interval = setInterval(counter , 1000);