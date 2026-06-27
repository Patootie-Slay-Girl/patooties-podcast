// ===============================
// Patootie's Podcast v3.0
// ===============================

// 🌙 Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// 💜 Random Welcome Messages
const welcomes = [
{
title:"💜 What's up, Patoot?",
text:"HEY Patoots! What's up, it's Patootie! Thanks for slaying your days away! All episodes are EVERYTHING so... yeah! Sit back, and listen to Patootie! 🎙️💜"
},
{
title:"🌸 What's up, Patoot?",
text:"Grab a snack, get comfy, and enjoy today's episode! 💜"
},
{
title:"✨ What's up, Patoot?",
text:"Thanks for stopping by! You're officially part of the Patootie Crew! 🎉"
},
{
title:"🎙️ What's up, Patoot?",
text:"Ready for another awesome episode? Press play and let's chat!"
},
{
title:"⭐ What's up, Patoot?",
text:"Today's vibe: SUPER SLAY. Thanks for visiting Patootie's Podcast! 💅"
}
];

// Pick a random welcome
window.addEventListener("DOMContentLoaded", function () {

const random = welcomes[Math.floor(Math.random() * welcomes.length)];

const title = document.getElementById("welcomeMessage");
const text = document.getElementById("welcomeText");

if(title && text){
    title.textContent = random.title;
    text.textContent = random.text;
}

// 🎉 New Episode Banner
const banner = document.getElementById("episodeBanner");

if(banner){
    banner.style.display = "block";

    setTimeout(function(){
        banner.style.display = "none";
    }, 6000);
}

});

