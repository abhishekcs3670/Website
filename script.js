const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const img = document.getElementById("hero-img");
const app = document.getElementById("app");

let noCount = 0;

const noMessages = [
  "Think again 😭",
  "Are you sure 😠?",
  "Pleaseee 🥺",
  "See this 😳",
  "Last chance 😢"
];

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250;
  const y = Math.random() * 150;
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noCount < noMessages.length) {
    title.innerText = noMessages[noCount];
  }

  noCount++;
});

yesBtn.addEventListener("click", showValentinePage);

function showValentinePage() {
  app.innerHTML = `
    <div class="img-box2">
      <img src="assets/bear2.png">
    </div>
    <h1 id="title">Thank you Sooo Much Baby! 💍</h1>
    <p id="subtitle">
      Every second with you is a celebration.
      You are the spark that makes my world brighter!
    </p>

    <a href="gifts.html">
      <button style="background:red;color:white;">
        See My Gifts →
      </button>
    </a>
  `;
}


function showQuiz() {
  app.innerHTML = `
    <h1>Quiz for you 😘</h1>

    <p id="title2">Who is the absolute "Boss" in this relationship?</p>

    <button onclick="alert('Correct 😍')" id="subtitle2">Obviously You</button>
    <button onclick="alert('Wrong 😝')" id="subtitle2">Me</button>
    <button onclick="alert('Very Wrong 😆')" id="subtitle2">No One</button>
  `;
}
