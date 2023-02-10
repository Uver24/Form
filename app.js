const formulario = document.querySelector('.form-register');
const nombreId = document.querySelector('#nombres');
const apellidosId = document.querySelector('#apellidos');
const edadId = document.querySelector('#edad');
const correoId = document.querySelector('#correo');
const telefonoId = document.querySelector('#telefono');
const passwordId = document.querySelector('#password');


document.addEventListener('DOMContentLoaded', ()=> {
    formulario.addEventListener('submit', validarUsuario);
    
})

function validarUsuario(e) {
    e.preventDefault();
    if(nombreId.value === "" || apellidosId.value === "" ||  edadId.value === "" || correoId.value === "" || telefonoId.value === "" || passwordId.value === "") {
        console.log("todos deben estar llenos  ")
        mostrarMensaje('Todos los campos son obligatorios');
    } else if (nombreId.value.length < 3 || nombreId.value.length > 40 || !isNaN(nombreId.value.target)) {
           mostrarMensaje ('Nombre no válido')
            console.log ('Nombre no válido')
    } else if (apellidosId.value.length < 3 || apellidosId.value.length > 40 || !isNaN(apellidosId.value.target)) {
            mostrarMensaje ('Apellido no válido');
    } else if (edadId.value <18 ) {
            mostrarMensaje ('Debe ser mayor de edad')
    } else if(telefonoId.value.length <7 || telefonoId.value.length >10 || isNaN(telefonoId.value)) {
            mostrarMensaje ('Teléfono no válido')
    } 
    
    


    
}
correoId.addEventListener("blur", (e) => {
    const valid_email = e.target.value
    validacion_email(valid_email)
})
function validacion_email(correoId) {
    let arroa = correoId.indexOf("@")
    const sert = correoId.slice(arroa +1, arroa + 3)
    if ( correoId.includes("@")  ) {
        if (sert == "gm" || sert == "ou") {
            
            if ( correoId.includes("gmail.com") || correoId.includes("outlook.com")) {
                mostrarMensaje("correo es correcto")
                console.log("correo es correcto ")
            }else {
                mostrarMensaje("emil es incorrecto")
                console.log("email es incorrecto ")
            }
        }else {
            mostrarMensaje("emil es incorrecto")
            console.log("email es incorrecto")
        }
        
    }else {
        mostrarMensaje("emil es incorrecto")
        console.log("email es incorrecto ")
    }
    
}

function mostrarMensaje(msg) {

    const alerta = document.querySelector('.error');
    if(!alerta) {
        const alerta = document.createElement('div');
        alerta.textContent = msg;
        alerta.classList.add('error');
        
        formulario.appendChild(alerta);
        
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}