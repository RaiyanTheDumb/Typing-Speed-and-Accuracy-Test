function toggleThemePanel() {
    var panel = document.getElementById('theme-panel');
    panel.classList.toggle('open');
}

// Close panel when clicking outside
document.addEventListener('click', function(event) {
    var corner = document.querySelector('.theme-corner');
    var panel = document.getElementById('theme-panel');
    if (corner && !corner.contains(event.target)) {
        panel.classList.remove('open');
    }
});

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
    document.getElementById('theme-panel').classList.remove('open');
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    document.querySelectorAll('.theme-btn').forEach(function(btn) {
        btn.classList.remove('active-theme');
    });

    var activeBtn = document.querySelector(
        '.theme-btn[onclick="setTheme(\'' + theme + '\')"]'
    );
    if (activeBtn) activeBtn.classList.add('active-theme');
}

window.addEventListener('load', function() {
    var savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
});