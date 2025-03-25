document.addEventListener("DOMContentLoaded", () => {
    let img = document.getElementById("teste");
    let direction = 1; // 1 = right, -1 = left
    let position = 0;
    let speed = 5; // Speed of movement
    let maxWidth = window.innerWidth - img.width; // Max movement width

    // Update maxWidth on window resize
    window.addEventListener("resize", () => {
        maxWidth = window.innerWidth - img.width;
    });

    function moveImage() {
        position += speed * direction; // Move image

        // Reverse direction when hitting the edges
        if (position >= maxWidth || position <= 0) {
            direction *= -1;
        }

        img.style.left = `${Math.min(position, maxWidth)}px`; // Ensures no overshoot

        requestAnimationFrame(moveImage); // Continue animation
    }

    moveImage(); // Start animation
});
