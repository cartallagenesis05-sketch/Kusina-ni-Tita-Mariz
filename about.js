// ===== about.js =====
// Events used: onclick, onmouseover, onmouseout

// The text for each tab
var valueTitles = ["Family recipes", "Local ingredients", "Warm welcome"];
var valueTexts = [
  "Our dishes follow recipes passed down through the family. We keep the technique traditional, because the best adobo is still the one that simmers slowly with soy, vinegar and garlic.",
  "We buy from local farms and markets whenever we can. Fresh vegetables, native garlic and ripe calamansi make a simple dish taste like home.",
  "At our table, nobody eats alone. We greet you like family, refill the rice before you ask, and always offer a second helping."
];

// ---------- Function 1: show a value when a tab is clicked (onclick) ----------
function showValue(number) {
  // number is 1, 2 or 3
  document.getElementById("value-title").textContent = valueTitles[number - 1];
  document.getElementById("value-text").textContent = valueTexts[number - 1];

  // make only the clicked tab look active
  for (var i = 1; i <= 3; i++) {
    document.getElementById("tab" + i).classList.remove("tab-active");
  }
  document.getElementById("tab" + number).classList.add("tab-active");
}

// ---------- Function 2: zoom the photo (onmouseover) ----------
function zoomPhoto() {
  document.getElementById("about-photo").classList.add("photo-zoom");
}

// ---------- Function 3: put the photo back (onmouseout) ----------
function resetPhoto() {
  document.getElementById("about-photo").classList.remove("photo-zoom");
}

// ---------- Connect the events ----------
document.getElementById("tab1").onclick = function () { showValue(1); };
document.getElementById("tab2").onclick = function () { showValue(2); };
document.getElementById("tab3").onclick = function () { showValue(3); };
document.getElementById("about-photo").onmouseover = zoomPhoto;
document.getElementById("about-photo").onmouseout = resetPhoto;