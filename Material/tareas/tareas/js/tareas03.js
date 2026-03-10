/*
    04 - Crea y muestra tareas en pantalla usando objetos
*/

// defino la tarea vacia
let tareas=[];    

/*
    Devuelve el id para nueva tarea buscando el ultimo creado
*/
function devuelveNuevoId(){
    let id=1
    tareas.forEach(element => {
        if(element.id>id){
            id=element.id
        }
    });
    return id+1
}

/*
 añade una nueva tarea
 */
function crearTarea(id, descripcion, fechaLimite, prioridad) {
  const tarea = {
    id,
    descripcion,
    completada: false,
    fechaLimite,
    prioridad
  };

  // usando funciones flecha es mas sencillo
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
  // NUEVO: HTML para innerHTML
  tarea.mostrarEnHTML = () => {
    const estado = tarea.completada ? '[X]' : '[ ]';
    let tareaHTML=`- (${tarea.id}) ${estado} :  ${tarea.descripcion} : ${tarea.fechaLimite}  (${tarea.prioridad}) `
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
    let id=devuelveNuevoId()
    tareas.push(crearTarea(id, descripcion, fechaLimite, prioridad));
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
    let todasLasTareas=""
    console.log("Tareas pendientes HTML: ")
    console.log("===================")
    tareas.forEach(element => {
        todasLasTareas=todasLasTareas+element.mostrarEnHTML()+"<br/>"
    });
    return todasLasTareas
}



//creo las tareas
tareas=[
    crearTarea(1, "Estudiar arrays: forEach/map", "2026-02-23","alta"),
    crearTarea(2, "5 ejercicios con objetos JS", "2026-02-24", "alta"),
    crearTarea(3, "DOM: Manipular elementos", "2026-02-25", "media"),
    crearTarea(4, "DOM: Eventos", "2026-02-26", "baja")
    ]
let divTareas=document.getElementById("Tareas")
divTareas.innerHTML="Lo cambio desde javascript"
let pruebas=["Corregir flex!", "Corregir javascript 1","Corregir javascript 2"]
divTareas.innerHTML=pruebas

