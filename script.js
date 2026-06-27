
const messages = [
  "💜 What's up, Patoot?",
  "✨ Hey Patoot! Ready for another episode?",
  "🌙 Welcome back, superstar!",
  "🎙️ Hey Patoots! Thanks for stopping by!",
  "⭐ Hope you're having an amazing day!"
];

const welcome = document.getElementById("welcomeMessage");

if (welcome) {
  const random = Math.floor(Math.random() * messages.length);
  welcome.textContent = messages[random];
}
