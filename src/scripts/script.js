function toggleDarkMode() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.querySelector('.toggle-dark-mode').textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelectorAll('a').forEach(link => link.classList.toggle('dark-mode'));
    document.querySelectorAll('h2').forEach(h2 => h2.classList.toggle('dark-mode'));
    document.querySelectorAll('h3').forEach(h3 => h3.classList.toggle('dark-mode'));
    document.querySelectorAll('ul li').forEach(li => li.classList.toggle('dark-mode'));
    document.querySelectorAll('strong').forEach(el => el.classList.toggle('dark-mode'));
    document.querySelector('.submit-btn').classList.toggle('dark-mode');
    document.querySelector('.video-container').classList.toggle('dark-mode');
}