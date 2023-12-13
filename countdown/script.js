/*const endDate = ("21 march 2024 10:00 pm")

document.getElementById("end-date").innerText = endDate;

const clock (endDate);


function clock () {
     const end = new  Date(endDate)
     const now = new Date()
     const diff = (end - now) / 1000;
     console.log(diff);
   //   convert into days
    inputs[0].value = math.floor (diff / 3600 / 12);
    inputs[1].value = math.floor (diff / 3600 ) % 24 ;   
    
}
 run karvane ke liye initail call kar na phadega
clock()
function calculateCountdown(endDate) {
    const now = new Date();
    const difference = endDate - now;
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
   
    return {
       total: difference,
       days: days,
       hours: hours % 24,
       minutes: minutes % 60,
       seconds: seconds % 60,
    };
   }
   
   const endDate = new Date("21 march 2024 10:00 pm");
   const countdown = calculateCountdown(endDate);
   
   console.log(countdown);*/

let endDate = new Date("january 1 , 2024 12:00:00").getTime(); 
let now = new Date().getTime(); 
let distance = endDate - now; let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
let inputs = document.querySelectorAll("input[type='text']"); 
inputs[0].value = days; inputs[1].value = hours; inputs[2].value = minutes; inputs[3].value = seconds;