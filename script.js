// Locators
const extraRunSpan = document.getElementById("extraScore");
const bySpan = document.getElementById("byScore");
const wideSpan = document.getElementById("wideScore");
const noSpan = document.getElementById("noScore");

const incExtraButton = document.getElementById("incExtra");
const decExtraButton = document.getElementById("decExtra");
const incByButton = document.getElementById("incBy");
const decByButton = document.getElementById("decBy");
const incWideButton = document.getElementById("incWide");
const decWideButton = document.getElementById("decWide");
const incNoButton = document.getElementById("incNo");
const decNoButton = document.getElementById("decNo");

// Selecting all buttons
const buttons = document.querySelectorAll("button");

// Specific button selectors
const decRunBtn = document.getElementById("decRun");
const oneRunBtn = document.querySelector(".runBtn:nth-of-type(2)");
const twoRunBtn = document.querySelector(".runBtn:nth-of-type(3)");
const threeRunBtn = document.querySelector(".runBtn:nth-of-type(4)");
const fourRunBtn = document.querySelector(".runBtn:nth-of-type(5)");
const sixRunBtn = document.querySelector(".runBtn:nth-of-type(6)");

const incWicBtn = document.getElementById("incWic");
const decWicBtn = document.getElementById("decWic");

const incFourBtn = document.getElementById("incFour");
const decFourBtn = document.getElementById("decFour");

const incSixBtn = document.getElementById("incSix");
const decSixBtn = document.getElementById("decSix");

const incBallBtn = document.getElementById("incBall");
const decBallBtn = document.getElementById("decBall");

const newBtn = document.getElementById("new");
const resetBtn = document.getElementById("reset");
const saveBtn = document.getElementById("save");
const downloadBtn = document.getElementById("download");
const msgSpan = document.getElementById('message');

// Personal buttons
const decRunPersBtn = document.getElementById("decRunPers");
const oneRunPersBtn = document.getElementById("oneRunPers");
const twoRunPersBtn = document.getElementById("twoRunPers");
const threeRunPersBtn = document.getElementById("threeRunPers");
const fourRunPersBtn = document.getElementById("fourRunPers");
const sixRunPersBtn = document.getElementById("sixRunPers");

const incBallPersBtn = document.getElementById("incBallPers");
const decBallPersBtn = document.getElementById("decBallPers");

const incSingPersBtn = document.getElementById("incSingPers");
const decSingPersBtn = document.getElementById("decSingPers");

const incDobPersBtn = document.getElementById("incDobPers");
const decDobPersBtn = document.getElementById("decDobPers");

const incTriPersBtn = document.getElementById("incTriPers");
const decTriPersBtn = document.getElementById("decTriPers");

const incFourPersBtn = document.getElementById("incFourPers");
const decFourPersBtn = document.getElementById("decFourPers");

const incSixPersBtn = document.getElementById("incSixPers");
const decSixPersBtn = document.getElementById("decSixPers");

// Run buttons
const decRunPers2 = document.getElementById('decRunPers2');
const oneRunPers2 = document.getElementById('oneRunPers2');
const twoRunPers2 = document.getElementById('twoRunPers2');
const threeRunPers2 = document.getElementById('threeRunPers2');
const fourRunPers2 = document.getElementById('fourRunPers2');
const sixRunPers2 = document.getElementById('sixRunPers2');

// Ball buttons
const incBallPers2 = document.getElementById('incBallPers2');
const decBallPers2 = document.getElementById('decBallPers2');

// Single buttons
const incSingPers2 = document.getElementById('incSingPers2');
const decSingPers2 = document.getElementById('decSingPers2');

// Double buttons
const incDobPers2 = document.getElementById('incDobPers2');
const decDobPers2 = document.getElementById('decDobPers2');

// Triple buttons
const incTriPers2 = document.getElementById('incTriPers2');
const decTriPers2 = document.getElementById('decTriPers2');

// Four buttons
const incFourPers2 = document.getElementById('incFourPers2');
const decFourPers2 = document.getElementById('decFourPers2');

// Six buttons
const incSixPers2 = document.getElementById('incSixPers2');
const decSixPers2 = document.getElementById('decSixPers2');

// Selecting all span elements
const spans = document.querySelectorAll("span");



