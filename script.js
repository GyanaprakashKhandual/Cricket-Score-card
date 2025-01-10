// Action buttons
const newButton = document.querySelector("#new");
const resetButton = document.querySelector("#reset");
const saveButton = document.querySelector("#save");
const downloadButton = document.querySelector("#download");

// Run buttons
const decRunButton = document.querySelector("#decRun");
const runButtons = document.querySelectorAll(".runBtn"); // All run buttons (1, 2, 3, 4, 6)

// Wicket buttons
const incWicButton = document.querySelector("#incWic");
const decWicButton = document.querySelector("#decWic");

// Four buttons
const incFourButton = document.querySelector("#incFour");
const decFourButton = document.querySelector("#decFour");

// Six buttons
const incSixButton = document.querySelector("#incSix");
const decSixButton = document.querySelector("#decSix");

// Ball buttons
const incBallButton = document.querySelector("#incBall");
const decBallButton = document.querySelector("#decBall");

// Score spans
const scoreSpan = document.querySelector("#score");
const wicketSpan = document.querySelector("#wicket");
const foursSpan = document.querySelector("#fours");
const sixesSpan = document.querySelector("#sixes");
const oversSpan = document.querySelector("#overs");

// Input fields
const targetInput = document.querySelector(
  ".misclleanous-targets .tag input.num"
); // Target input
const oversInput = document.querySelector(
  ".misclleanous-targets .tag input.num:nth-of-type(2)"
); // Over input

// Extra score buttons and span
const extraScoreSpan = document.querySelector("#extraScore"); // Extras span
const incExtraButton = document.querySelector("#incExtra"); // Increment Extras button
const decExtraButton = document.querySelector("#decExtra"); // Decrement Extras button

// By score buttons and span
const byScoreSpan = document.querySelector("#byScore"); // By span
const incByButton = document.querySelector("#incBy"); // Increment By button
const decByButton = document.querySelector("#decBy"); // Decrement By button

// Wide score buttons and span
const wideScoreSpan = document.querySelector("#wideScore"); // Wide span
const incWideButton = document.querySelector("#incWide"); // Increment Wide button
const decWideButton = document.querySelector("#decWide"); // Decrement Wide button

// No-ball score buttons and span
const noScoreSpan = document.querySelector("#noScore"); // No span
const incNoButton = document.querySelector("#incNo"); // Increment No button
const decNoButton = document.querySelector("#decNo"); // Decrement No button

// Batsman-specific selectors
const batsmanOne = {
  run: document.querySelector("#runPer1"),
  ballFaced: document.querySelector("#ballFacedPer1"),
  single: document.querySelector("#singlePer1"),
  double: document.querySelector("#doublePer1"),
  triple: document.querySelector("#triplePer1"),
  four: document.querySelector("#fourPer1"),
  six: document.querySelector("#sixPer1"),
  buttons: {
    decRun: document.querySelector("#decRunPers"),
    oneRun: document.querySelector("#oneRunPers"),
    twoRun: document.querySelector("#twoRunPers"),
    threeRun: document.querySelector("#threeRunPers"),
    fourRun: document.querySelector("#fourRunPers"),
    sixRun: document.querySelector("#sixRunPers"),
    incBall: document.querySelector("#incBallPers"),
    decBall: document.querySelector("#decBallPers"),
  },
};

const batsmanTwo = {
  run: document.querySelector("#batsManTwo .tag:nth-of-type(1) .sign"),
  ballFaced: document.querySelector("#batsManTwo .tag:nth-of-type(2) .sign"),
  single: document.querySelector("#batsManTwo .tag:nth-of-type(3) .sign"),
  double: document.querySelector("#batsManTwo .tag:nth-of-type(4) .sign"),
  triple: document.querySelector("#batsManTwo .tag:nth-of-type(5) .sign"),
  four: document.querySelector("#batsManTwo .tag:nth-of-type(6) .sign"),
  six: document.querySelector("#batsManTwo .tag:nth-of-type(7) .sign"),
  buttons: {
    decRun: document.querySelector("#decRunPers2"),
    oneRun: document.querySelector("#oneRunPers2"),
    twoRun: document.querySelector("#twoRunPers2"),
    threeRun: document.querySelector("#threeRunPers2"),
    fourRun: document.querySelector("#fourRunPers2"),
    sixRun: document.querySelector("#sixRunPers2"),
    incBall: document.querySelector("#incBallPers2"),
    decBall: document.querySelector("#decBallPers2"),
  },
};


// Initialize variables
let score = 0;
let wicket = 0;
let foursTeam = 0;
let sixTeam = 0;
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let six = 0;
let totalScore = 0;
let totalExtraScore = 0;
let wide = 0;
let no = 0;
let by = 0;
let balls = 0;

// Function to display the score
function displayScore() {
  totalScore = one + two + three + four + six;
  scoreSpan.innerText = totalScore;
}

// Function to update the score based on the button clicks
function updateRunButtons() {
  runButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const runValue = parseInt(button.innerText.trim(), 10); // Ensure to handle any extra whitespace

      // Update the corresponding score
      if (runValue === 1) {
        one += 1;
      } else if (runValue === 2) {
        two += 2;
      } else if (runValue === 3) {
        three += 3;
      } else if (runValue === 4) {
        four += 4;
        foursTeam += 1; // Increment the number of fours hit
        foursSpan.innerText = foursTeam;
      } else if (runValue === 6) {
        six += 6;
        sixTeam += 1; // Increment the number of sixes hit
        sixesSpan.innerText = sixTeam;
      }
      displayScore();
    });
  });
}



