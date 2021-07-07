import { dropMenu } from "./utils/navDrop.js";

document.getElementById("burger").addEventListener("click", () => dropMenu());

document
  .getElementById("mobile_menu")
  .childNodes.forEach((item) =>
    item.addEventListener("click", () => dropMenu())
  );

//Change header color
window.onscroll = () => {
  const header = document.getElementById("header");
  let target = document.documentElement.clientHeight * 4;

  if (window.scrollY > target) {
    header.style.background = "rgb(105, 88, 83)";
    return;
  }
  header.style.background = `rgba(152, 135, 128, ${
    window.scrollY / document.documentElement.clientHeight
  })`;
};

//Create fade in
window.addEventListener("load", () => (document.body.className = "visible"));
