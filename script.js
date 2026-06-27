```javascript
// 🌙 Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// 💜 Random Welcome Messages
const welcomes = [
{
title:"💜 What's up, Patoot?",
text:"HEY Patoots! What's up, it's Patootie! Thanks for slaying your days away! All episodes are EVERYTHING so... yeah! Sit back, and listen to Patootie! 🎙️✨💜"
},
{
title:"🌸 What's up, Patoot?",
text:"Grab a snack, get comfy, and let's have some fun together! Thanks for stopping by! 💜"
},
{
title:"✨ What's up, Patoot?",
text:"Ready for another awesome episode? Hit play and let's get chatting! 🎙️"
},
{
title:"🎉 What's up, Patoot?",
text:"You're officially part of the Patootie Crew! Thanks for hanging out with me today! 💜"
},
{
title:"⭐ What's up, Patoot?",
text:"Today's going to be AMAZING! Thanks for slaying your day with Patootie's Podcast! ✨"
}
];

window.onload = function(){

const random =
welcomes[Math.floor(Math.random()*welcomes.length)];

document.getElementById("welcomeMessage").textContent =
random.title;

document.getElementById("welcomeText").textContent =
random.text;

};
```
