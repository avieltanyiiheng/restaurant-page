export default function renderMenu() {
  const content = document.querySelector(".content");

  //   page content
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const bread = document.createElement("div");
  bread.classList.add("menu-item");

  const breadImg = document.createElement("img");
  breadImg.classList.add("menuimg");
  breadImg.src = "../src/bread.jpeg";
  breadImg.width = "100";

  const breadTitle = document.createElement("h3");
  breadTitle.textContent = "Plain Bread";
  const breadDesc = document.createElement("p");
  breadDesc.textContent = "Bread made with a, mixed with b and C.";
  bread.append(breadImg, breadTitle, breadDesc);

  const cheeseBread = document.createElement("div");
  cheeseBread.classList.add("menu-item");
  const CheeseBreadTitle = document.createElement("h3");

  const cheeseImg = document.createElement("img");
  cheeseImg.classList.add("menuimg");
  cheeseImg.src = "../src/cheesebread.jpeg";
  cheeseImg.width = "100";

  CheeseBreadTitle.textContent = "Cheese Bread";
  const cheeseBreadDesc = document.createElement("p");
  cheeseBreadDesc.textContent = "Cheese bread with a b c";
  cheeseBread.append(cheeseImg, CheeseBreadTitle, cheeseBreadDesc);

  pageContent.append(bread, cheeseBread);
  content.append(pageContent);
}
