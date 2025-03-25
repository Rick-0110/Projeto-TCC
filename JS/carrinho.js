document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector(".menu ul li.home");
    
    if (homeLink) {
        homeLink.addEventListener("click", function() {
            window.location.href = "paginaPrincipal.html";
        });
    }
});
