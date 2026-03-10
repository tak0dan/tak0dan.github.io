// apunto a los elementosdel HTML que necesito
const formulario = document.getElementById("form-comentario");
const input = document.getElementById("input-texto");
const listaComentarios = document.getElementById("lista-comentarios");
const boton=document.getElementById("botonAdd")

// registro el boton para añadir comentarios
boton.addEventListener("click", (e) => {
    // Evito que el navegador recargue la pagina debido al submit
    e.preventDefault(); 
    // Si no pones la línea de arriba, la página parpadea y se borra todo.
    // Obtener lo que escribió el usuario
    const texto = input.value;
    
    // Validación básica, no hago nada si está vacio
    if (texto === "") return; 

    // Crear nuevo li y añadir al DOM
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = texto;
    listaComentarios.append(nuevoLi);
    
    // Limpiar el input
    input.value = "";
    console.log("Comentario enviado sin recargar ");

})
