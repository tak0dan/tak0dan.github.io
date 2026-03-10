/*
    03 - Crea y muestra tareas en consola usando objetos
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
    
  
  return tarea;
}

/*
 añade una nueva tarea sin funciones anónimas, no lo uso para no liar
 */
/*function crearTarea(id, descripcion, fechaLimite, prioridad) {
  return {
    id,
    descripcion,
    completada: false,
    fechaLimite,
    prioridad,
    toggleCompletada() {
      this.completada = !this.completada;
      return this;  // Chainable: tarea.toggleCompletada().mostrar();
    },
    mostrarEnConsola() {
      console.log(`- (${this.id}) ${this.completada ? '[X]' : '[]'} :  ${this.descripcion} : ${this.fechaLimite}  (${this.prioridad}) `);
    }
  };
}*/

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

//creo las tareas
tareas=[
    crearTarea(1, "Estudiar arrays: forEach/map", "2026-02-23","alta"),
    crearTarea(2, "5 ejercicios con objetos JS", "2026-02-24", "alta"),
    crearTarea(3, "DOM: Manipular elementos", "2026-02-25", "media"),
    crearTarea(4, "DOM: Eventos", "2026-02-26", "baja")
    ]


mostrarTareas()    
//agregarTarea()
// la completo
cambiaEstadoTarea(1)
mostrarTareas()
// la descompleto
cambiaEstadoTarea(1)
mostrarTareas()

