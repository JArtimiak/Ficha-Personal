// Modo oscuro/claro
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

// Verificar si hay preferencia guardada
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle entre modo oscuro y claro
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Guardar preferencia
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
