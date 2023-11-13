document.addEventListener('DOMContentLoaded', function() {
    const aside = document.getElementById('aside');
    const menu = document.getElementById('menu');

    menu.onclick = () => aside.classList.toggle('active');
});
