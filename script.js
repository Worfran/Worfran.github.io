const menuButton =
  document.getElementById("menuButton");

const navLinks =
  document.getElementById("navLinks");


/* Mobile navigation */
menuButton?.addEventListener(
  "click",
  () => {

    const isOpen =
      navLinks.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  }
);


/* Close mobile navigation after selecting a link */
document
  .querySelectorAll("#navLinks a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        navLinks.classList.remove("open");

        menuButton?.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  });


/* Automatically update copyright year */
document.getElementById("year").textContent =
  new Date().getFullYear();