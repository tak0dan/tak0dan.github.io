/*
    02 - Crea y muestra tareas en consola usando array
*/

let tareas=[
    {id:1, descripcion: "Estudiar arrays: forEach/map", fechaLimite: "2026-02-23", prioridad: "alta", completada: false},
    {id:2, descripcion: "5 ejercicios con objetos JS", fechaLimite: "2026-02-24", prioridad: "alta", completada: false},
    {id:3, descripcion: "DOM: Manipular elementos", fechaLimite: "2026-02-25", prioridad: "media", completada: false},
    {id:4, descripcion: "DOM: Eventos", fechaLimite: "2026-02-26", prioridad: "baja", completada: false}
    ]

/*
    Devuelve el id para nueva tarea
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
    pide una tarea y la añade al final de las que tengo pendientes
*/
function agregarTarea(){
    let descripcion=prompt("dame una tarea:") 
    let fechaLimite=prompt("dame una fecha(yyyy-mm-dd):") 
    let prioridad=prompt("dame una prioridad (alta | media | baja ):") 
    let id=devuelveNuevoId()
    tareas.push({
        id: id,
        descripcion: descripcion,
        fechaLimite: fechaLimite,
        prioridad: prioridad,
        completada: false
    });
}

/*
    muestra las tareas 
*/
function mostrarTareas(){
    console.log("Tareas pendientes: ")
    console.log("===================")
    tareas.forEach(element => {
        console.log("[]" +element)
    });
    console.log(tareas)
}

agregarTarea()
mostrarTareas()

