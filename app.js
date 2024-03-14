function encriptar(){
  let texto = document.querySelector('#texto').value;
  texto = texto.toLowerCase();
  let textoCifrado = texto.replace(/e/gi,"enter").replace(/i/gi,"imess").replace(/a/gi,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

  if (texto == 0){
    document.querySelector("#texto").placeholder = "nose encontro un texto a encriptar";
  }else{
    document.querySelector("#texto").placeholder = "texto encriptado";
    document.querySelector("#resultado").value = textoCifrado;
    document.querySelector('#texto').value= "";
  }
}
function desencriptar(){
  let texto = document.querySelector('#texto').value;
  let textoCifrado = texto.replace(/enter/gi,"e").replace(/imess/gi,"i").replace(/ai/gi,"a").replace(/ober/g,"o").replace(/ufat/g,"u");  
  if (texto == 0){
    document.querySelector("#texto").placeholder = "nose encontro un texto a desencriptar";
    return textoCifrado;
  }else{
    document.querySelector("#texto").placeholder = "texto encriptado";
    document.querySelector("#resultado").value = textoCifrado;
    document.querySelector("#texto").value= "";
    return textoCifrado;
  } 
}

function copiar (){
  let contenido = document.getElementById('resultado').value
  contenido = contenido.toLowerCase();
  navigator.clipboard.writeText(contenido)
  .then(() => {console.log('Text copied to clipboard...')})
  .catch(err => {
    console.log('Something went wrong', err);
  })
  if (contenido == 0){
    document.querySelector("#resultado").placeholder = "No se encontro ningun texto a copiar";
     
  }else{
    document.querySelector("#resultado").placeholder = "Texto copiado!";
    document.querySelector("#texto").value = contenido; 
    document.querySelector("#resultado").value = ""; 
  } 
}
function limpiar(){
  document.querySelector("#texto").value = "";
  document.querySelector("#resultado").value = "";
  document.querySelector("#texto").placeholder = "Ingrese texto";
  document.querySelector("#resultado").placeholder = "Ingrese texto a copiar";
} 
