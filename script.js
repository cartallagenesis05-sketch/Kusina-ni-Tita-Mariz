// ===== script.js =====
// All the JavaScript for the page is in this file.
// Events used: onclick, onmouseover, onmouseout, onchange

// ---------- Function 1: open or close a FAQ answer (onclick) ----------
function toggleFaq(number) {
  var answer = document.getElementById("answer" + number);
  var icon = document.getElementById("icon" + number);

  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");   // show the answer
    icon.textContent = "−";
  } else {
    answer.classList.add("hidden");      // hide the answer
    icon.textContent = "+";
  }
}

// ---------- Function 2: raise a menu card (onmouseover) ----------
function highlightCard(id) {
  document.getElementById(id).classList.add("card-active");
}

// ---------- Function 3: put the card back (onmouseout) ----------
function resetCard(id) {
  document.getElementById(id).classList.remove("card-active");
}

// ---------- Function 4: update the guest message (onchange) ----------
function updateGuests() {
  var guests = document.getElementById("guests").value;
  var message = document.getElementById("message");

  if (guests == 1) {
    message.textContent = "Table for 1 guest.";
  } else {
    message.textContent = "Table for " + guests + " guests.";
  }
}

// ---------- Function 5: Reserve Table button (onclick) ----------
function reserveTable() {
  var guests = document.getElementById("guests").value;
  document.getElementById("message").textContent = "Taking you to the reservation form...";
  window.location.href = "contact.html?guests=" + guests;   // contact.js reads the guests from the address
}

// ---------- Function 6: Order Online button (onclick) ----------
function orderOnline() {
  document.getElementById("message").textContent = "Opening our menu...";
  window.location.href = "menu.html";
}

// ---------- Function 7: show or hide the mobile menu (onclick) ----------
function toggleMenu() {
  var nav = document.getElementById("nav");
  nav.classList.toggle("nav-open");
}

// ---------- Connect the events to the functions ----------

// FAQ buttons: question1 ... question7
document.getElementById("question1").onclick = function () { toggleFaq(1); };
document.getElementById("question2").onclick = function () { toggleFaq(2); };
document.getElementById("question3").onclick = function () { toggleFaq(3); };
document.getElementById("question4").onclick = function () { toggleFaq(4); };
document.getElementById("question5").onclick = function () { toggleFaq(5); };
document.getElementById("question6").onclick = function () { toggleFaq(6); };
document.getElementById("question7").onclick = function () { toggleFaq(7); };

// Menu cards: card1, card2, card3
document.getElementById("card1").onmouseover = function () { highlightCard("card1"); };
document.getElementById("card1").onmouseout  = function () { resetCard("card1"); };
document.getElementById("card2").onmouseover = function () { highlightCard("card2"); };
document.getElementById("card2").onmouseout  = function () { resetCard("card2"); };
document.getElementById("card3").onmouseover = function () { highlightCard("card3"); };
document.getElementById("card3").onmouseout  = function () { resetCard("card3"); };

// Clicking a dish card opens the menu page at that dish's category
document.getElementById("card1").onclick = function () { window.location.href = "menu.html#sec-main"; };
document.getElementById("card2").onclick = function () { window.location.href = "menu.html#sec-main"; };
document.getElementById("card3").onclick = function () { window.location.href = "menu.html#sec-soup"; };

// Guests dropdown
document.getElementById("guests").onchange = updateGuests;

// Buttons
document.getElementById("reserve-button").onclick = reserveTable;
document.getElementById("order-button").onclick = orderOnline;
document.getElementById("menu-button").onclick = toggleMenu;