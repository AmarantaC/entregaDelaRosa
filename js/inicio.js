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

/*---------------- Almacenados -----------------*/

const usuariosAlmacenados = JSON.parse(localStorage.getItem("Usuario"));
console.log(usuariosAlmacenados);

/*----- Rutas Json ------*/

const horoscopos = "json/horoscopos.json";
const tarot = "json/tarot.json";

/*------Inicio-----*/

const seccion = document.getElementById("seccion");
const inicio = document.createElement("div");
inicio.innerHTML=`
    <div class="caja imagen">
        <img src="img/inicio1.png">
    </div>
        <div class="caja texto">
            <h1>Descubre el mensaje que tienen los astros para tí</h1>
            <div class="caja" id="form">             
        </div>
    </div>
    `
inicio.classList.add("inicio");
seccion.appendChild(inicio);

    const form = document.getElementById("form");
    const botones = document.createElement("div");
    botones.innerHTML=`
    <div class="botones" id="botonesInicio">
        <div class="boton" id="botonRegistro">Registro</div>
        <div class="boton" id="botonIngreso">Ingreso</div>     
    </div>
    `
botones.classList.add("botones");
form.appendChild(botones);         