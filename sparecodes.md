// Action b// Function to decrease the score
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
}uttons
const newButton = document.querySelector('#new');
const resetButton = document.querySelector('#reset');
const saveButton = document.querySelector('#save');
const downloadButton = document.querySelector('#download');

// Run buttons
const decRunButton = document.querySelector('#decRun'); 
const runButtons = document.querySelectorAll('.runBtn'); // All run buttons (1, 2, 3, 4, 6)

// Wicket buttons
const incWicButton = document.querySelector('#incWic');
const decWicButton = document.querySelector('#decWic');

// Four buttons
const incFourButton = document.querySelector('#incFour');
const decFourButton = document.querySelector('#decFour');

// Six buttons
const incSixButton = document.querySelector('#incSix');
const decSixButton = document.querySelector('#decSix');

// Ball buttons
const incBallButton = document.querySelector('#incBall');
const decBallButton = document.querySelector('#decBall');

// Score spans
const scoreSpan = document.querySelector('#score');
const wicketSpan = document.querySelector('#wicket');
const foursSpan = document.querySelector('#fours');
const sixesSpan = document.querySelector('#sixes');
const oversSpan = document.querySelector('#overs');

// Input fields
const targetInput = document.querySelector('.misclleanous-targets .tag input.num'); // Target input
const oversInput = document.querySelector('.misclleanous-targets .tag input.num:nth-of-type(2)'); // Over input

// Extra score buttons and span
const extraScoreSpan = document.querySelector('#extraScore'); // Extras span
const incExtraButton = document.querySelector('#incExtra');   // Increment Extras button
const decExtraButton = document.querySelector('#decExtra');   // Decrement Extras button

// By score buttons and span
const byScoreSpan = document.querySelector('#byScore'); // By span
const incByButton = document.querySelector('#incBy');   // Increment By button
const decByButton = document.querySelector('#decBy');   // Decrement By button

// Wide score buttons and span
const wideScoreSpan = document.querySelector('#wideScore'); // Wide span
const incWideButton = document.querySelector('#incWide');   // Increment Wide button
const decWideButton = document.querySelector('#decWide');   // Decrement Wide button

