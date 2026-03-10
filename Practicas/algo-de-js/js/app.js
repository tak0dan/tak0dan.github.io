let num1=document.getElementById("numero1")
let num2=document.getElementById("numero2")
let boton=document.getElementById("run")
let salida=document.getElementById("salida")
let borrar1=null
let indice=0

boton.addEventListener("click", (e) => {

    indice++

    let texto=""
    texto+=`<input type="button" value="Borrar" id=${indice}>` + num1.value+"<br>"
    salida.innerHTML=salida.innerHTML+texto
    borrar1=document.getElementById("1")
}
)


console.log(num1.value)
console.log(boton.id)


