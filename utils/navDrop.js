const menu = document.getElementById("header_links");

let menuOpen = false;

export function dropMenu() {
  if (menuOpen) {
    //Close menu
    menu.style.height = "0px";
    menuOpen = false;
    return;
  } else {
    //Open menu
    menu.style.height = "40vh";
    menuOpen = true;
  }
}
export function resetHeader() {
  if (window.innerWidth > 768) {
    menu.style.height = "35px";
    console.log(window.innerWidth);
  } else {
    menu.style.height = "0px";
  }
}