// No-ball score buttons and span
const noScoreSpan = document.querySelector('#noScore'); // No span
const incNoButton = document.querySelector('#incNo');   // Increment No button
const decNoButton = document.querySelector('#decNo');   // Decrement No button

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
  runButtons.forEach(button => {
    button.addEventListener('click', () => {
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

// Function to update wicket count
function updateWicket() {
  incWicButton.addEventListener('click', () => {
    if (wicket < 10) { // Ensure maximum 10 wickets
      wicket += 1;
      wicketSpan.innerText = wicket;
    }
  });

  decWicButton.addEventListener('click', () => {
    if (wicket > 0) {
      wicket -= 1;
      wicketSpan.innerText = wicket;
    }
  });
}

// Function to handle reset action
function resetScore() {
  resetButton.addEventListener('click', () => {
    // Reset all variables
    score = 0;
    wicket = 0;
    foursTeam = 0;
    sixTeam = 0;
    one = 0;
    two = 0;
    three = 0;
    four = 0;
    six = 0;
    totalScore = 0;

    // Update the UI
    scoreSpan.innerText = 0;
    wicketSpan.innerText = 0;
    foursSpan.innerText = 0;
    sixesSpan.innerText = 0;
    oversSpan.innerText = '0.0';
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

// Function to update extras score (wide, no, and by)
function updateExtraScores() {
  // Update wide score
  incWideButton.addEventListener("click", () => {
    wide += 1; // Increase wide score
    displayExtraScore(); // Update the total extra score
    wideScoreSpan.innerText = wide; // Update the wide score display
  });

  decWideButton.addEventListener("click", () => {
    if (wide > 0) { // Ensure wide score doesn't go below 0
      wide -= 1;
      displayExtraScore(); // Update the total extra score
      wideScoreSpan.innerText = wide; // Update the wide score display
    }
  });

  // Update No score
  incNoButton.addEventListener("click", () => {
    no += 1; // Increase No score
    displayExtraScore(); // Update the total extra score
    noScoreSpan.innerText = no; // Update the No score display
  });

  decNoButton.addEventListener("click", () => {
    if (no > 0) { // Ensure No score doesn't go below 0
      no -= 1;
      displayExtraScore(); // Update the total extra score
      noScoreSpan.innerText = no; // Update the No score display
    }
  });

  // Update By score
  incByButton.addEventListener("click", () => {
    by += 1; // Increase By score
    displayExtraScore(); // Update the total extra score
    byScoreSpan.innerText = by; // Update the By score display
  });

  decByButton.addEventListener("click", () => {
    if (by > 0) { // Ensure By score doesn't go below 0
      by -= 1;
      displayExtraScore(); // Update the total extra score
      byScoreSpan.innerText = by; // Update the By score display
    }
  });
}

// Function to display total extra score
function displayExtraScore() {
  totalExtraScore = wide + no + by; // Calculate the total extras
  extraScoreSpan.innerText = totalExtraScore; // Update the display
}

// Select all elements for batsman one
const batsmanOne = document.querySelector('#batsManOne');

// Name input field
const nameOfBat = batsmanOne.querySelector('.nameOfBat');

// Run Span
const runPer1 = batsmanOne.querySelector('#runPer1');

// Ball Faced Span
const ballFacedPer1 = batsmanOne.querySelector('#ballFacedPer1');

// Single Span
const singlePer1 = batsmanOne.querySelector('#singlePer1');

// Double Span
const doublePer1 = batsmanOne.querySelector('#doublePer1');

// Triple Span
const triplePer1 = batsmanOne.querySelector('#triplePer1');

// Four Span
const fourPer1 = batsmanOne.querySelector('#fourPer1');

// Six Span
const sixPer1 = batsmanOne.querySelector('#sixPer1');

// Buttons for Batsman One
const decRunPers = batsmanOne.querySelector('#decRunPers');
const oneRunPers = batsmanOne.querySelector('#oneRunPers');
const twoRunPers = batsmanOne.querySelector('#twoRunPers');
const threeRunPers = batsmanOne.querySelector('#threeRunPers');
const fourRunPers = batsmanOne.querySelector('#fourRunPers');
const sixRunPers = batsmanOne.querySelector('#sixRunPers');

// Ball buttons
const incBallPers = batsmanOne.querySelector('#incBallPers');
const decBallPers = batsmanOne.querySelector('#decBallPers');

// Single buttons
const incSingPers = batsmanOne.querySelector('#incSingPers');
const decSingPers = batsmanOne.querySelector('#decSingPers');

// Double buttons
const incDobPers = batsmanOne.querySelector('#incDobPers');
const decDobPers = batsmanOne.querySelector('#decDobPers');

// Triple buttons
const incTriPers = batsmanOne.querySelector('#incTriPers');
const decTriPers = batsmanOne.querySelector('#decTriPers');

// Four buttons
const incFourPers = batsmanOne.querySelector('#incFourPers');
const decFourPers = batsmanOne.querySelector('#decFourPers');

// Six buttons
const incSixPers = batsmanOne.querySelector('#incSixPers');
const decSixPers = batsmanOne.querySelector('#decSixPers');

let ballPer1 = 0; // Number of balls faced by batsman one


function updateBallBatsmanOne() {
  incBallPers.addEventListener("click", () => {
    ballPer1 += 1; // Increment balls faced by batsman one
    ballFacedPer1.innerText = ballPer1;

    if (balls === 5) { // After 6th ball, reset the count
      balls = 0;
      const [completedOvers] = oversSpan.innerText.split('.').map(Number); // Get completed overs
      oversSpan.innerText = `${completedOvers + 1}.0`; // Update overs to next over
    } else {
      balls += 1; // Increment the current ball count
      const [completedOvers] = oversSpan.innerText.split('.').map(Number); // Get completed overs
      oversSpan.innerText = `${completedOvers}.${balls}`; // Update overs with balls
    }
  });

  decBallPers.addEventListener("click", () => {
    if (ballPer1 > 0) { // Decrement balls faced by batsman one, if valid
      ballPer1 -= 1;
      ballFacedPer1.innerText = ballPer1;
    }

    const [completedOvers, extraBalls] = oversSpan.innerText.split('.').map(Number); // Get completed overs and balls

    if (balls > 0) {
      balls -= 1; // Decrease the ball count
      oversSpan.innerText = `${completedOvers}.${balls}`; // Update overs with balls
    } else if (completedOvers > 0) {
      balls = 5; // Set balls to the last ball of the previous over
      oversSpan.innerText = `${completedOvers - 1}.${balls}`; // Update overs to the previous over
    }
  });
}



let single1 = 0;
let double1 = 0;
let triple1 = 0;
let fours1 = 0;
let six1 = 0;
let totalPersonalScore1 = 0;
let countSingle1 = 0;
let countDouble1 = 0;
let countTriple1 = 0;
let countFour1 = 0;
let countSix1 = 0;

function updateScorePersonalOne() {

  totalPersonalScore1 = single1 + double1 + triple1 + fours1 + six1;
  runPer1.innerText = totalPersonalScore1;

}

function updateScorePersonOne() {
  incSingPers.addEventListener("click", () => {
    single1 += 1;
    countSingle1 += 1;
    one += 1;
    singlePer1.innerText = countSingle1;
    updateScorePersonalOne();
    displayScore();
  });
  decSingPers.addEventListener('click', () => {
    if(single1 > 0){
      single1 -= 1;
      one -= 1;
      countSingle1 -= 1;
      updateScorePersonalOne();
      displayScore();
    }
  });

  incDobPers.addEventListener("click", () => {
    double1 += 1;
    updateScorePersonOne();
  })
}







































// Call all functions to initialize
updateRunButtons();
updateWicket();
resetScore();
decreaseScore();
updateOvers();
updateExtraScores();
updateBallBatsmanOne();
updateScorePersonOne();

// Action buttons
const newButton = document.querySelector('#new');
const resetButton = document.querySelector('#reset');
const saveButton = document.querySelector('#save');
const downloadButton = document.querySelector('#download');

// Run buttons
const decRunButton = document.querySelector('#decRun'); 
const runButtons = document.querySelectorAll('.runBtn'); // All run buttons (1, 2, 3, 4, 6)

// Wicket buttons
const incWicButton = document.querySelector('#incWic');
const decWicButton = document.querySelector('#decWic');

// Four buttons
const incFourButton = document.querySelector('#incFour');
const decFourButton = document.querySelector('#decFour');

// Six buttons
const incSixButton = document.querySelector('#incSix');
const decSixButton = document.querySelector('#decSix');

// Ball buttons
const incBallButton = document.querySelector('#incBall');
const decBallButton = document.querySelector('#decBall');

// Score spans
const scoreSpan = document.querySelector('#score');
const wicketSpan = document.querySelector('#wicket');
const foursSpan = document.querySelector('#fours');
const sixesSpan = document.querySelector('#sixes');
const oversSpan = document.querySelector('#overs');

// Input fields
const targetInput = document.querySelector('.misclleanous-targets .tag input.num'); // Target input
const oversInput = document.querySelector('.misclleanous-targets .tag input.num:nth-of-type(2)'); // Over input

// Extra score buttons and span
const extraScoreSpan = document.querySelector('#extraScore'); // Extras span
const incExtraButton = document.querySelector('#incExtra');   // Increment Extras button
const decExtraButton = document.querySelector('#decExtra');   // Decrement Extras button

// By score buttons and span
const byScoreSpan = document.querySelector('#byScore'); // By span
const incByButton = document.querySelector('#incBy');   // Increment By button
const decByButton = document.querySelector('#decBy');   // Decrement By button

// Wide score buttons and span
const wideScoreSpan = document.querySelector('#wideScore'); // Wide span
const incWideButton = document.querySelector('#incWide');   // Increment Wide button
const decWideButton = document.querySelector('#decWide');   // Decrement Wide button

// No-ball score buttons and span
const noScoreSpan = document.querySelector('#noScore'); // No span
const incNoButton = document.querySelector('#incNo');   // Increment No button
const decNoButton = document.querySelector('#decNo');   // Decrement No button

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
  runButtons.forEach(button => {
    button.addEventListener('click', () => {
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

// Function to update wicket count
function updateWicket() {
  incWicButton.addEventListener('click', () => {
    if (wicket < 10) { // Ensure maximum 10 wickets
      wicket += 1;
      wicketSpan.innerText = wicket;
    }
  });

  decWicButton.addEventListener('click', () => {
    if (wicket > 0) {
      wicket -= 1;
      wicketSpan.innerText = wicket;
    }
  });
}

// Function to handle reset action
function resetScore() {
  resetButton.addEventListener('click', () => {
    // Reset all variables
    score = 0;
    wicket = 0;
    foursTeam = 0;
    sixTeam = 0;
    one = 0;
    two = 0;
    three = 0;
    four = 0;
    six = 0;
    totalScore = 0;

    // Update the UI
    scoreSpan.innerText = 0;
    wicketSpan.innerText = 0;
    foursSpan.innerText = 0;
    sixesSpan.innerText = 0;
    oversSpan.innerText = '0.0';
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

// Function to update extras score (wide, no, and by)
function updateExtraScores() {
  // Update wide score
  incWideButton.addEventListener("click", () => {
    wide += 1; // Increase wide score
    displayExtraScore(); // Update the total extra score
    wideScoreSpan.innerText = wide; // Update the wide score display
  });

  decWideButton.addEventListener("click", () => {
    if (wide > 0) { // Ensure wide score doesn't go below 0
      wide -= 1;
      displayExtraScore(); // Update the total extra score
      wideScoreSpan.innerText = wide; // Update the wide score display
    }
  });

  // Update No score
  incNoButton.addEventListener("click", () => {
    no += 1; // Increase No score
    displayExtraScore(); // Update the total extra score
    noScoreSpan.innerText = no; // Update the No score display
  });

  decNoButton.addEventListener("click", () => {
    if (no > 0) { // Ensure No score doesn't go below 0
      no -= 1;
      displayExtraScore(); // Update the total extra score
      noScoreSpan.innerText = no; // Update the No score display
    }
  });

  // Update By score
  incByButton.addEventListener("click", () => {
    by += 1; // Increase By score
    displayExtraScore(); // Update the total extra score
    byScoreSpan.innerText = by; // Update the By score display
  });

  decByButton.addEventListener("click", () => {
    if (by > 0) { // Ensure By score doesn't go below 0
      by -= 1;
      displayExtraScore(); // Update the total extra score
      byScoreSpan.innerText = by; // Update the By score display
    }
  });
}

// Function to display total extra score
function displayExtraScore() {
  totalExtraScore = wide + no + by; // Calculate the total extras
  extraScoreSpan.innerText = totalExtraScore; // Update the display
}

// Call all functions to initialize
updateRunButtons();
updateWicket();
resetScore();
decreaseScore();
updateOvers();
updateExtraScores();
