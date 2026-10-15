// ===== contact.js =====
// Events used: onchange, oninput, onsubmit

// ---------- Function 1: update the booking summary (onchange) ----------
function updateSummary() {
  var guests = document.getElementById("guests").value;
  var date = document.getElementById("date").value;
  var summary = document.getElementById("summary");

  var text = "Table for " + guests + (guests == 1 ? " guest" : " guests");

  if (date != "") {
    var day = new Date(date + "T00:00:00");
    text = text + " on " + day.toDateString();
    if (day.getDay() == 1) {
      text = text + ". We are closed on Mondays, please pick another day";
    }
  }
  summary.textContent = text + ".";
}

// ---------- Function 2: count the letters in the notes box (oninput) ----------
function countLetters() {
  var length = document.getElementById("notes").value.length;
  document.getElementById("char-count").textContent = length + " / 200";
}

// ---------- Function 3: check and send the form (onsubmit) ----------
function sendForm(event) {
  event.preventDefault();   // stop the page from reloading

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("form-message");
  var ok = true;

  name.classList.remove("invalid");
  email.classList.remove("invalid");
  message.className = "form-message";

  if (name.value.trim() == "") {
    name.classList.add("invalid");
    ok = false;
  }
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    email.classList.add("invalid");
    ok = false;
  }

  if (ok == false) {
    message.textContent = "Please enter your name and a valid email.";
    message.classList.add("error");
  } else {
    message.textContent = "Thank you, " + name.value.trim() + "! (Design preview, nothing was booked.)";
    message.classList.add("success");
  }
}

// ---------- Connect the events ----------
document.getElementById("guests").onchange = updateSummary;
document.getElementById("date").onchange = updateSummary;
document.getElementById("notes").oninput = countLetters;
document.getElementById("reserve-form").onsubmit = sendForm;