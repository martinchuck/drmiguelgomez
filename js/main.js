// mobile nav
const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    console.log("Navigation is closed, opening now."); // Log para depuración
    mobileNav.classList.remove(navClosedClass);
    mobileNav.classList.add(navOpenedClass);
  } else {
    console.log("Navigation is open, closing now."); // Log para depuración
    mobileNav.classList.remove(navOpenedClass);
    mobileNav.classList.add(navClosedClass);
  }

  // Alternar los iconos
  closeBtnIcn.classList.toggle(arrowLeftClass);
  closeBtnIcn.classList.toggle(arrowRightClass);
});
