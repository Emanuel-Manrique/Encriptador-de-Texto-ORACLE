// En este JS se encuentra todo el funcionamiento para la encriptación y desencriptación de los textos

let texto = "";
let textoEncriptado = "";
let textoDesencriptado = "";
let letras = [];
let contador = 0;
let salida = document.querySelector("#outputTexto");


// Función para encriptar los textos.

function botonEncriptar(){
    texto = document.querySelector("#inputTexto").value;
    while(contador < texto.length){
        letras.push(texto.charAt(contador));
        contador++;
    };
    
    contador = 0;
    
    while(contador < letras.length){
        if(letras[contador] === "e"){
            letras.splice(letras.indexOf("e"), 1, "enter")
            contador++
        }
        else if(letras[contador] === "i"){
            letras.splice(letras.indexOf("i"), 1, "imes")
            contador++
        }
        else if(letras[contador] === "a"){
            letras.splice(letras.indexOf("a"), 1, "ai")
            contador++
        }
        else if(letras[contador] === "o"){
            letras.splice(letras.indexOf("o"), 1, "ober")
            contador++
        }
        else if(letras[contador] === "u"){
            letras.splice(letras.indexOf("u"), 1, "ufat")
            contador++
        }
        else{
            contador++
        }
};
    
    contador = 0;
    textoEncriptado = letras.join("");

    salida.replaceChildren(textoEncriptado)



    
    letras = [];

  
}


// Función para desencriptar los textos.

function botonDesencriptar(){
    texto = document.querySelector("#inputTexto").value;

    let textoDesencriptado1 = texto.replaceAll("enter", "e");
    let textoDesencriptado2 = textoDesencriptado1.replaceAll("enter", "e");
    let textoDesencriptado3 = textoDesencriptado2.replaceAll("imes", "i");
    let textoDesencriptado4 = textoDesencriptado3.replaceAll("ai", "a");
    let textoDesencriptado5 = textoDesencriptado4.replaceAll("ober", "o");
    let textoDesencriptado = textoDesencriptado5.replaceAll("ufat", "u");

    
    salida.replaceChildren(textoDesencriptado)
    
}

function botonCopiar(){
    navigator.clipboard.writeText(salida.value);
}


// Abajo se encuentran lo que permite a los botones interactuar con las funciones anteriores

document.getElementById("encriptar").onclick = botonEncriptar;

document.getElementById("desencriptar").onclick = botonDesencriptar;

document.getElementById("copiar").onclick = botonCopiar;
