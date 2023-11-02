/*let preguntas2 = true;
let juegoTermino = true;
let reiniciamosJuego = true;
const pizza1 = "../recourses/icons/pizza/pizza-5.png";
const pizza2 = "../recourses/icons/pizza/pizza-4.png";
const pizza3 = "../recourses/icons/pizza/pizza-3.png";
const pizza4 = "../recourses/icons/pizza/pizza-2.png";
const pizza5 = "../recourses/icons/pizza/pizza-1.png";
const pizza6 = "../recourses/icons/pizza/pizza.png";
const ciencias = "../JSON/ciencias.json";
const cultura = "../JSON/cultura-general.json";
const deportes = "../JSON/deportes.json";
const life_hacks = "../JSON/ciencias.json";
const peliculas = "../JSON/movies.json";
const musica = "../JSON/music.json";

const pregunta = [ciencias,cultura, deportes, life_hacks, peliculas,  musica];

class preguntas{
    
}*/

function escogerPreguntaRandom() {
    escogerPregunta(Math.floor(Math.random() * Array.length))
}
function escogerPregunta(n) {
    let preguntas = readText("ciencias.json", "cultura-general.json", "deportes.json","life_hacks.json","movies.json","music.json") 
    let interprete = JSON.parse(preguntas)
    pregunta = interprete[n]
    select_id("pregunta").innerHTML = pregunta.pregunta
}

function select_id(id) {
    return document.getElementById(id)
}

function style(id) {
    return select_id(id).style
}

function readText(ruta_Local) {
    let texto = null
} 