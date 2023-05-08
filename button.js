function getRandomNumber() {
    return Math.random();
}

const button = document.getElementById("button");
button.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    alert(randomNumber);
});