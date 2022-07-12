var nombre = document.querySelector("#nombre");
var correo = document.querySelector("#correo");
var asunto = document.querySelector("#asunto");
var mensaje = document.querySelector("#msj");

var botonEnviar =document.querySelector(".enviar");

botonEnviar.addEventListener("click",function(event){
    event.preventDefault();
    console.log(nombre.value,correo.value,asunto.value,mensaje.value);

    if(nombre.value.length ==0 && correo.value.length ==0 && asunto.value.length ==0 && mensaje.value.length ==0){
        alert("Diligencie Todos los Campos");
    }
    validarNombre();
    validarCorreo();
    validarAsunto();
    validarMensaje();

});

function validarNombre(){
    if(nombre.value.length ==0){
        alert("El Campo del NOMBRE Vacio, Intente de Nuevo");
    }
    if(nombre.value.length >50){
        alert("El Campo del NOMBRE Superó los 50 Caracteres, Intente de Nuevo");
    }
}

function validarCorreo(){
    var regex = /\S+@\S+\.\S+/;
    console.log(regex.test(correo.value));
    if(correo.value.length ==0){
        alert("El Campo del EMAIL Vacio, Intente de Nuevo");
    }
    if (regex.test(correo.value)==false){
        alert("Formato Incorrecto, Recuerde que el formato del correo electrónico es: email@dominio.com");
    }
}

function validarAsunto(){
    if(asunto.value.length ==0){
        alert("El Campo del ASUNTO Vacio, Intente de Nuevo");
    }
    if(asunto.value.length >50){
        alert("El Campo del ASUNTO Superó los 50 Caracteres, Intente de Nuevo");
    }
}

function validarMensaje(){
    if(mensaje.value.length ==0){
        alert("El Campo del MENSAJE Vacio, Intente de Nuevo");
    }
    if(mensaje.value.length >50){
        alert("El Campo del MENSAJE Superó los 300 Caracteres, Intente de Nuevo");
    }
}
