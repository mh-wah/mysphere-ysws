// La fonction qui mettra à jour l'heure

window.addEventListener("DOMContentLoaded", () => {
    function majHeure () {
        let date = new Date().toLocaleString();
        let baliseDate = document.getElementById('date');
        baliseDate.innerHTML = date;
    }
    majHeure();
    setInterval(majHeure, 1000);
}) 