const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarMenu = document.querySelector("#navbarMenu");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    if (navbarMenu && navbarMenu.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();
    }
  });
});
