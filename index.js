import { dropMenu } from "./utils/navDrop.js";

document.getElementById("burger").addEventListener("click", () => dropMenu());

//Change header color
window.onscroll = () => {
  const header = document.getElementById("header");
  header.style.background = `rgba(231, 222, 217, ${
    window.scrollY / document.documentElement.clientHeight
  })`;
};
