// ===== dish.js =====
// Events used: onclick, onchange
// Needs menu-data.js (loaded first) for DISHES, CATEGORIES and EXTRAS.

var dish = null;
var extra = null;
var quantity = 1;
var dishIndex = 0;

// ---------- Find the dish named in the address (dish.html?id=chicken-adobo) ----------
var wantedId = window.location.search.replace("?id=", "");
for (var i = 0; i < DISHES.length; i++) {
  if (DISHES[i].id == wantedId) {
    dish = DISHES[i];
    dishIndex = i;
  }
}

// ---------- Function 1: work out the price of one dish with the add-on ----------
function unitPrice() {
  var price = dish.price;
  if (document.getElementById("addon-check").checked) { price = price + extra.addon[1]; }
  return price;
}

// ---------- Function 2: update the total and the button (onclick / onchange) ----------
function updateTotal() {
  var unit = unitPrice();
  var total = unit * quantity;
  document.getElementById("qty-value").textContent = quantity;
  document.getElementById("total-line").textContent = quantity + " × ₱" + unit + " = ₱" + total;
  document.getElementById("cart-button").textContent = "Add " + quantity + " to sample cart · ₱" + total;
  document.getElementById("qty-minus").disabled = (quantity == 1);
  document.getElementById("qty-plus").disabled = (quantity == 10);
}

// ---------- Function 3: change the quantity (onclick) ----------
function changeQuantity(amount) {
  quantity = quantity + amount;
  if (quantity < 1) { quantity = 1; }
  if (quantity > 10) { quantity = 10; }
  document.getElementById("cart-message").textContent = "Design preview only. This button does not add items or place an order.";
  updateTotal();
}

// ---------- Function 4: pick a preparation (onchange) ----------
function choosePrep() {
  var labels = document.getElementById("prep-options").getElementsByClassName("option");
  for (var i = 0; i < labels.length; i++) {
    var picked = labels[i].getElementsByTagName("input")[0].checked;
    labels[i].classList.toggle("option-selected", picked);
  }
}

// ---------- Function 5: tick or untick the add-on (onchange) ----------
function chooseAddon() {
  var box = document.getElementById("addon-check");
  document.getElementById("addon-label").classList.toggle("option-selected", box.checked);
  document.getElementById("addon-note").textContent = box.checked ? "Added to each dish in this sample order" : "Not selected in this sample order";
  updateTotal();
}

// ---------- Function 6: the sample cart button (onclick) ----------
function addToCart() {
  var prep = document.querySelector("input[name='prep']:checked").getAttribute("data-name");
  document.getElementById("cart-message").textContent =
    "Sample cart: " + quantity + " × " + dish.name + " (" + prep + "). Design preview only, nothing was ordered.";
}

// ---------- Function 7: switch the details tab (onclick) ----------
function showDetails(which) {
  var isIng = (which == "ing");
  document.getElementById("tab-ing").classList.toggle("chip-active", isIng);
  document.getElementById("tab-serve").classList.toggle("chip-active", !isIng);
  document.getElementById("details-title").textContent = isIng ? "Simple ingredients. Deep flavor." : "How we like it served.";
  document.getElementById("details-text").textContent = isIng
    ? "Sample ingredients: " + dish.ing + ". The final recipe, portion size and ingredient sourcing are to be confirmed."
    : extra.tip;
}

// ---------- Function 8: pick dishes that go well with this one ----------
var pairings = {
  main: ["soup", "drinks"], soup: ["main", "dessert"], grilled: ["soup", "drinks"],
  silog: ["drinks", "dessert"], sizzling: ["soup", "drinks"], dessert: ["drinks", "main"], drinks: ["main", "dessert"]
};
function pairText() {
  var found = [];
  for (var p = 0; p < 2; p++) {
    var list = [];
    for (var i = 0; i < DISHES.length; i++) {
      if (DISHES[i].cat == pairings[dish.cat][p]) { list.push(DISHES[i]); }
    }
    var pick = list[dishIndex % list.length];
    found.push('<a href="dish.html?id=' + pick.id + '">' + pick.name + '</a>');
  }
  return "Pair " + dish.name + " with " + found[0] + " or " + found[1] + ". Explore the sample menu for more inspiration.";
}

// ---------- Start: fill the page ----------
if (dish == null) {
  document.getElementById("dish-page").classList.add("is-hidden");
  document.getElementById("dish-missing").classList.remove("is-hidden");
} else {
  extra = EXTRAS[dish.cat];
  document.title = dish.name + " | Kusina ni Tita Mariz";
  document.getElementById("crumb-name").textContent = dish.name;
  document.getElementById("dish-image").src = encodeURI(dish.img);
  document.getElementById("dish-image").alt = dish.name;
  document.getElementById("dish-cat").textContent = CATEGORIES[dish.cat].label + (dish.best ? " · Bestseller" : "");
  document.getElementById("dish-name").textContent = dish.name;
  document.getElementById("dish-price").textContent = "₱" + dish.price;
  document.getElementById("dish-desc").textContent = dish.desc;
  document.getElementById("addon-name").textContent = extra.addon[0] + " · +₱" + extra.addon[1] + " sample";
  document.getElementById("pair-text").innerHTML = pairText();

  // preparation choices
  var html = "";
  for (var k = 0; k < extra.prep.length; k++) {
    html += '<label class="option' + (k == 0 ? ' option-selected' : '') + '">' +
      '<input type="radio" name="prep" data-name="' + extra.prep[k][0] + '"' + (k == 0 ? ' checked' : '') + '>' +
      '<span><strong>' + extra.prep[k][0] + '</strong><small>' + extra.prep[k][1] + '</small></span></label>';
  }
  document.getElementById("prep-options").innerHTML = html;

  // connect the events
  var radios = document.getElementsByName("prep");
  for (var r = 0; r < radios.length; r++) { radios[r].onchange = choosePrep; }
  document.getElementById("addon-check").onchange = chooseAddon;
  document.getElementById("qty-minus").onclick = function () { changeQuantity(-1); };
  document.getElementById("qty-plus").onclick = function () { changeQuantity(1); };
  document.getElementById("cart-button").onclick = addToCart;
  document.getElementById("tab-ing").onclick = function () { showDetails("ing"); };
  document.getElementById("tab-serve").onclick = function () { showDetails("serve"); };

  showDetails("ing");
  updateTotal();
}