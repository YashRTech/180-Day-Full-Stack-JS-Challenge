const setTheme = () => {
    let root = document.documentElement;
    const checkTheme=root.classList.contains("dark") ? "light" : "dark"
    root.classList.toggle("dark");
    document.querySelector(".theme-name").textContent = checkTheme;
}
document.querySelector(".theme-toggle").addEventListener("click", setTheme);