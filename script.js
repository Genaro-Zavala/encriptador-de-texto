const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".resultado");
const mensajeContenedor = document.querySelector(".mensaje-contenedor");
const botonCopiar = document.querySelector(".copiar");


const caracteresNoPermitidos = ["@", "#", "$", "%", "&", "!", "*", "-", "+", "=", "?", "/"];
const acentos = ["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "ñ", "Ñ"];
const mayusculas = /[A-Z]/;

function verificarTexto(texto) {
    // Verifica si contiene caracteres no permitidos
    for (let i = 0; i < caracteresNoPermitidos.length; i++) {
        if (texto.includes(caracteresNoPermitidos[i])) {
            alert("La palabra no debe contener caracteres especiales ");
            return false; // Rechaza si encuentra un carácter no permitido
        }
    }

     // Verifica si contiene acentos
     for (let i = 0; i < acentos.length; i++) {
        if (texto.includes(acentos[i])) {
            alert("La palabra no debe contener acentos ");
            return false; // Rechaza si encuentra un acento
        }
    }

    // Verifica si contiene mayúsculas
    if (mayusculas.test(texto)) {
        alert("La palabra solo debe contener letras minúsculas ");
        return false; // Rechaza si encuentra mayúsculas
    }

    if(texto==""){
        alert("No ha ingresado ningun texto");
        return false;
    }
    return true;
}

function btnEncriptar(){
    const texto = textArea.value;
 
    if (!verificarTexto(texto)) {
        /*alert("El texto contiene caracteres no permitidos, acentos o mayúsculas.");*/
        return; // Detiene la ejecución si se encuentran caracteres no permitidos, acentos o mayúsculas
    }

    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value ="";
    /*mensaje.style.backgroundImage = "none"; */
    mensajeContenedor.style.display = "none" ;
    botonCopiar.style.visibility = "inherit";   
    
   
}

function encriptar(stringEncriptada){
  
let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i=0; i<matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }

}
return stringEncriptada
}


function btnDesencriptar(){
    const textEncriptado = desencriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value ="";
        
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
        }
    return stringDesencriptada
    }


function btnCopiar(){
    const textACopiar = mensaje.value;
 
    navigator.clipboard.writeText(textACopiar).then(() => {
    alert('El mensaje ha sido copiado');   
    });
}