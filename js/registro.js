/*----- Formulario Registro-----*/

const botonRegistro = document.getElementById("botonRegistro");
botonRegistro.addEventListener("click", formRegistro ); 

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
                <input type="password" id="contraseña" name="contraseña" class="input">                
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

    const formRegistro = document.getElementById("formRegistro");
    formRegistro.addEventListener("submit", (e) => {        
       
        let nombre = document.getElementById("nombre").value;
        let contraseña = document.getElementById("contraseña").value;
        let fecha = new Date (document.getElementById("fecha").value);
        let dia = fecha.getDate();
        let mes = fecha.getMonth()+1;       
              
        if((nombre == "")||(contraseña == "")||(fecha == "")){
            e.preventDefault(); 
            errorDatos();
            formRegistro.reset();
        }else{
            altaUsuario();        
        }

        function errorDatos(){                            
            let errorDatos = document.getElementById("errorDatos");            
            error = document.createElement("p");
            error.classList.add("errorMensaje");
            error.innerText=`
            Ingrese todos los campos
            `
            let errores = document.getElementsByClassName("errorMensaje")

            if( errores.length == 0){    
                errorDatos.appendChild(error);            
            }
                                 
        }

        function altaUsuario(){
            
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
       
                localStorage.setItem("Usuario", JSON.stringify(usuarios));               
                                  
            })
            
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado")
            );
        }
      
    }); 

}





      



        
     
        

    
    
                         
   
    




