function toggleMenu() {
    const menu = document.querySelector('.menu');
    const overlay = document.getElementById('overlay');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        overlay.style.display = 'none';
    } else {
        menu.classList.add('open');
        overlay.style.display = 'block';
    }
}

function downloadPhoto(photo) {
    const link = document.createElement('a');
    link.href = photo;
    link.download = photo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
