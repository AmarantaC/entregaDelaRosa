/*-----Ingreso-----*/

const botonIngreso = document.getElementById("botonIngreso");
botonIngreso.addEventListener("click", formIngreso);

function formIngreso(){
    ingreso = document.createElement("div");
    ingreso.innerHTML= `
    <form id="formIngreso" class="datos" name="datos">      
        <div class="inputs">            
            <i id="cerrar" class="material-symbols-outlined cerrar">close</i>
            <div class="input_area">
                <label class="label" for="nombre">Nombre:</label>
                <input type="text" id="nombreIngreso" name="nombre" class="input">                
            </div>
            <div class="input_area">
                <label class="label" for="contraseña">Contraseña:</label>
                <input type="password" id="contraseñaIngreso" name="contraseña">                
            </div>                      
            <div id="error"></div>
            <input type="submit" id="enviar" value="Enviar">
        </div>       
    </form>
`
ingreso.classList.add("formulario");
form.appendChild(ingreso);
form.removeChild(botones);

const botonCerrar = document.getElementById("cerrar");
botonCerrar.addEventListener("click", cerrarForm);

function cerrarForm (){
    form.removeChild(ingreso);
    form.appendChild(botones);
}

/*----- Funcion Ingreso -----*/
const funIngreso = document.getElementById("formIngreso");

funIngreso.addEventListener("submit", (e) => {
    e.preventDefault();
   
    let nombreIngreso = document.getElementById("nombreIngreso").value;
    let contraseñaIngreso = document.getElementById("contraseñaIngreso").value;
    const error = document.getElementById("error");    
                
    for ( let Usuario of usuariosAlmacenados){

        if ((nombreIngreso === Usuario.nombre)&(contraseñaIngreso === Usuario.contraseña)){             
            funIngreso.reset();
            cerrarForm(); 
            binvenida();  
                                      
        }else{
            const errorElementos = document.getElementsByClassName("errorMensaje");            
            funIngreso.reset();
            errorContraseña = document.createElement("div");
            if(errorElementos.length == 0){
                errorContraseña.innerHTML = `<p class="errorMensaje">Usuario o contraseña incorrectos</p>`;
                error.appendChild(errorContraseña);                
            }     
        }         
    } 
    
    function binvenida(){

        usuarioValidado = usuariosAlmacenados.find(Usuario => Usuario.nombre === nombreIngreso);
        console.log(usuarioValidado);     
            
            fetch(horoscopos)
                    .then(respuesta => respuesta.json())
                    .then(signos => {    
                    signoValidado = signos.find(Signo => Signo.nombre === usuarioValidado.signoUsuario);
                    console.log(signoValidado);
    
            let usuarioBienvenida = document.createElement("div");
            usuarioBienvenida.innerHTML = `
            <div class="caja imagenUsuario">
                <img src=${signoValidado.img} alt="${signoValidado.nombre}">
            </div>
            <div class="caja texto">
                <h1>Hola <strong>${usuarioValidado.nombre}</strong></h1>
                <p>El horoscopo de hoy para <strong>${signoValidado.nombre}</strong> es:</p> 
                <p>${signoValidado.mensaje}</p>              
            </div>
            <div class="botones" id="botonesInicio">
                <div class="boton" id="tarot">Tarot</div>
                <div class="boton" id="otrosSignos">Otros Signos</div> 
                <div class="boton" id="salir">Salir</div>    
            </div>
        </div>
        `
            seccion.removeChild(inicio);
            usuarioBienvenida.classList.add("usuario");                
            seccion.appendChild(usuarioBienvenida);     
    
            Toastify({
                text: `Bienvenidx ${usuarioValidado.nombre}`,        
                className: "info",
                duration: 2000,
                gravity: "top",
                style: {
                    background: "rgba(219, 174, 76, 0.8)",
                },
            }).showToast();
                 
            const botonSalir = document.getElementById("salir")
            botonSalir.addEventListener("click", salir);        
            
            function salir(){
    
                seccion.appendChild(inicio);
                seccion.removeChild(usuarioBienvenida);
                
                Toastify({
                    text: `Adios ${usuarioValidado.nombre}`,        
                    className: "info",
                    duration: 2000,
                    gravity: "top",
                    style: {
                        background: "rgba(219, 174, 76, 0.8)",
                    },
                }).showToast();                     
            } 
            
            const botonSignos = document.getElementById("otrosSignos")
            botonSignos.addEventListener("click", otrosSignos); 
            console.log(botonSignos);
    
            function otrosSignos(){
    
                menuSignos = document.createElement("div");
                menuSignos.innerHTML= `
                <div class="caja imagen">
                    <img src="img/zodiaco.png">
                </div>
                <div class="caja texto botones" id="signosMenu">
                </div>
                <div class="botones" id="botonesInicio">
                    <div class="boton" id="salir">Salir</div>    
                </div>    
                `   
                seccion.removeChild(usuarioBienvenida);
                menuSignos.classList.add("otrosSignos");                
                seccion.appendChild(menuSignos);  
                let signosMenu = document.getElementById("signosMenu");
    
                signos.forEach(signo => {
                    signosMenu.innerHTML += `<div class="boton signo" id="${signo.nombre}">${signo.nombre}</div>`               
                });
    
                const botonSalir = document.getElementById("salir")
                botonSalir.addEventListener("click", salir);        
            
                function salir(){
                    seccion.removeChild(menuSignos);
                    seccion.appendChild(usuarioBienvenida);
                } 
    
            }
    
        })
        .catch(error => console.log(error))
        .finally(() => console.log("Proceso Finalizado"));
        
    }

});

}


