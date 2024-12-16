// DARK MODE BUTTON
// Funktion: Theme setzen
const setTheme = (theme, updateStorage = true) => {
    document.documentElement.setAttribute('data-bs-theme', theme);

    // Emoji im Button aktualisieren
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.textContent = theme === 'dark' ? "🌞" : "🌒";

    // Speichere Theme, wenn gewünscht
    if (updateStorage) {
        localStorage.setItem('theme', theme);
    }
};

// Initiales Theme auslesen
const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        return storedTheme;
    }
    // Nutze den vom Browser bevorzugten Modus
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Initiales Theme setzen
setTheme(getPreferredTheme(), false);

// Event-Listener: Theme-Toggle bei Klick
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Event-Listener: Automatische Anpassung an Änderungen des Browser-Modus
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newTheme = event.matches ? 'dark' : 'light';
    setTheme(newTheme, false); // Speichere nicht in localStorage, da dies eine externe Änderung ist
});