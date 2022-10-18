/*----- Usuarios ------*/

class Usuario {
    constructor(nombre, contraseña,  fecha,  signoUsuario) {
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.fecha = fecha;
        this.signoUsuario = signoUsuario;
    }
};

const usuarios = [];

/*----- Rutas Json ------*/

const horoscopos = "json/horoscopos.json";

/*------Inicio-----*/

const seccion = document.getElementById("seccion");
let inicio = document.createElement("div");
inicio.innerHTML=`
<div class="caja imagen">
    <img src="img/inicio1.png">
</div>
    <div class="caja texto">
<h1>Conoce el mensaje que tienen los astros para tí</h1>
    <div class="caja" id="form">             
    </div>
</div>
`
inicio.classList.add("inicio");
seccion.appendChild(inicio);


const form = document.getElementById("form");
let botones = document.createElement("div");
botones.innerHTML=`
<div class="botones" id="botonesInicio">
    <div class="boton" id="botonRegistro">Registro</div>
    <div class="boton" id="botonIngreso">Ingreso</div>     
</div>
`
botones.classList.add("botones");
form.appendChild(botones);

/*-----Registro-----*/

const botonRegistro = document.getElementById("botonRegistro")
botonRegistro.addEventListener("click",formRegistro);
function formRegistro(){
    
    registro = document.createElement("div");
    registro.innerHTML= `
    <form id="formRegistro" class="datos" name="datos">      
        <div class="inputs">            
            <i id="cerrar" class="material-symbols-outlined cerrar">close</i>
            <div class="input_area">
                <label class="label" for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" class="input">                
            </div>
            <div class="input_area">
                <label class="label" for="contraseña">Contraseña:</label>
                <input type="password" id="contraseña" name="contraseña">                
            </div>                       
            <div class="input_area">
                <label class="label" for="fecha">Fecha de Nacimiento:</label>
                <input type="date" id="fecha" name="fecha" class="input">
            </div>
            <div id="errorDatos"></div>
            <input type="submit" id="enviar" value="Enviar">
        </div>       
    </form>
`
registro.classList.add("formulario");
form.appendChild(registro);
form.removeChild(botones);
const botonCerrar = document.getElementById("cerrar");
botonCerrar.addEventListener("click", cerrarForm);

function cerrarForm (){
    form.removeChild(registro);
    form.appendChild(botones);
}

/*----- Funcion Registro -----*/

const funRegistro = document.getElementById("formRegistro");

funRegistro.addEventListener("submit", () => {
       
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    const fecha = new Date (document.getElementById("fecha").value);
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1; 

/*----- Validacion de datos -----*/

let errorDatos = document.getElementById("errorDatos");
let input = document.getElementsByClassName("input");
 
    error = document.createElement("p");
    error.classList.add("errorMensaje");
    error.innerText=`
        Ingrese todos los campos
        `
        let errores = document.getElementsByClassName("errorMensaje")

        if(errores.length == 0){
            for(let i = 0; i < input.length; i++){
                input.value = " " && errorDatos.appendChild(error);     
            }                   
        }
     
/*----- Conocer Signo -----*/

fetch(horoscopos)
    .then(respuesta => respuesta.json())
    .then(signos => {
        
        for ( let Signo of signos){
            if (((dia >= Signo.diaInicio )&&( dia <= Signo.diasMes)&&(mes == Signo.mesInicio))||
            ((dia >= 1 )&&( dia <= Signo.diaFin)&&(mes == Signo.mesFin))){
                signoUsuario = Signo.nombre       
            }       
        }
    
    /*------ Creacion de Usuario ------*/
      
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
                
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso Finalizado"));
    
});

}

/*---------------- Almacenados -----------------*/

const usuariosAlmacenados = JSON.parse(localStorage.getItem("Usuario"));
console.log(usuariosAlmacenados);
