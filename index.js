import { dropMenu } from "./utils/navDrop.js";

document.getElementById("burger").addEventListener("click", () => dropMenu());

//Change header color
window.onscroll = () => {
  const header = document.getElementById("header");
  header.style.background = `rgba(152, 135, 128, ${
    window.scrollY / document.documentElement.clientHeight
  })`;
};
