/*
    01 - Crea y muestra tareas en consola usando listas
*/

let tareas=["Corregir flex!", "Corregir javascript 1","Corregir javascript 2"]

/*
    pide una tarea y la añade al final de las que tengo pendientes
*/
function agregarTarea(){
    let tarea=prompt("dame una tarea:") 
    console.log(tarea)
    tareas.push(tarea)
}

/*
    muestra las tareas pendientes
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