// Spans for displaying data
const runSpan = document.querySelector("#batsManTwo .tag:nth-of-type(1) .sign");
const ballFacedSpan = document.querySelector("#batsManTwo .tag:nth-of-type(2) .sign");
const singleSpan = document.querySelector("#batsManTwo .tag:nth-of-type(3) .sign");
const doubleSpan = document.querySelector("#batsManTwo .tag:nth-of-type(4) .sign");
const tripleSpan = document.querySelector("#batsManTwo .tag:nth-of-type(5) .sign");
const fourSpan = document.querySelector("#batsManTwo .tag:nth-of-type(6) .sign");
const sixSpan = document.querySelector("#batsManTwo .tag:nth-of-type(7) .sign");


const scoreSpan2 = document.getElementById("score");
const wicketSpan2 = document.getElementById("wicket");
const foursSpan2 = document.getElementById("fours");
const sixesSpan2 = document.getElementById("sixes");
const oversSpan2 = document.getElementById("overs");

const runPer1Span2 = document.getElementById("runPer1");
const singlePer1Span2 = document.getElementById("singlePer1");
const doublePer1Span2 = document.getElementById("doublePer1");
const triplePer1Span2 = document.getElementById("triplePer1");
const fourPer1Span2 = document.getElementById("fourPer1");
const sixPer1Span2 = document.getElementById("sixPer1");



// Variables for runs
let extraRun = 0;
let wideRun = 0;
let noRun = 0;
let byRun = 0;
let totalRun = 0;
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let six = 0;
let countFours = 0;
let countSixes = 0;
let wicket = 0;
let countPerSingle = 0;
let countPerDouble = 0;
let countPerTriple = 0;
let countPerFour = 0;
let countPerSix = 0;
let totalperRun = 0;
let onePer = 0;
let twoPer = 0;
let threePer = 0;
let fourPer = 0;
let sixPer = 0;
let countOnePer = 0;
let countTwoPer = 0;
let countThreePer = 0;
let countFourPer = 0;
let countSixPer = 0;
let onePer2 = 0;
let twoPer2 = 0;
let threePer2 = 0;
let fourPer2 = 0;
let sixPer2 = 0;
let countOne2 = 0;
let countTwo2 = 0;
let countThree2 = 0;
let countFour2 = 0;
let countSix2 = 0;


// Function to save the name and display it in place of the input field
function displayName() {
  const bowlerNames = document.getElementsByClassName("names");
  const saveButton = document.getElementById("save");

  saveButton.addEventListener("click", () => {
    Array.from(bowlerNames).forEach((bowlerNameInput) => {
      if (bowlerNameInput && bowlerNameInput.value.trim()) {
        const name = bowlerNameInput.value.trim();

        // Create a div to display the name
        const nameDisplay = document.createElement("div");
        nameDisplay.textContent = name;

        // Add styles to the name display
        nameDisplay.classList.add("nameDisplay");

        // Replace the input field with the name display
        bowlerNameInput.replaceWith(nameDisplay);
      } else {
        alert("Please enter a valid name in all fields!");
      }
    });
  });
}

// Functions to update runs for different categories
function updateExtraRun() {
  incExtraButton.addEventListener("click", () => {
    extraRun++;
    extraRunSpan.innerText = extraRun;
  });

  decExtraButton.addEventListener("click", () => {
    if (extraRun > 0) {
      extraRun--;
      extraRunSpan.innerText = extraRun;
    }
  });
}

function updateWideRun() {
  incWideButton.addEventListener("click", () => {
    wideRun++;
    wideSpan.innerText = wideRun;
  });

  decWideButton.addEventListener("click", () => {
    if (wideRun > 0) {
      wideRun--;
      wideSpan.innerText = wideRun;
    }
  });
}

function updateNoRun() {
  incNoButton.addEventListener("click", () => {
    noRun++;
    noSpan.innerText = noRun;
  });

  decNoButton.addEventListener("click", () => {
    if (noRun > 0) {
      noRun--;
      noSpan.innerText = noRun;
    }
  });
}

function updateByRun() {
  incByButton.addEventListener("click", () => {
    byRun++;
    bySpan.innerText = byRun;
  });

  decByButton.addEventListener("click", () => {
    if (byRun > 0) {
      byRun--;
      bySpan.innerText = byRun;
    }
  });
}

// Function to calculate and display total runs
function displayRun() {
  totalRun = one + two + three + four + six;
  scoreSpan.innerText = totalRun;
}

// Functions to update different run categories
function updateOne() {
  oneRunBtn.addEventListener("click", () => {
    one += 1;
    displayRun();
  });
}

