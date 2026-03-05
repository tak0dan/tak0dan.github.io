let num1=document.getElementById("numero1")
let num2=document.getElementById("numero2")
let boton=document.getElementById("run")

boton.addEventListener("click", (e) => {
    for(let i = 0; i<parseInt(num2); i++){
     num1 = parseInt(num1)+parseInt(num1)
    console.log(num1)
}
})


console.log(num1.value)
console.log(boton.id)


