// first desing color algorithm

// get the dom 
console.log(window.innerHeight)
let watch_color = document.querySelector('.watch')

let color_wrapper = document.querySelector('.color_wrapper')
let colors = color_wrapper.children[0]
let colors2 = color_wrapper.children[1]
let colors3 = color_wrapper.children[2]
let colors4 = color_wrapper.children[3]
colors.style.cursor = "pointer"
colors2.style.cursor = "pointer"
colors3.style.cursor = "pointer"
colors4.style.cursor = "pointer"
const timeButton = document.getElementById('time-button');
const timeDisplay = document.getElementById('time-display');
const heartSection = document.getElementById('heart-section');
// console.log(colors2);


colors.classList.add('bg-custom-black')
// console.log(colors);

colors2.classList.add('bg-custom-red')
// console.log(colors2);

colors3.classList.add('bg-custom-purple')
console.log(colors3)
colors4.classList.add('bg-custom-pink')
console.log(colors4);

colors.addEventListener('click', function(){

watch_color.src = './image_smart_watch/imgur-20241226T132245Z-001/imgur/black.png'
    
})

colors2.addEventListener('click', function(){
    
watch_color.src = './image_smart_watch/imgur-20241226T132245Z-001/imgur/red.png'

    
    
    
})



colors3.addEventListener('click', function(){

watch_color.src = './image_smart_watch/imgur-20241226T132245Z-001/imgur/purple Imgur (2).png'

})
colors4.addEventListener('click', function(){

watch_color.src = './image_smart_watch/imgur-20241226T132245Z-001/imgur/pink Imgur (2).png'

})

console.log(watch_color.offsetWidth);




// time button funtion

let countdown;

timeButton.addEventListener('click', () => {

      // Stop any existing countdown
    if (countdown) {
        clearInterval(countdown);
    }   // this will help with stoping the countdown if it has been previously executed and prevent from ovelapping 
    
    
    heartSection.classList.add('hidden');
    timeDisplay.classList.remove('hidden');

    // Start countdown
    let hours = 12;
    let minutes = 59;
    let seconds = 59;

     countdown = setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    clearInterval(countdown);
                    timeDisplay.textContent = "Time's up!";
                    return;
                }
            }
        }
        // update the time display 
        
        timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
});

 // Heart Rate button functionality
 const heartButton = document.getElementById('heart-button');
 const heartRate = document.getElementById('heart-rate');

 heartButton.addEventListener('click', () => {
   timeDisplay.classList.add('hidden');
   heartSection.classList.remove('hidden');
   heartRate.textContent = `${Math.floor(Math.random() * (100 - 60 + 1) + 60)} BPM`;
 });












