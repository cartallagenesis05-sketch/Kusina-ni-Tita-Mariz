// ===== menu.js =====
// Events used: onclick, oninput, onchange
// Needs menu-data.js (loaded first) for the DISHES list.

var activeCat = "all";
var activePrice = "all";
var searchText = "";

var priceNames = {
  under300: "Under ₱75",
  "300to500": "₱75 to ₱150",
  over500: "Over ₱150"
};

// ---------- Function 1: does a price match the price filter? ----------
function priceMatches(price) {
  if (activePrice == "under300") { return price < 75; }
  if (activePrice == "300to500") { return price >= 75 && price <= 150; }
  if (activePrice == "over500") { return price > 150; }
  return true;
}

// ---------- Function 2: does a dish match the search words? ----------
function searchMatches(dish) {
  if (searchText == "") { return true; }
  var words = (dish.name + " " + dish.desc + " " + dish.ing + " " + CATEGORIES[dish.cat].label).toLowerCase();
  return words.indexOf(searchText) != -1;
}

// ---------- Function 3: build the cards and update the messages ----------
function showDishes() {
  var html = "";
  var total = 0;

  for (var i = 0; i < DISHES.length; i++) {
    var d = DISHES[i];
    if (activeCat != "all" && d.cat != activeCat) { continue; }
    if (!priceMatches(d.price)) { continue; }
    if (!searchMatches(d)) { continue; }

    total++;
    var link = "dish.html?id=" + d.id;
    html += '<article class="dish-card">' +
      '<a class="dish-photo" href="' + link + '" tabindex="-1" aria-hidden="true">' +
        '<img src="' + encodeURI(d.img) + '" alt="' + d.name + '" loading="lazy">' +
      '</a>' +
      '<div class="dish-body">' +
        '<p class="dish-cat">' + CATEGORIES[d.cat].label + (d.best ? ' · Bestseller' : '') + '</p>' +
        '<h3>' + d.name + ' <span class="dish-price">· ₱' + d.price + '</span></h3>' +
        '<p class="dish-desc">' + d.desc + '</p>' +
        '<p class="dish-avail"><span class="dot"></span>Sample available</p>' +
        '<a class="btn-order" href="' + link + '">Order</a>' +
      '</div>' +
    '</article>';
  }

  document.getElementById("dish-grid").innerHTML = html;

  // results message
  var text = document.getElementById("results-text");
  var filtered = (activeCat != "all" || activePrice != "all" || searchText != "");
  if (total == 0) {
    text.textContent = "No dishes found.";
  } else if (filtered) {
    text.textContent = "Showing " + total + (total == 1 ? " dish." : " dishes.");
  } else {
    text.textContent = "Showing all " + total + " dishes.";
  }
  document.getElementById("empty-message").classList.toggle("is-hidden", total != 0);

  // price tag, filter count and clear button
  var tag = document.getElementById("price-tag");
  if (activePrice == "all") {
    tag.classList.add("is-hidden");
  } else {
    tag.textContent = "Price: " + priceNames[activePrice] + " ×";
    tag.classList.remove("is-hidden");
  }
  document.getElementById("filter-button").textContent = activePrice == "all" ? "Filters" : "Filters · 1";
  document.getElementById("clear-button").classList.toggle("is-hidden", !filtered);
}

// ---------- Function 4: choose a category (onclick) ----------
function chooseCategory(cat) {
  activeCat = cat;
  var chips = document.getElementById("chip-row").getElementsByClassName("chip");
  for (var i = 0; i < chips.length; i++) {
    if (chips[i].getAttribute("data-cat") == cat) {
      chips[i].classList.add("chip-active");
    } else {
      chips[i].classList.remove("chip-active");
    }
  }
  showDishes();
}

// ---------- Function 5: choose a price (onchange) ----------
function choosePrice() {
  activePrice = document.getElementById("price-filter").value;
  showDishes();
}

// ---------- Function 6: search as the person types (oninput) ----------
function searchDishes() {
  searchText = document.getElementById("search-input").value.trim().toLowerCase();
  showDishes();
}

// ---------- Function 7: show or hide the filter panel (onclick) ----------
function toggleFilters() {
  var panel = document.getElementById("filter-panel");
  panel.classList.toggle("is-hidden");
  document.getElementById("filter-button").setAttribute("aria-expanded", !panel.classList.contains("is-hidden"));
}

// ---------- Function 8: clear everything (onclick) ----------
function clearFilters() {
  activePrice = "all";
  searchText = "";
  document.getElementById("price-filter").value = "all";
  document.getElementById("search-input").value = "";
  chooseCategory("all");
}

// ---------- Connect the events ----------
var chipButtons = document.getElementById("chip-row").getElementsByClassName("chip");
for (var c = 0; c < chipButtons.length; c++) {
  chipButtons[c].onclick = function () { chooseCategory(this.getAttribute("data-cat")); };
}
document.getElementById("price-filter").onchange = choosePrice;
document.getElementById("search-input").oninput = searchDishes;
document.getElementById("filter-button").onclick = toggleFilters;
document.getElementById("clear-button").onclick = clearFilters;
document.getElementById("price-tag").onclick = function () {
  document.getElementById("price-filter").value = "all";
  choosePrice();
};

// ---------- Start: open the right category if the link asks for one ----------
// The homepage links to menu.html#sec-main, menu.html#sec-soup, etc.
var startCat = window.location.hash.replace("#sec-", "").replace("#", "");
if (CATEGORIES[startCat]) {
  chooseCategory(startCat);
} else {
  showDishes();
}