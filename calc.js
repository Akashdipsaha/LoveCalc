function calculate() {
  var yourName = document.getElementById("your-name").value;
  var crushName = document.getElementById("crush-name").value;

  if (yourName.trim() == "" || crushName.trim() == "") {
    alert("Please enter your name and your crush's name.");
    return;
  }
  
  var lovescore = Math.random() * 100;
  lovescore = Math.floor(lovescore) + 1;
  if (lovescore > 70) {
    alert(
      "Your love score is " + lovescore + "%" + " You both are meant to be together"
    );
    lovescore = "Wow! You and " + crushName + " are meant to be together!";
  } 
  else if (lovescore >= 30 && lovescore <= 70) {
    alert(
        "Your love score is " + lovescore + "%" + " Quite more than just friends"
    );
    lovescore = "You and " + crushName + " have a decent chance of making it work.";
  } else {
    alert(
      "Your love score is " + lovescore + "%" + " Need to spend some quality time together"
    );
    lovescore = "Sorry, " + yourName + ", but it looks like you and " + crushName + " are not a match.";
  }

  document.getElementById("result").innerHTML = lovescore;
}
