/*----- Funcion Registro -----*/

const funRegistro = document.getElementById("formRegistro");

funRegistro.addEventListener("submit", (e) => {
      
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    const fecha = new Date (document.getElementById("fecha").value);
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1; 


/*----- Conocer Signo -----*/

fetch(horoscopos)
    .then(respuesta => respuesta.json())
    .then(signos => {

        /*----- Validacion de datos -----*/

let errorDatos = document.getElementById("errorDatos");
let input = document.getElementsByClassName("input");
 
    error = document.createElement("p");
    error.classList.add("errorMensaje");
    error.innerText=`
        Ingrese todos los campos
        `
    let errores = document.getElementsByClassName("errorMensaje")

        if((errores.length == 0) && (input.value == " ")){
            e.preventDefault();
            errorDatos.appendChild(error);                                       
        }else{
            nuevoUsuario();
        }
     
        
        for ( let Signo of signos){
            if (((dia >= Signo.diaInicio )&&( dia <= Signo.diasMes)&&(mes == Signo.mesInicio))||
            ((dia >= 1 )&&( dia <= Signo.diaFin)&&(mes == Signo.mesFin))){
                signoUsuario = Signo.nombre       
            }       
        }
    
    /*------ Creacion de Usuario ------*/

    function nuevoUsuario(){
        const usuario = new Usuario (nombre, contraseña, fecha, signoUsuario);
        usuarios.push(usuario);
        console.log(usuarios);

        localStorage.setItem("Usuario", JSON.stringify(usuarios));
    
        Toastify({
            text: "¡Registro Exitoso!",                      
            className: "info",
            duration: 5000,
            gravity: "top",
            style: {
                background: "rgba(219, 174, 76, 0.8)",
            },
        }).showToast();
        Toastify({
            text: "Ya puedes ingresar",                      
            className: "info",
            duration: 5000,
            gravity: "top",
            style: {
                background: "rgba(219, 174, 76, 0.8)",
            },
        }).showToast();    
    
        funRegistro.reset();
        cerrarForm();

    }
                         
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso Finalizado"));
    
});


