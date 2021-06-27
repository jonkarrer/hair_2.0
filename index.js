import { dropMenu, resetHeader } from "./utils/navDrop.js";

document.getElementById("burger").addEventListener("click", () => dropMenu());
window.onresize = resetHeader;
