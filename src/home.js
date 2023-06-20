export default function renderHome() {
  const content = document.querySelector(".content");

  //   page content
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content-home");

  //   IMAGE
  const companyImage = document.createElement("img");
  companyImage.src = "../src/logo.jpg";
  companyImage.width = "500";

  const about = document.createElement("div");
  about.classList.add("card");
  about.textContent =
    "Welcome to Mama's, where we provide the best home baked goods for your tastebuds. Order today and get 15% off with code 'FUCKYOU'";

  const hoursInfo = document.createElement("div");
  hoursInfo.classList.add("card");

  const hoursHeader = document.createElement("h3");
  hoursHeader.classList.add("header");
  hoursHeader.textContent = "Hours";

  const monday = document.createElement("p");
  monday.textContent = "Monday: 8am - 8pm";

  const tuesday = document.createElement("p");
  tuesday.textContent = "Tuesday: 8am - 8pm";

  const wednesday = document.createElement("p");
  wednesday.textContent = "Wednesday: 8am - 8pm";

  const thursday = document.createElement("p");
  thursday.textContent = "Thursday: 8am - 8pm";

  const friday = document.createElement("p");
  friday.textContent = "Friday: 8am - 8pm";

  hoursInfo.append(hoursHeader, monday, tuesday, wednesday, thursday, friday);

  //   location
  const location = document.createElement("div");
  location.classList.add("card");
  const locationText = document.createElement("p");
  locationText.textContent = "123 Joe Mama Singapore 123456";
  location.append(locationText);

  pageContent.appendChild(companyImage);
  pageContent.appendChild(about);
  pageContent.appendChild(hoursInfo);
  pageContent.appendChild(location);

  content.appendChild(pageContent);
}
