/*
    07- cambios de estilos

*/


// JS
const btnTema = document.getElementById("btn-tema");
const btnLike = document.getElementById("btn-like");
const post = document.getElementById("post-1");

// 1. classList.toggle (El interruptor)
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 2. classList.add/remove
btnLike.addEventListener("click", () => {
    const yaTeniaLike = btnLike.classList.contains("corazon-rojo");
    
    if (yaTeniaLike) {
        btnLike.classList.remove("corazon-rojo");
        console.log("Like quitado 💔");
    } else {
        btnLike.classList.add("corazon-rojo");
        
        // 3. dataset: Leer datos ocultos del padre
        // dataset.id lee data-id, dataset.autor lee data-autor
        console.log(`Diste like al post ${post.dataset.id} de ${post.dataset.autor}`);
    }
});