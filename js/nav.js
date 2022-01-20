const navbarNav = document.getElementById("navbar__nav");
const navToggler = document.querySelector(".mobile-nav-toggler");

navToggler.addEventListener("click", (event) => {
  const visibility = navbarNav.getAttribute("data-visible");

  if (visibility === "false") {
    navbarNav.setAttribute("data-visible", true);
    navToggler.setAttribute("aria-expanded", true);
  } else {
    navbarNav.setAttribute("data-visible", false);
    navToggler.setAttribute("aria-expanded", false);
  }
});
