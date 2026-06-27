```javascript
// ============================
// Patootie's Podcast v2.0
// ============================

// 🌙 Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// 💜 Random Welcome Messages
const welcomeMessages = [
{
title:"💜 What's up, Patoot?",
text:"HEY Patoots! What's up, it's Patootie! Thanks for slaying your days away! All episodes are EVERYTHING so... yeah! Sit back, and listen to Patootie! 🎙️✨💜"
},
{
title:"🌸 What's up, Patoot?",
text:"Grab a snack, get comfy, and let's have some fun together! 💜"
},
{
title:"🎙️ What's up, Patoot?",
text:"Ready for another awesome episode? Hit play and let's get chatting!"
},
{
title:"✨ What's up, Patoot?",
text:"You're officially part of the Patootie Crew! Thanks for hanging out with me today! 💖"
},
{
title:"⭐ What's up, Patoot?",
text:"Today's going to be AMAZING! Thanks for slaying your day with Patootie's Podcast! 🌟"
}
];

// Pick a random welcome message
window.onload = function () {

const random =
welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

document.getElementById("welcomeMessage").textContent = random.title;
document.getElementById("welcomeText").textContent = random.text;

};
```
