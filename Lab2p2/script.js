let boundaries = document.querySelectorAll(".boundary");
let start = document.getElementById("start");
let end = document.getElementById("end");
let status = document.getElementById("status");
let maze = document.getElementById("maze");

let hasLost = false;

function loseGame() {
    hasLost = true;
    boundaries.forEach(boundary => boundary.classList.add("you-lose"));
    status.textContent = "You lose!";
}

function resetGame() {
    hasLost = false;
    boundaries.forEach(boundary => boundary.classList.remove("you-lose"));
    status.textContent = "Move your mouse through the maze!";
}

function winGame() {
    if (!hasLost) {
        status.textContent = "You win!";
    }
}

boundaries.forEach(boundary => {
    boundary.addEventListener("mouseenter", loseGame);
});

start.addEventListener("click", resetGame);

end.addEventListener("mouseenter", winGame);

maze.addEventListener("mouseleave", () => {
    if (!hasLost) {
        loseGame();
    }
});


document.head.insertAdjacentHTML(
    "beforeend",
   
);