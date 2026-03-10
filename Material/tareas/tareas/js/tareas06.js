/*
    05 - Estilos y manipulación de tareas
*/

// defino la tarea vacia
let tareas=[];    

/*
    Devuelve el id para nueva tarea buscando el ultimo creado
*/
function devuelveNuevoId(){
    let id=0
    tareas.forEach(element => {
        if(element.id>id){
            id=element.id
        }
    });
    return id+1
}

/*
 añade una nueva tarea calcula el id que le toque usando devuelveNuevoId
 */
function crearTarea(descripcion, fechaLimite, prioridad) {
    //obtengo próximo id
    let id=devuelveNuevoId()  
    const tarea = {
        id,
        descripcion,
        completada: false,
        fechaLimite,
        prioridad
    };

    // usando funciones anonimas flecha es mas sencillo
    // cambiar entre completada o no 
    tarea.toggleCompletada = () => {
        tarea.completada = !tarea.completada;
        return tarea;
    };
    
    // Mostrar en consola
    tarea.mostrarEnConsola = () => {
        const estado = tarea.completada ? '[X]' : '[ ]';
        console.log(`- (${tarea.id}) ${estado} :  ${tarea.descripcion} : ${tarea.fechaLimite}  (${tarea.prioridad}) `);
    };

    // Devuelve html para Mostrar en pantalla
    tarea.mostrarEnHTML = () => {
        const estado = tarea.completada ? '[X]' : '[ ]';
        let tareaHTML=`- (${tarea.id}) ${estado} :  ${tarea.descripcion} : ${tarea.fechaLimite}  (${tarea.prioridad}) <input type="button" data-id="${tarea.id}" class="btn-borrar" data-action="borrar" value="Borrar"> <input type="button"  data-id="${tarea.id}" class="btn-toggle" data-action="mark" value="Cambia Estado">`
        return tareaHTML
    };
        
    
    return tarea;
}

/*
    pide una tarea y la añade al final de las que tengo pendientes
*/
function agregarTarea(){
    let descripcion=prompt("dame una tarea:") 
    let fechaLimite=prompt("dame una fecha(yyyy-mm-dd):") 
    let prioridad=prompt("dame una prioridad (alta | media | baja ):") 
    tareas.push(crearTarea(descripcion, fechaLimite, prioridad));
}

/*
    muestra las tareas
*/
function mostrarTareas(){
    console.log("Tareas pendientes: ")
    console.log("===================")
    tareas.forEach(element => {
        element.mostrarEnConsola()
    });
}

/*
    cambia el estado de una tarea
*/
function cambiaEstadoTarea(id){ 
    let tarea=tareas.find(element => element.id==id )   
    tarea.toggleCompletada()
    console.log(tarea);
}


/*
    devuelve una cadena con todas las tareas
*/
function mostrarTareasHTML(){
    //console.log("Tareas pendientes HTML: ")
    //console.log("===================")
    let miLista= document.createElement("ul");
    tareas.forEach(element => {
        let miItem= document.createElement("li");        
        miItem.innerHTML=element.mostrarEnHTML()
        miLista.appendChild(miItem)
    });
    console.log(miLista)
    return miLista
}


/*
    Borra la tarea que me digan
*/
function borrarTareaPorId(id) {
  tareas = tareas.filter(t => t.id !== id);
  renderTareas();
}

/*
    Cambia el valor de completado de la tarea
*/
function toggleTareaPorId(id) {
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) return;
  tarea.toggleCompletada();
  renderTareas();
}

/*
    Pinto las tareas en pantalla
*/
function renderTareas() {
    console.log("Repinto")
    // borrar el div si contiene algo para poder añadir
    divTareas.innerHTML = ""; 

    //pinto las tareas de ejemplo
    divTareas.append(mostrarTareasHTML())
}



// donde pintar
let divTareas=document.getElementById("Tareas")


// eventos
  const form = document.querySelector("#formTarea");

//atiende a la creación de una nueva tarea
form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recargar / enviar el form

    const descripcion = form.elements.descripcion.value.trim();
    const fechaLimite = form.elements.fechaLimite.value; // "YYYY-MM-DD"
    const prioridad = form.elements.prioridad.value;
    const tarea = crearTarea(descripcion, fechaLimite, prioridad);

    tareas.push(tarea)
    // borrar
    divTareas.innerHTML = ""; 
    // refrescar
    divTareas.append(mostrarTareasHTML())

    form.reset();
});


// const contenedor = document.querySelector('#Tareas');

// escucho los clicks en el div  Tareas
divTareas.addEventListener('click', (e) => {
    // guardo el elemnto clickado
    let element = e.target;   

    // obtiene la tarea y que quiero hacer con ella
    const id = Number(element.dataset.id);
    const action = element.dataset.action;

    if (action === 'borrar') {
        borrarTareaPorId(id);
    } else if (action === 'mark') {
        toggleTareaPorId(id);
    }
});




//creo las tareas de prueba
tareas.push(crearTarea("Estudiar arrays: forEach/map", "2026-02-23","alta"));
tareas.push(crearTarea("5 ejercicios con objetos JS", "2026-02-24", "alta"));
tareas.push(crearTarea("DOM: Manipular elementos", "2026-02-25", "media"));
tareas.push(crearTarea("DOM: Eventos", "2026-02-26", "baja"));



renderTareas()