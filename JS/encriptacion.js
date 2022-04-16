 //Obtener valores de los campos
var mensaje = document.getElementById("mensaje").value;

//Encriptación del mensaje
document.getElementById("btn-en").addEventListener("click", encriptar);

function reemplazarCaracteres(mensaje){  
    mensaje = mensaje.split('');
    for(let i = 0; i <mensaje.length; i++){
        switch(mensaje[i]){
            case 'i':
                mensaje[i] = 'imes';
                break;
            case 'a':
                mensaje[i] = 'ai';
                break;
            case 'e':
                mensaje[i] = 'enter'
                break;
            case 'o':
                mensaje[i] = 'ober';
                 break;
            case 'u':
                mensaje[i] = 'ufat'
                break;
            default:

        }
    }
  return mensaje.join('');
}

function encriptar(mensajeDesencriptado){
    mensaje = document.getElementById("mensaje").value;
      
    mensaje  = reemplazarCaracteres(mensaje);
    document.getElementById('mensaje').value = mensaje
}

//Desencriptar mensaje

document.getElementById("btn-desen").addEventListener("click", desencriptar);

function reemplazarCaracteresNuevamente(mensaje){

    mensaje = mensaje.replace(/imes/g, 'i');
          
    mensaje = mensaje.replace(/ober/g, 'o');

    mensaje = mensaje.replace(/ai/g, 'a');

    mensaje = mensaje.replace(/enter/g, 'e');

    mensaje = mensaje.replace(/ufat/g, 'u');

 
    return mensaje;
}
function desencriptar(mensajeEncritado){
     mensaje = document.getElementById("mensaje").value;
     mensaje = reemplazarCaracteresNuevamente(mensaje);
     document.getElementById('mensaje').value = mensaje
}

//Copiar el elemento
const mensajeACopiar = document.getElementById("mensaje");
const button = document.getElementById("btn-copiar");

button.addEventListener("click", e=> {
    mensajeACopiar.select();
    document.execCommand('copy');
})