function initializeBatsmanActions(batsman, name) {
  let runs = 0;
  let balls = 0;
  let singles = 0;
  let doubles = 0;
  let triples = 0;
  let fours = 0;
  let sixes = 0;


  const updateDisplay = () => {
    batsman.run.innerText = runs;
    batsman.ballFaced.innerText = balls;
    batsman.single.innerText = singles;
    batsman.double.innerText = doubles;
    batsman.triple.innerText = triples;
    batsman.four.innerText = fours;
    batsman.six.innerText = sixes;
    console.log(
      `${name} - Runs: ${runs}, Balls: ${balls}, Singles: ${singles}, Doubles: ${doubles}, Triples: ${triples}, Fours: ${fours}, Sixes: ${sixes}`
    );
  };

  batsman.buttons.oneRun.addEventListener("click", () => {
    runs += 1;
    singles += 1;
    one += 1;
    displayScore();
    updateDisplay();
  });

  batsman.buttons.twoRun.addEventListener("click", () => {
    runs += 2;
    doubles += 1;
    two += 2;
    displayScore();
    updateDisplay();
  });

  batsman.buttons.threeRun.addEventListener("click", () => {
    runs += 3;
    triples += 1;
    three += 3;
    displayScore();
    updateDisplay();
  });

  batsman.buttons.fourRun.addEventListener("click", () => {
    runs += 4;
    fours += 1;
    four += 4;
    foursTeam += 1;
    foursSpan.innerText = foursTeam;
    displayScore();
    updateDisplay();
  });

  batsman.buttons.sixRun.addEventListener("click", () => {
    runs += 6;
    sixes += 1;
    six += 6;
    sixTeam += 1;
    sixesSpan.innerText = sixTeam;
    displayScore();
    updateDisplay();
  });

  batsman.buttons.incBall.addEventListener("click", () => {
    balls += 1;
    updateDisplay();
  });

  batsman.buttons.decBall.addEventListener("click", () => {
    if (balls > 0) {
      balls -= 1;
      updateDisplay();
    }
  });

  batsman.buttons.decRun.addEventListener("click", () => {
    if (runs > 0) {
      runs -= 1;
      updateDisplay();
    }
  });
}

// Function to decrease the score
function decreaseScore() {
  decRunButton.addEventListener("click", () => {
    if (totalScore > 0) { // Ensure the score does not go below 0
      totalScore -= 1;

      // Deduct from the most recent scoring type, e.g., six, four, etc.
      if (six > 0) {
        six -= 6;
        sixTeam -= 1;
        sixesSpan.innerText = sixTeam;
      } else if (four > 0) {
        four -= 4;
        foursTeam -= 1;
        foursSpan.innerText = foursTeam;
      } else if (three > 0) {
        three -= 3;
      } else if (two > 0) {
        two -= 2;
      } else if (one > 0) {
        one -= 1;
      }

      displayScore();
    }
  });
}




// Function to update wicket count
function updateWicket() {
  incWicButton.addEventListener("click", () => {
    if (wicket < 10) {
      // Ensure maximum 10 wickets
      wicket += 1;
      wicketSpan.innerText = wicket;
    }
  });

  decWicButton.addEventListener("click", () => {
    if (wicket > 0) {
      wicket -= 1;
      wicketSpan.innerText = wicket;
    }
  });
}


// Function to update overs and balls
function updateOvers() {
  let balls = 0; // Initialize balls as 0 when starting a new over

  // Increment balls and update overs
  incBallButton.addEventListener('click', () => {
    balls += 1; // Increase balls

    if (balls === 6) {
      balls = 0; // Reset balls after completing an over
      const [completedOvers] = oversSpan.innerText.split('.').map(Number); // Get the completed overs
      oversSpan.innerText = `${completedOvers + 1}.0`; // Update overs to the next over
    } else {
      const [completedOvers] = oversSpan.innerText.split('.').map(Number); // Get the completed overs
      oversSpan.innerText = `${completedOvers}.${balls}`; // Update overs with balls
    }
  });

  // Decrement balls and update overs
  decBallButton.addEventListener('click', () => {
    const [completedOvers, extraBalls] = oversSpan.innerText.split('.').map(Number); // Get the completed overs and extra balls
    if (balls > 0) {
      balls -= 1; // Decrease balls
      oversSpan.innerText = `${completedOvers}.${balls}`; // Update overs with balls
    } else if (completedOvers > 0) {
      balls = 5; // Set balls to 5 to reflect the last ball of the previous over
      oversSpan.innerText = `${completedOvers - 1}.${balls}`; // Update overs to the previous over
    }
  });
}


// Initialize actions for both batsmen
initializeBatsmanActions(batsmanOne, 'Batsman One');
initializeBatsmanActions(batsmanTwo, 'Batsman Two');

// Call functions to set up the score tracker
updateRunButtons(); // Attach event listeners to run buttons
updateWicket();     // Attach event listeners to wicket buttons

// Call resetScore to ensure the reset functionality is active
resetScore();       // Attach event listener to the reset button
updateOvers();
decreaseScore();