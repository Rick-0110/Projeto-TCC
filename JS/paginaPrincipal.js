document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const sidebarImg = document.getElementById("sidebarImg");
    
    // Eventos da sidebar
    sidebar.addEventListener("mouseover", function () {
        sidebarImg.style.opacity = "0"; 
        sidebarImg.style.visibility = "hidden";
    });

    sidebar.addEventListener("mouseout", function () {
        sidebarImg.style.opacity = "1";
        sidebarImg.style.visibility = "visible";
    });

    // Redirecionamento do carrinho
    document.querySelector('.fa-shopping-cart').parentElement.addEventListener('click', function() {
        window.location.href = 'carrinho.html';
    });
});