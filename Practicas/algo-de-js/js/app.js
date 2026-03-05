let num1=document.getElementById("numero1")
let boton=document.getElementById("run")



boton.addEventListener("click", (e) => {
    console.log("Me han pulsado: "+num1.value)
})


console.log(num1.value)
console.log(boton.id)