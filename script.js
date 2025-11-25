
  document.getElementById('myText').onclick = function() {
    this.classList.toggle('zoomed');
  };

function userSelection() {
const selectedRadio = document.querySelector('#A1[name="boxA"]:checked');
const boxNum = selectedRadio.value;
let userConfirm = confirm("Is " + boxNum + " the correct box?")

if (userConfirm) {
  alert("Your door for " + boxNum + " will open shortly!");
  
  // Perform the action if the user confirmed
} else {
  alert("Please select correct box number.");
  // Handle cancellation
}
}

function openCustomPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popupDialog").style.display = "block";
}

function closeCustomPopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupDialog").style.display = "none";
}

// Optional: Close popup when clicking outside (on the overlay)
window.onclick = function(event) {
  const overlay = document.getElementById('overlay');
  if (event.target == overlay) {
    closeCustomPopup();
  }
}

