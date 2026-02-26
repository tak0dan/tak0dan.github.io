
let fraseCifrada = "";
let letraCifrada = '';
let alfabeto="abcdefghijklmnopqrstuvwxyz";
let frase = "casa";
let paso = 3;
for(let i = 0; i<frase.length; i++){
    let posicion=alfabeto.indexOf(frase[i])+paso % alfabeto.length
    console.log(posicion)
    letraCifrada=alfabeto[posicion]
    fraseCifrada = fraseCifrada + letraCifrada; 

}
console.log(fraseCifrada)