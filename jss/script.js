document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById("mode-toggle");

    modeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode"); // Toggle dark mode on the body
    });
});
