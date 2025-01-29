var boxes = document.querySelectorAll(".box");

var h1 = document.querySelector("h1");
var playerTime = 0;

boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if (box.innerHTML === "") {
            if (playerTime === 0) {
                box.innerHTML = "O";
                playerTime = 1;
            } else {
                box.innerHTML = "X";
                playerTime = 0;
            }
            checkWinner();
        }
    });
});

function checkWinner() {
    var box1 = document.querySelector("#box-1").innerHTML;
    var box2 = document.querySelector("#box-2").innerHTML;
    var box3 = document.querySelector("#box-3").innerHTML;
    var box4 = document.querySelector("#box-4").innerHTML;
    var box5 = document.querySelector("#box-5").innerHTML;
    var box6 = document.querySelector("#box-6").innerHTML;
    var box7 = document.querySelector("#box-7").innerHTML;
    var box8 = document.querySelector("#box-8").innerHTML;
    var box9 = document.querySelector("#box-9").innerHTML;

    if (box1 === box2 && box2 === box3 && box1 !== "") {
        h1.innerHTML = "Winner is " + box1;
    } else if (box4 === box5 && box5 === box6 && box4 !== "") {
        h1.innerHTML = "Winner is " + box4;
    } else if (box7 === box8 && box8 === box9 && box7 !== "") {
        h1.innerHTML = "Winner is " + box7;
    } else if (box1 === box4 && box4 === box7 && box1 !== "") {
        h1.innerHTML = "Winner is " + box1;
    } else if (box2 === box5 && box5 === box8 && box2 !== "") {
        h1.innerHTML = "Winner is " + box2;
    } else if (box3 === box6 && box6 === box9 && box3 !== "") {
        h1.innerHTML = "Winner is " + box3;
    } else if (box1 === box5 && box5 === box9 && box1 !== "") {
        h1.innerHTML = "Winner is " + box1;
    } else if (box3 === box5 && box5 === box7 && box3 !== "") {
        h1.innerHTML = "Winner is " + box3;
    }
}