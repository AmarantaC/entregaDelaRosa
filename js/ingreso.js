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

/*------ Funcion Ingreso ------*/
const funIngreso = document.getElementById("formIngreso");

funIngreso.addEventListener("submit", (e) => {
    e.preventDefault();
   
    let nombreIngreso = document.getElementById("nombreIngreso").value;
    let contraseñaIngreso = document.getElementById("contraseñaIngreso").value;
    const error = document.getElementById("error");
    const errorElementos = document.getElementsByClassName("errorMensaje");     
                
    for ( let Usuario of usuariosAlmacenados){
        if ((nombreIngreso === Usuario.nombre)&(contraseñaIngreso === Usuario.contraseña)){             
            funIngreso.reset();
            cerrarForm(); 
            bienvenida();                                        
        }else{                     
            funIngreso.reset();
            errorDatos();              
        }         
    } 

    function errorDatos(){
        if(errorElementos.length == 0){
            errorContraseña = document.createElement("div");   
            errorContraseña.innerHTML = `<p class="errorMensaje">Usuario o contraseña incorrectos</p>`;
            error.appendChild(errorContraseña);                                
        } 
    }
    
    function bienvenida(){
        usuarioValidado = usuariosAlmacenados.find(Usuario => Usuario.nombre === nombreIngreso);
        console.log(usuarioValidado);     
            
            fetch(horoscopos)
                    .then(respuesta => respuesta.json())
                    .then(signos => {    
                    signoValidado = signos.find(Signo => Signo.nombre === usuarioValidado.signoUsuario);
                    console.log(signoValidado);
    
            let usuarioBienvenida = document.createElement("div");
            usuarioBienvenida.innerHTML = `
            <div class="caja imagenUsuario" id="imagenUsuario">
                <img src="img/inicio1.png" alt="${signoValidado.nombre}">
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

            let imagen = document.getElementById("imagenUsuario");
            imagen.style.backgroundImage = `url(${signoValidado.img})`;

            console.log(imagen);
            
            Toastify({
                text: `¡Hola ${usuarioValidado.nombre}!`,        
                className: "info",
                duration: 4000,
                gravity: "top",
                style: {
                    background: "rgba(219, 174, 76, 0.8)",
                },
            }).showToast();

            /*------ Salir ------*/
                 
            const botonSalir = document.getElementById("salir")
            botonSalir.addEventListener("click", ()=>{
                seccion.appendChild(inicio);
                seccion.removeChild(usuarioBienvenida);
                
                Toastify({
                    text: `Hasta pronto ${usuarioValidado.nombre}`,        
                    className: "info",
                    duration: 2000,
                    gravity: "top",
                    style: {
                        background: "rgba(219, 174, 76, 0.8)",
                    },
                }).showToast();       
            });        
            
            /*------ Menu Otros Signos ------*/

            const botonSignos = document.getElementById("otrosSignos")
            botonSignos.addEventListener("click", otrosSignos); 
               
            function otrosSignos(){
                menuSignos = document.createElement("div");
                menuSignos.innerHTML= `
                <div class="caja imagen">
                    <img src="img/zodiaco.png">
                </div>
                <div class="caja texto botones" id="signosMenu">
                </div>
                <div class="botones" id="botonesInicio">
                    <div class="boton" id="regresar">Regresar</div>    
                </div>    
                `   
                seccion.removeChild(usuarioBienvenida);
                menuSignos.classList.add("otrosSignos");                
                seccion.appendChild(menuSignos);  
                let signosMenu = document.getElementById("signosMenu");
    
                signos.forEach(signo => {
                    signosMenu.innerHTML += `<div class="boton signo" id="${signo.nombre}">${signo.nombre}</div>` 
                });

                /*------ Funcion  Otro Signo ------*/

                for (let signo of signos){
                    let botonSigno = document.getElementById(`${signo.nombre}`);
                    botonSigno.addEventListener("click", otroSigno); 
                    
                    function otroSigno(){
                        signoElegido = document.createElement("div");
                        signoElegido.innerHTML= `
                            <div class="caja imagenUsuario" id="imagenSigno">
                                <img src="img/inicio1.png" alt="${signo.nombre}">
                            </div>
                            <div class="caja texto">
                                <h1><strong>${signo.nombre}</strong></h1>
                                <p>${signo.mensaje}</p>  
                            </div>            
                            <div class="botones" id="botonesInicio">
                                <div class="boton" id="regresar">Regresar</div>    
                            </div>     
                            `
                        seccion.removeChild(menuSignos);
                        signoElegido.classList.add("usuario");                
                        seccion.appendChild(signoElegido);
                        
                        let imagen = document.getElementById("imagenSigno");
                        imagen.style.backgroundImage = `url(${signo.img})`;

                        const botonRegresar = document.getElementById("regresar");
                        botonRegresar.addEventListener("click", ()=>{
                            seccion.appendChild(menuSignos);
                            seccion.removeChild(signoElegido);
                        })                                    
                    }
                }

                /*------ Regresar ------*/

                const botonRegresar = document.getElementById("regresar");
                botonRegresar.addEventListener("click", ()=>{
                    seccion.appendChild(usuarioBienvenida);
                    seccion.removeChild(menuSignos);
                })
    
            }

            
            const botonTarot = document.getElementById("tarot")
            botonTarot.addEventListener("click", leerTarot); 

            function leerTarot (){

                let menuTarot = document.createElement("div");
                menuTarot.innerHTML = `
                    <div class="caja imagenTarot" id="imagenTarot">
                        <img src="img/inicio1.png">
                    </div>
                    <div class="caja texto">
                        <h1><strong>${usuarioValidado.nombre} ELIJE UNA CARTA</strong></h1>
                        <div class="caja cartas">
                            <div class="carta">
                                <img src="img/carta.jpg"> 
                            </div>
                            <div class="carta">
                                <img src="img/carta.jpg"> 
                            </div>
                            <div class="carta">
                                <img src="img/carta.jpg"> 
                            </div>
                        </div>                        
                    </div> 
                                                                         
                    <div class="botones" id="botonesInicio">
                        <div class="boton" id="regresar">Regresar</div>    
                    </div>    
                    `
                seccion.removeChild(usuarioBienvenida);
                menuTarot.classList.add("tarot");                
                seccion.appendChild(menuTarot);

                /*------ Regresar ------*/
                                             
                const botonRegresar = document.getElementById("regresar");
                botonRegresar.addEventListener("click", ()=>{
                    seccion.appendChild(usuarioBienvenida);
                    seccion.removeChild(menuTarot);
                })

                
                const cartasTarot = document.getElementsByClassName("carta");                        
                
                fetch(tarot)
                    .then(respuesta => respuesta.json())
                    .then(carta => { 
                        

                        for(let i = 0; i < cartasTarot.length; i++){
                            cartasTarot[i].addEventListener('click', leerCarta);  

                        }                       

                        function leerCarta(){
                            let numSuerte = (Math.round(Math.random() * 11));
                            console.log(numSuerte);
                            let cartaSuerte = carta.find(carta=> carta.id === numSuerte);  
                            console.log(cartaSuerte);

                            let cartaElegida = document.createElement("div")
                            cartaElegida.innerHTML = `
                            <div class="caja imagenCarta" id="imagenCarta">
                                <img src=${cartaSuerte.img}>
                            </div>
                            <div class="caja texto">
                                <h1><strong>${cartaSuerte.nombre}</strong></h1>
                                <p>${cartaSuerte.mensaje}</p>  
                            </div>            
                            <div class="botones" id="botonesInicio">
                                <div class="boton" id="regresar">Regresar</div>    
                            </div>                              
                            `
                            seccion.removeChild(menuTarot);
                            cartaElegida.classList.add("cartaElegida");                
                            seccion.appendChild(cartaElegida);

                            const botonRegresar = document.getElementById("regresar");
                            botonRegresar.addEventListener("click", ()=>{
                                seccion.appendChild(usuarioBienvenida);
                                seccion.removeChild(cartaElegida);
                            })
                        }                                  
                })
                .catch(error => console.log(error))
                .finally(() => console.log("Proceso Finalizado"));

            }
           
    
        })
        .catch(error => console.log(error))
        .finally(() => console.log("Proceso Finalizado"));
        
    }

});

}

