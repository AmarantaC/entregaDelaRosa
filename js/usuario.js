
function otrosSignos(){

    menuSignos = document.createElement("div");
    menuSignos.innerHTML= `
    <div class="caja imagenUsuario">
        <img src="img/inicio1.png">
    </div>
    <div class="caja texto">
    </div>
    <div class="botones" id="botonesInicio">
        <div class="boton" id="salir">Salir</div>    
    </div>    
    `   
    seccion.removeChild(usuarioBienvenida);
    usuarioBienvenida.classList.add("otrosSignos");                
    seccion.appendChild(menuSignos);   
}



