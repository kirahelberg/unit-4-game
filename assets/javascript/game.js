$(document).ready(function() {
  // Set value of crystals + target number
  let targetNumber = 0;
  let blueCrystal = 0;
  let orangeCrystal = 0;
  let redCrystal = 0;
  let yellowCrystal = 0;

  // Score variables
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
    totalScore = 0;

    // Display nunmber of target number, wins, losses, and total score
    $("#game-number").text(targetNumber);
    $("#totalWins").text(totalWins);
    $("#totalLosses").text(totalLosses);
    $("#total-score").text(totalScore);
    $("#winorloss-text").text();
  }

  // Click blue crystal
  $("#blue-crystal").on("click", function(evt) {
    totalScore += blueCrystal;
    $("#total-score").text(totalScore);
    endGame();
  });

  //Click orange crystal
  $("#orange-crystal").on("click", function(evt) {
    totalScore += orangeCrystal;
    $("#total-score").text(totalScore);
    endGame();
  });

  //Click red crystal
  $("#red-crystal").on("click", function(evt) {
    totalScore += redCrystal;
    $("#total-score").text(totalScore);
    endGame();
  });

  //Click yellow crystal
  $("#yellow-crystal").on("click", function(evt) {
    totalScore += yellowCrystal;
    $("#total-score").text(totalScore);
    endGame();
  });

  //Set function to end the game and change number of wins + losses
  function endGame() {
    if (totalScore === targetNumber) {
      totalWins++;
      $("#winorloss-text").text("You won!");
      resetGame();
    }
    if (totalScore > targetNumber) {
      totalLosses++;
      $("#winorloss-text").text("Sorry, you lose.");
      resetGame();
    }
  }
});
