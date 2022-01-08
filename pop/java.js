const popcat = document.querySelector("#popcat");
const buton = document.querySelector("#buton");
const openMouthImg = "popcat2.png";
const closeMouthImg = "popcat1.png";
const openMouthSound = new Audio("pop.mp3");
buton.addEventListener("mousedown", openMouth);
buton.addEventListener("mouseup", closeMouth);
buton.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})
buton.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})
function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}
function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}
