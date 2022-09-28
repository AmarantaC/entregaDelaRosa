const contenedorInicio = document.getElementById("contenedorInicio");

///------ Creamos Botones Inicio -------///
let botones = document.createElement("div");
botones.innerHTML=`
<button id="registro" class="boton">Registrate</button>
<button id="ingresa" class="boton">Ingresa</button>
`
botones.classList.add("botones");
contenedorInicio.appendChild(botones);

///-------Agragamos seccion registro------//

const botonRegistro = document.getElementById("registro");
botonRegistro.addEventListener("click",formRegistro);

function formRegistro(){
    
    registro = document.createElement("div");
    registro.innerHTML=`
    <form id="registro" class="datos" name="datos">      
        <div class="inputs">            
            <i id="cerrar" class="material-symbols-outlined cerrar">close</i>
            <div class="input_area">
                <label class="label" for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre">                
            </div>
            <div class="input_area">
                <label class="label" for="contraseña">Contraseña:</label>
                <input type="password" id="contraseña" name="contraseña">                
            </div>            
            <div class="input_area">
                <label class="label" for="fecha">Fecha de Nacimiento:</label>
                <input type="date" id="fecha" name="fecha">
            </div>
            <input type="submit" id="enviar" value="Enviar">
        </div>
        
    </form>
`
registro.classList.add("formulario");
contenedorInicio.appendChild(registro);
contenedorInicio.removeChild(botones);

const botonCerrar = document.getElementById("cerrar");
botonCerrar.addEventListener("click", cerrarForm);

function cerrarForm (){
    contenedorInicio.removeChild(registro);
    contenedorInicio.appendChild(botones);
}

///------- Funcion Registro -----///

const funRegistro = document.getElementById("registro");

funRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
   
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    const fecha = new Date (document.getElementById("fecha").value);
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1; 
            
    for ( let Signo of signos){
        if (((dia >= Signo.diaInicio )&&( dia <= Signo.diasMes) && (mes == Signo.mesInicio))||
        ((dia >= 1 )&&( dia <= Signo.diaFin) && (mes == Signo.mesFin))){
            signoUsuario = Signo.nombre       
        }       
    }
  
    const usuario = new Usuario (nombre, contraseña, fecha, signoUsuario);
    usuarios.push(usuario);
    console.log(usuarios);

    localStorage.setItem("Usuario", JSON.stringify(usuarios));

    funRegistro.reset();
    cerrarForm();
});

}

///------ Agregamos seccion Ingresa ------//

const botonIngresa = document.getElementById("ingresa");
botonIngresa.addEventListener("click", formIngresa);

function formIngresa(){

    ingresa = document.createElement("div");
    ingresa.innerHTML=`
    <form id="ingresa" class="datos" name="datos">
    <div class="inputs">
        <i id="cerrar" class="material-symbols-outlined cerrar">close</i>
        <div class="input_area">
            <label class="label" for="nombre">Nombre:</label>
            <input type="text" id="nombreIngresa" name="nombre">                
        </div>
        <div class="input_area">
            <label class="label" for="contraseña">Contraseña:</label>
            <input type="password" id="contraseñaIngresa" name="contraseña">                
        </div>  
        <div id="error" class="error"></div>   
        <input type="submit" id="enviar" value="Enviar">
    </div>
    </form>
`
ingresa.classList.add("formulario");
contenedorInicio.appendChild(ingresa);
contenedorInicio.removeChild(botones);

const botonCerrar = document.getElementById("cerrar");
botonCerrar.addEventListener("click", cerrarForm);

function cerrarForm (){
    contenedorInicio.removeChild(ingresa);
    contenedorInicio.appendChild(botones);
}

const funIngresa = document.getElementById("ingresa");

funIngresa.addEventListener("submit", (e) => {
    e.preventDefault();
   
    let nombreIngresa = document.getElementById("nombreIngresa").value;
    let contraseñaIngresa = document.getElementById("contraseñaIngresa").value;
    const error = document.getElementById("error");
                
    for ( let Usuario of usuariosAlmacenados){
        if ((nombreIngresa === Usuario.nombre)&(contraseñaIngresa === Usuario.contraseña)){             
            funIngresa.reset();
            cerrarForm(); 
            usuarioValidado = usuariosAlmacenados.find(Usuario => Usuario.nombre === nombreIngresa)
            console.log(usuarioValidado);
    
            signoValidado = signos.find(Signo => Signo.nombre === usuarioValidado.signoUsuario);
            console.log(signoValidado);

            inicioUsuario()
         
            
        }else{
            const errorElementos = document.getElementsByClassName("errorMensaje");            
            funIngresa.reset();
            errorContraseña = document.createElement("div");
            if(errorElementos.length == 0){
                errorContraseña.innerHTML = `<p class="errorMensaje">Usuario o contraseña incorrectos</p>`;
                error.appendChild(errorContraseña);                
            }     
        } 
        
    }     
    
    function inicioUsuario(){
    
        let usuarioBienvenida = document.createElement("div");
        usuarioBienvenida.innerHTML = `
        <div class="saludo" id="saludo">
        <h1 class="saludo">Hola ${usuarioValidado.nombre}</h1>
        <p>El horoscopo de hoy para ${usuarioValidado.signoUsuario}</p>
        <p>${signoValidado.mensaje}</p>
        </div> 
        <div class="imagen">
        <img src=${signoValidado.img} alt="${signoValidado.nombre}">
        </div>   
        <div class="menu" id="menu">
        <!--<button id="otrosSignos" class="boton">Otros signos</button>
        <button id="tarot" class="boton">Tarot</button>-->
        <button id="salir" class="boton">Salir</button>
    </div> 
    `
        usuarioBienvenida.classList.add("usuario");
        usuarioHoroscopo.classList.add("usuarioHoroscopo");
        usuarioHoroscopo.appendChild(usuarioBienvenida);  
        
        const botonSalir = document.getElementById("salir")
        botonSalir.addEventListener("click", salir);
        
        function salir(){
            usuarioHoroscopo.removeChild(usuarioBienvenida);  
            usuarioHoroscopo.classList.remove("usuarioHoroscopo");      
        }

        /*const botonTarot = document.getElementById("tarot")
        botonTarot.addEventListener("click", leerTarot);
        
        function leerTarot(){
            usuarioHoroscopo.removeChild(usuarioBienvenida);  
            usuarioHoroscopo.classList.remove("usuarioHoroscopo");      
        }*/
    }
            
});

}







