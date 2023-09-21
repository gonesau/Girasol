function drawSunflower() {
    document.getElementById("container").style.display = "none";
    document.getElementById("girasol-container").style.display = "block";

    // Mostrar los pétalos después de un breve retraso
    setTimeout(() => {
        document.querySelector(".petalos").style.display = "block";
    }, 100);

    // Mostrar las hojas después de otro retraso
    setTimeout(() => {
        document.querySelector(".hojas").style.display = "block";
    }, 2000);
}

document.getElementById("startButton").addEventListener("click", drawSunflower);
