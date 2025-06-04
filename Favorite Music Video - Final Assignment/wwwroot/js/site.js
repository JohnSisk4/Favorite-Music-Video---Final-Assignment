document.getElementById("tiltButton").addEventListener("click", function () {
    let video = document.getElementById("video");

    // Check the current rotation
    if (video.style.transform === "rotate(10deg)") {
        video.style.transform = "rotate(0deg)"; // Reset position
    } else {
        video.style.transform = "rotate(10deg)"; // Tilt position
    }
});



