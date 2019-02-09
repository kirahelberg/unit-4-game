$(document).ready(function() {
  // Set value of crystals + target number
  let targetNumber = 0;
  let blueCrystal = 0;
  let orangeCrystal = 0;
  let redCrystal = 0;
  let yellowCrystal = 0;

  // Score variables
  let done = false;
  let totalScore = 0;
  let totalWins = 0;
  let totalLosses = 0;

  function getRandNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Assign value to crystals + set target value
  targetNumber = getRandNumber(19, 120);
  blueCrystal = getRandNumber(1, 12);
  orangeCrystal = getRandNumber(1, 12);
  redCrystal = getRandNumber(1, 12);
  yellowCrystal = getRandNumber(1, 12);
  done = false;

  // Show score + target number
  $("#game-number").text(targetNumber);
  $("#totalWins").text(totalWins);
  $("#totalLosses").text(totalLosses);
  $("#total-score").text(totalScore);

  // Function to reset the game once it ends
  function resetGame() {
    targetNumber = getRandNumber(19, 120);
    blueCrystal = getRandNumber(1, 12);
    orangeCrystal = getRandNumber(1, 12);
    redCrystal = getRandNumber(1, 12);
    yellowCrystal = getRandNumber(1, 12);
    done = false;
    $("#game-number").text(targetNumber);
    $("#totalWins").text(totalWins);
    $("#totalLosses").text(totalLosses);
    $("#total-score").text(totalScore);
  }

  $("#crystal-button").on("click", function(evt) {
    const value = evt.currentTarget.value;
    $("#total-score").append(value);
  });
  resetGame();

  console.log("computer = " + targetNumber);
  console.log("Blue = " + blueCrystal);
  console.log("Orange = " + orangeCrystal);
  console.log("Red = " + redCrystal);
  console.log("Yellow = " + yellowCrystal);
});
