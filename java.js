var char = document.getElementById("character");
var left = document.getElementById("block");
left.style.animation = "slide 2s linear infinite";
function clicked(){
    if(char.classList != "arrow"){
    char.classList.add("arrow");
    }
setTimeout(function () {
    char.classList.remove("arrow");
}, 500);
}
var check = setInterval( function() {
    var checkTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    var checkLeft = parseInt(window.getComputedStyle(left).getPropertyValue("left"));
    if(checkTop>=187 && checkLeft>-35 && checkLeft<=-5){
        block.style.animation = "none";
        alert("You Are Fucked For Life :)");
    }
    }, 10);