function updateTwo() {
  twoRunBtn.addEventListener("click", () => {
    two += 2;
    displayRun();
  });
}

function updateThree() {
  threeRunBtn.addEventListener("click", () => {
    three += 3;
    displayRun();
  });
}

function updateFour() {
  fourRunBtn.addEventListener("click", () => {
    four += 4;
    countFours++;
    foursSpan.innerText = countFours;
    displayRun();
  });
}

function updateSix() {
  sixRunBtn.addEventListener("click", () => {
    six += 6;
    countSixes++;
    sixesSpan.innerText = countSixes;
    displayRun();
  });
}

// Function to update wickets
function updateWicket() {
  incWicBtn.addEventListener("click", () => {
    if (wicket < 10) {
      wicket += 1;
      wicketSpan.innerText = wicket;
      msgSpan.innerText = "We lost one Wicket";
      setTimeout(() => {
        msgSpan.innerText = "";
      }, 5000);
      checkGameState(); // Check game state dynamically
    }
  });

  decWicBtn.addEventListener("click", () => {
    if (wicket > 0) {
      wicket -= 1;
      wicketSpan.innerText = wicket;
      checkGameState(); // Check game state dynamically
    }
  });
}

// Function to check the game state
function checkGameState() {
  if (wicket >= 10) {
    incBallBtn.disabled = true; // Disable the increment button for balls
    msgSpan.innerText = "Oops! Our Team is all Out";
    setTimeout(() => {
      msgSpan.innerText = "";
    }, 5000);
  } else {
    incBallBtn.disabled = false; // Enable the button if wickets are less than 10
  }
}

function updateOver() {
  let balls = 0; // Track total balls bowled
  let overs = 0; // Track completed overs

  incBallBtn.addEventListener("click", () => {
    balls += 1; // Increment balls
    if (balls === 6) {
      overs += 1; // Increment overs after 6 balls
      balls = 0;  // Reset balls count
      msgSpan.innerText = "One More Over Finished";
    }
    oversSpan.innerText = `${overs}.${balls}`; // Update the overs display
  });

  decBallBtn.addEventListener("click", () => {
    if (balls > 0) {
      balls -= 1; // Decrement balls
    } else if (overs > 0) {
      overs -= 1; // Reduce overs if balls are 0
      balls = 5;  // Set balls to 5 as an over has 6 balls
    }
    oversSpan.innerText = `${overs}.${balls}`; // Update the overs display
  });
}

function displayPersonalRunOne() {
  totalperRun = onePer + twoPer + threePer + fourPer + sixPer;
  runPer1Span.innerText = totalperRun;
}

function updatePerRun1() {
  oneRunPersBtn.addEventListener("click", () => {
    one += 1;
    onePer +=1;
    countOnePer++;
    displayRun();
    displayPersonalRunOne();
    singlePer1Span.innerText = countOnePer;
  });
}

function updatePerRun2() {
  twoRunPersBtn.addEventListener("click", () => {
    two += 2;
    twoPer += 2;
    countTwoPer++;
    displayRun();
    displayPersonalRunOne();
    doublePer1Span.innerText = countTwoPer;
  });
}

function updatePerRun3() {
  threeRunPersBtn.addEventListener("click", () => {
    three += 3;
    threePer += 3;
    countThreePer++;
    displayRun();
    displayPersonalRunOne();
    triplePer1Span.innerText = countThreePer;
  });
}

function updatePerRun4() {
  fourRunPersBtn.addEventListener("click", () => {
    four += 4;
    fourPer += 4;
    countFourPer++;
    displayRun();
    displayPersonalRunOne();
    fourPer1Span.innerText = countFourPer;
  });
}

function updatePerRun6() {
  sixRunPersBtn.addEventListener("click", () => {
    six += 6;
    sixPer += 6;
    countSixPer++;
    displayRun();
    displayPersonalRunOne();
    sixPer1Span.innerText = countSixPer;
  });
}
// Initialize all functions
document.addEventListener("DOMContentLoaded", () => {
  updateExtraRun();
  updateWideRun();
  updateNoRun();
  updateByRun();
  displayName();
  updateOne();
  updateTwo();
  updateThree();
  updateFour();
  updateSix();
  updateWicket();
  updateOver();
  displayPersonalRunOne();
  updatePerRun1();
  updatePerRun2();
  updatePerRun3();
  updatePerRun4();
  updatePerRun6();
});

