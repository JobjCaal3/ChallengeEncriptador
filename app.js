let textoOriginal; 
let textoEncriptado; 

function EncriptarMensaje() {
    textoOriginal = document.getElementById("Cuadro1").value;
    textoEncriptado = encriptarTexto(textoOriginal);
    document.getElementById("Cuadro2").value = textoEncriptado;
    Limpiar("Cuadro1"); 
}

function DesencriptarMensaje() {
    textoEncriptado = document.getElementById("Cuadro1").value;
    textoOriginal = desencriptarTexto(textoEncriptado);
    document.getElementById("Cuadro1").value = textoOriginal;
}

function CopiarTexto() {
    textoEncriptado = document.getElementById("Cuadro2");
    textoEncriptado.select();
    document.execCommand("copy");
    Limpiar("Cuadro2");
}

function encriptarTexto(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptarTexto(textoEncriptado) {
    return textoEncriptado.replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ai/g, "a")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
}


function Limpiar(identificador){
    document.querySelector(`#${identificador}`).value = '';
}
