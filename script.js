
// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "");
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});

