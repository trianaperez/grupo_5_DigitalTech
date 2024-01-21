const e = require("express");

let form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let errores = [];
    let campoUsuario = document.querySelector("imput.usuario");
    if (campoUsuario.value ==""){
        errores.push('Campo requerido');
    }
    

    let campoClave = document.querySelector("imput.clave");
    if (campoClave.value ==""){
        errores.push('Campo requerido');
    }else if (campoClave.value.lenght < 8){
            errores.push('La contraseña debe tener un mínimo de 8 caracteres')
        }
    (errores.lenght>0){
        e.preventDefault();

        let ulErrores = document.querySelector('div.errores ul');
        for (let index = 0; index < errores.length; index++) {
            ulErrores.innerHTML += '<li>' + errores[i] +'</li>'
            
        }
    }
})