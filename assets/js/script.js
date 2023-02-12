const hoverLink = document.querySelector("#our_way_hover1");
const hoverText = document.querySelector("#para1");

hoverLink.addEventListener("mouseenter", function() {
  hoverText.style.display = "block";
});

hoverLink.addEventListener("mouseleave", function() {
  hoverText.style.display = "none";
});

// drawer = document.querySelector(".drawer")
// drawer.onclick = function () {
//     navBar = document.querySelector(".right_head")
//     navBar.classList.toggle("active")
// }




