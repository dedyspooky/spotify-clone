// CHANGING MORNING AFTERNOON AND EVENING
let timeOfDay = document.getElementById("time-of-day");

function updateTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();

    if (currentHour < 12) {
        timeOfDay.innerHTML = "Good morning";
    } else if (currentHour < 18) {
        timeOfDay.innerHTML = "Good afternoon";
    } else {
        timeOfDay.innerHTML = "Good evening";
    }
}

setInterval(updateTime, 1000);


// Vol range value changer

let volResult = document.getElementById("vol-result");
let volEntry = document.getElementById("volume");
function change(){
    volResult.innerText = volEntry.value;
    setInterval(change, 10)
}

// LIKE JS
const heartText = document.getElementById('like');
let clicked = false;
heartText.addEventListener('click', function() {
  if (!clicked) {
    heartText.style.color = 'rgb(31, 216, 96';
    clicked = true;
  } else {
    heartText.style.color = 'transparent';
    clicked = false;
  }
});


// SHUFFLE JS
const shuffle = document.getElementById('shuffle');
let clickedShuffle = false;
shuffle.addEventListener('click', function() {
  if (!clickedShuffle) {
    shuffle.style.color = 'rgb(31, 216, 96';
    clickedShuffle = true;
  } else {
    shuffle.style.color = 'rgb(234, 238, 241)';
    clickedShuffle = false;
  }
});


// REPEAT JS
const repeat = document.getElementById('repeat');
let clickedRepeat = false;
repeat.addEventListener('click', function() {
  if (!clickedRepeat) {
    repeat.style.color = 'rgb(31, 216, 96';
    clickedRepeat = true;
  } else {
    repeat.style.color = 'rgb(234, 238, 241)';
    clickedRepeat = false;
  }
});

// COVERART CLICK
const songInfo = document.getElementById('songinfo');
const coverArt = document.getElementById('coverart');
const likenArtist = document.getElementsByClassName('like-n-artist');
let clickedCoverart = false;
coverArt.addEventListener('click', function() {
if(!clickedCoverart){
  songInfo.style.transform = scale(2);
}
})

alert("UNDER CONSTRUCTION. This site is not responsive on mobile phones.");