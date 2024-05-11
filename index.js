const menu = document.getElementById("menu");

function menuClick() {
  if (menu.style.left == "-50%") {
    menu.style.left = "0";
    //menu.style.display = "block";
    
  } else {
    menu.style.left = "-50%";
    //menu.style.display = "none";
    
  }
}
