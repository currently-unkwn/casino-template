// Dom Strings
const hamburgerBtn = document.querySelector(".js-hamburger-btn");
const navbar = document.querySelector(".js-navbar");
const sidebar = document.querySelector(".js-sidebar");
const gameMenu = document.querySelector(".js-game-menu");
const backdrop = document.querySelector(".js-backdrop");
const mainWrapper = document.querySelector(".js-wrapper");

// Mobile Button Toggle State

// Check if the element is hide
const isDisplayNone = (element) =>
  element.offsetHeight === 0 && element.offsetWidth === 0;

const hamburgerBtnToggle = () => {
  navbar.classList.toggle("is-active");
  navbar.classList.toggle("u-push-side");
  sidebar.classList.toggle("is-expanded");
  mainWrapper.classList.toggle("u-push-side");
};

// Removing is-expanded and is-active classes
const removeExpanded = () => {
  navbar.classList.remove("is-active", "u-push-side");
  sidebar.classList.remove("is-expanded");
  mainWrapper.classList.remove("u-push-side");
};

hamburgerBtn.addEventListener("click", hamburgerBtnToggle);
window.addEventListener("resize", () => {
  if (isDisplayNone(hamburgerBtn)) {
    removeExpanded();
  }
});
backdrop.addEventListener("click", removeExpanded);

// Removing carousel when browser width is more than 600

// const mediaQueryMd = window.matchMedia("(max-width: 960px)");

// if (matchMedia) {
//   const mq = window.matchMedia("(min-width: 960px)");
//   mq.addListener(WidthChange);
//   WidthChange(mq);
// }

// function WidthChange(mq) {
//   if (mq.matches) {
//     document.body.style.backgroundColor = "yellow";
//     gameMenu.classList.add("u-hidden");
//     gameMenu.classList.remove("u-visible");
//   } else {
//     document.body.style.backgroundColor = "pink";
//     gameMenu.classList.remove("u-hidden");
//     gameMenu.classList.add("u-visible");
//   }
// }
