// ===== common.js =====
// Used by About, Menu and Contact pages: the mobile menu button.

// Show or hide the mobile menu (onclick)
function toggleMenu() {
  var nav = document.getElementById("nav");
  nav.classList.toggle("nav-open");
}

document.getElementById("menu-button").onclick = toggleMenu;