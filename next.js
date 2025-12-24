
let countdownText = document.getElementById("countdownText");
let startButton = document.getElementById("startButton");
let numberInput = document.getElementById("numberInput");
let countdown;

startButton.addEventListener("click", () => {
    let time = Number(numberInput.value);

    if (time < 0 || isNaN(time)) {
        alert("Musbat son kiriting");
        return;
    }

    countdownText.textContent = time;
    clearInterval(countdown);

    countdown = setInterval(() => {
        time--;
        countdownText.textContent = time;

        if (time <= 0) {
            clearInterval(countdown);
            countdownText.textContent = "Vaqt tugadi!";
        }
    }, 1000);
});