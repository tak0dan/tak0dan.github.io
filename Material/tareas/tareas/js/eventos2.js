// JS
const feed = document.getElementById("feed");

// Un solo portero para todo el edificio
feed.addEventListener("click", (e) => {
    // e.target es EXACTAMENTE lo que clickaste (puede ser el texto, el borde, el botón)
    
    // ¿Clickaste en algo que tenga la clase 'btn-borrar'?
    if (e.target.classList.contains("btn-borrar")) {
        // Buscamos al padre (el <li> completo) y lo matamos
        const tweet = e.target.parentElement; // o e.target.closest('li') que es más seguro
        tweet.remove();
        console.log("Tweet eliminado mediante delegación 🗑️");
    }
});