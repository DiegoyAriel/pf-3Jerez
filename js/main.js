/* Declaración de variables globales */
let nombre ="";
let control=0;
/* Declaración de funciones Globales*/
class gato {
    constructor(nombre, color, funcion, mensaje) {
        this.nombre = nombre;
        this.color = color;
        this.funcion = funcion;
        this.mensaje = mensaje;
    }
}
function hablar(mensaje){
    alert(mensaje)
}
/* Objetos */
const madameLaPurr=new gato("madameLaPurr", "Negro", "Adivinar el futuro", "Preguntame sobre tu futuro");
const cathespiare =new gato("Cathespiare", "Naranja", "Escribir una historia", "Te asustaré hasta los huesos");
const miauLaCasan =new gato("Miau La Casan", "Rubio", "Dar consejos", "Recordá que sos unic@ y grande");
const ariel =new gato("Ariel", "Gris", "Hablar sobre los otros gatos", "Soy el dueño de este sitio, lo cree para que puedas divertirte");


/* Segundo Gato */

/* Tercer gato */
    function gatoConsejero(){
        hablar("Eres una gran persona, nunca olvides tu gran potencial!");
        control= 10;
    }
/* Cuarto gato */
    let repeticionDescripcion= 0;
    function descripcion(gato){
        hablar("Su nombre es: " + gato.nombre);
        hablar("Es de color: " + gato.color);
        hablar("Su trabajo es: " + gato.funcion);
        hablar("Su mensaje para ti es: " + gato.mensaje);
    }
    function gatoOwner(){
        hablar("Hola! Mi nombre es Ariel, soy el encargado de organizar a todos tus peludos amigos, quieres saber más sobre ellos")
        let info=prompt("De que gato te gustaría saber: 1. Madame La purr 2.Cathespiare 3.Miau La Casan 4.Ariel, The owner")
        if (info ==1){
            descripcion(madameLaPurr);
        }
        else if (info ==2){
            descripcion(cathespiare);
        }
        else if (info ==3){
            descripcion(miauLaCasan);
        }
        else if (info ==4){
            descripcion(ariel);
        }
        else{
            hablar("No tenemos más personal aún, lo siento.")
        }
    repeticionDescripcion= prompt("¿Quiéres otra descripcion? 1. Si 2. No");
    if (repeticionDescripcion == 1){
        control= 4;
    }
    else if (repeticionDescripcion == 2){
        hablar(nombre + " Ten un excelente día");
        control= 10;
    }
    else{
        hablar("Opción invalida");
        control= 4;
    }
    }
/* Menú principal del simulador */
alert("Bienvenid@ a Cat Village");

nombre = prompt("Para comenzar, Escriba su nombre");

hablar("Hola " + nombre + " ¿Con que gato quieres hablar?");

while (control == 0){
    let menu= prompt("1. Madam La Purr 2.Cathespiare 3. Miau La Casan 4.Ariel, The owner")
    if (menu == 1){
        control=1;
        while (control==1){
            gatoAdivino();
        }
    }
    else if (menu== 2){
        control=2;
        while (control==2){
            gatoEscritor();
        }
    }
    else if (menu == 3){
        control = 3;
        while (control == 3){
            gatoConsejero();
        }
    }
    else if( menu == 4){
        control = 4;
        while (control == 4){
            gatoOwner();
        }
    }
    else{
        hablar("Opción invalida")
    }

}