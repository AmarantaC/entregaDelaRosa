/*---------------- Usuarios -----------------*/

class Usuario {
    constructor(nombre, contraseña,  fecha,  signoUsuario) {
        this.nombre = nombre;
        this.contraseña = contraseña; 
        this.fecha = fecha;
        this.signoUsuario = signoUsuario;
    }
};

const usuarios = [];



/*---------------- Signos -----------------*/

class Signo{
    constructor(nombre, diaInicio, diasMes, mesInicio, diaFin, mesFin, mensaje, img){
        this.nombre = nombre;
        this.diaInicio = diaInicio;
        this.diasMes = diasMes;
        this.mesInicio = mesInicio;    
        this.diaFin = diaFin;
        this.mesFin = mesFin;
        this.mensaje = mensaje; 
        this.img = img;       
    }
};

const aries = new Signo ("Aries", 21, 31, 3, 19, 4, "Aunque se hayan suavizado los problemas, especialmente con los amigos, la relación no augura buen panorama.", "img/horoscopos/aries.jpg");
const tauro = new Signo ("Tauro", 20, 30, 4, 20, 5, "Evita que los celos te jueguen una mala pasada. Piensa dos veces antes de hacer comentarios irónicos que ofusquen a tu pareja.", "img/horoscopos/tauro.jpg");
const geminis = new Signo ("Geminis", 21, 31, 5, 20, 6, "Es momento de cerrar círculos. Esa historia inconclusa merece un final, ya que tu pareja no soportará convivir con el pasado.", "img/horoscopos/geminis.jpg");
const cancer = new Signo ("Cancer", 21, 30, 6, 22, 7, "Situación oportuna para complacer con una cena romántica y una noche tranquila a la persona que te atrae.", "img/horoscopos/cancer.jpg");
const leo = new Signo ("Leo", 23, 31, 7, 20, 8, "Los encuentros virtuales de recreo con amistades estimularán tu lado más romántico. Presta atención a señales indirectas.", "img/horoscopos/leo.jpg");
const virgo = new Signo ("Virgo", 23, 31, 8, 22, 9, "Tu bienestar lo encontrarás en las cosas más pequeñas, en la familia, una cena, una película. La soledad será tu aliada.", "img/horoscopos/virgo.jpg");
const libra = new Signo ("Libra", 23, 30, 9, 22, 10, "Cierto clima de tensión y traiciones se respira en tu trabajo. Lo mejor será tomar distancia de algunos colegas y acercarte más a otros.", "img/horoscopos/libra.jpg");
const escorpio = new Signo ("Escorpio", 23, 31, 10, 21, 11, "Trata de descansar un poco más y así relajarte del estrés diario de tu trabajo. Renueva en lo posible tu interés por la vida sana.", "img/horoscopos/escorpio.jpg");
const sagitario = new Signo ("Sagitario", 22, 30, 11, 21, 12, "No habrá vuelta atrás de las determinaciones que pretendes tomar en el día de hoy. Piensa dos veces antes de hacerlo.", "img/horoscopos/sagitario.jpg");
const capricornio = new Signo ("Capricornio", 22, 31, 12, 20, 1, "Tus relaciones sociales experimentarán un gran giro, aunque se manifestarán de muy diferentes formas.", "img/horoscopos/capricornio.jpg");
const acuario = new Signo ("Acuario", 21, 31, 1, 19, 2, "Surgen nuevas gestiones y negocios importantes. No realices cambios radicales, simplemente mejora lo que tienes.", "img/horoscopos/acuario.jpg");
const picis = new Signo ("Picis", 20, 29, 2, 20, 3, "No habrá vuelta atrás de las determinaciones que pretendes tomar en el día de hoy. Piensa dos veces antes de hacerlo.", "img/horoscopos/picis.jpg");

const signos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, picis];

/*-----------------Tarot------------------------*/
class cartaTarot{
    constructor(id,nombre, mensaje, img){
        this.id = id;
        this.nombre = nombre;
        this.mensaje = mensaje;
        this.img = img;               
    }
};

const laLoca = new cartaTarot (
    id = 0,
    nombre = "La loca",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/0.jpg",
);

const laMaga = new cartaTarot (
    id = 1,
    nombre = "La Maga",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/1.jpg",
);

const laSumaSacerdotisa = new cartaTarot (
    id = 2,
    nombre = "La Suma Sacerdotisa",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/2.jpg",
);

const laEmperatriz = new cartaTarot (
    id = 3,
    nombre = "La Emperatriz",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/3.jpg",
);

const elEmperador = new cartaTarot (
    id = 4,
    nombre = "El Emperador",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/4.jpg",
);

const laSacerdotisa = new cartaTarot (
    id = 5,
    nombre = "La Sacerdotisa",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/5.jpg",
);

const losAmantes = new cartaTarot (
    id = 6,
    nombre = "Los Amantes",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/6.jpg",
);

const elCarruaje = new cartaTarot (
    id = 7,
    nombre = "El Carruaje",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/7.jpg",
);

const laFueza = new cartaTarot (
    id = 8,
    nombre = "La Fuerza",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/8.jpg",
);

const elHermitaño = new cartaTarot (
    id = 9,
    nombre = "El Hermitaño",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/9.jpg",
);

const elMundo = new cartaTarot (
    id = 9,
    nombre = "El Mundo",
    mensaje = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis consequuntur alias maxime reiciendis officia sunt neque vero consequatur ea et, eos nostrum saepe sint obcaecati facilis aliquid quaerat non?",
    img = "img/tarot/9.jpg",
);

const cartasTarot = [laLoca, laSumaSacerdotisa, laEmperatriz, elEmperador, laSacerdotisa, 
    losAmantes, elCarruaje, laFueza, elHermitaño, elMundo];



/*---------------- Almacenados -----------------*/

const usuariosAlmacenados = JSON.parse(localStorage.getItem("Usuario"));
console.log(usuariosAlmacenados);