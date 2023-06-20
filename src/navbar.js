import renderHome from "./home";
import renderMenu from "./menu";

export default function renderNavBar() {
  const content = document.querySelector(".content");

  function clearContent() {
    content.innerHTML = "";
  }

  const navBar = document.createElement("div");
  navBar.classList.add("navBar");

  const homeBtn = document.createElement("div");
  homeBtn.classList.add("btn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", () => {
    clearContent();
    renderNavBar();
    renderHome();
  });

  const menuBtn = document.createElement("div");
  menuBtn.classList.add("btn");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", () => {
    clearContent();
    renderNavBar();
    renderMenu();
  });

  const contactBtn = document.createElement("div");
  contactBtn.classList.add("btn");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", () => console.log("c"));

  navBar.append(homeBtn, menuBtn, contactBtn);

  content.append(navBar);
}
