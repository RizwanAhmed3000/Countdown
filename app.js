//Getting all the elements
var para = document.querySelector("#tagline");
// console.log(para)
const timer = document.querySelector(".timer").children
// console.log(timer[0].children[0].textContent)

//Making array for days & months
var daysNameArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];

var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];

//setting the future date
let futuerDate = new Date("2023-06-25T08:00:00")
// console.log(futuerDate.getMinutes())

//Making the para dynamic
para.textContent = `Giveaway End On ${daysNameArray[futuerDate.getDay()]}, ${futuerDate.getDate()} ${monthsArray[futuerDate.getMonth()]},${futuerDate.getFullYear()} 0${futuerDate.getHours()}:0${futuerDate.getMinutes()} am`;

//function for countdown
function countdown(){
    let today = new Date()
    var timeDiff = futuerDate.getTime() - today.getTime()    

    //Dyas
    timer[0].children[0].textContent = Math.floor(timeDiff / 1000 / 60 / 60 / 24)
    //Hours
    timer[1].children[0].textContent = Math.floor(timeDiff / 1000 / 60 / 60) - (Math.floor(timeDiff / 1000 / 60 / 60 / 24) * 24)
    //Minutes
    timer[2].children[0].textContent = Math.floor(timeDiff / 1000 / 60) - (Math.floor(timeDiff / 1000 / 60 / 60) * 60)
    //Seconds
    timer[3].children[0].textContent = Math.floor(timeDiff / 1000 ) - (Math.floor(timeDiff / 1000 / 60) * 60)
    
}


//running the countdown funtion every second
setInterval(countdown, 1000)
