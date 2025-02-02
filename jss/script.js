document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById("mode-toggle");
    const navbar = document.getElementById("navbar"); // Target the navbar directly

    modeToggle.addEventListener("click", function() {
        navbar.classList.toggle("dark-mode"); // Toggle dark mode for the navbar only
    });
});
