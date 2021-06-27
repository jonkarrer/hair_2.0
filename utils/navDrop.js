const menu = document.getElementById("mobile_menu");

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
