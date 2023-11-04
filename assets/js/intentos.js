 //----------------------------------- 1 intento abraham -------------------------------------

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
const life_hacks = "../JSON/live_hacks.json";
const peliculas = "../JSON/movies.json";
const musica = "../JSON/music.json";

const pregunta = [ciencias,cultura, deportes, life_hacks, peliculas,  musica];

class preguntas{
    
}*/
//----------------------------------------------------- 1 intento skarlett ----------------------------------------
/*
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
} */


/* const obtenerPreguntaAleatoria = async (urls) => {
    const todasLasPreguntas = [];
  
    for (const url of urls) {
      const resp = await fetch(url);
      const data = await resp.json();
  
      if (data.preguntas && data.preguntas.length > 0) {
        todasLasPreguntas.push(...data.preguntas);
        console.log(todasLasPreguntas);
      }
    }
  
    return todasLasPreguntas[
      Math.floor(Math.random() * todasLasPreguntas.length)
    ];
  };
  
  const mostrarPregunta = (pregunta) => {
    const preguntaElement = document.createElement("div");
    preguntaElement.className = "preguntaPreguntas";
    preguntaElement.textContent = pregunta.pregunta;
  
    const divEncabezado = document.getElementById("pregunta");
    console.log(divEncabezado);
    divEncabezado.appendChild(preguntaElement);
  
    
    const form = document.forms.respuesta;
   
  
    pregunta.opciones.forEach((opcion, index) => {
      const opcionesElement = document.createElement("div");
      opcionesElement.className = "botonPregunta";
      form.appendChild(opcionesElement);
    
  
      const opcionElement = document.createElement("div");
      opcionElement.className = "opcionPregunta";
      opcionElement.textContent = opcion;
  
      const inputElement = document.createElement("input");
      inputElement.type = "radio";
      inputElement.name = "respuesta";
  
      opcionesElement.appendChild(opcionElement);
      opcionesElement.appendChild(inputElement);
    });
  };
  
  
  const iniciarQuiz = async () => {
    const pregunta = await obtenerPreguntaAleatoria(jsonCategoriasURLs);
    if (pregunta) {
      mostrarPregunta(pregunta);
    } else {
      console.log("No se encontraron preguntas.");
    }
  };
  
  iniciarQuiz(); */
  
  
  // const checkAnswer =  (e) =>{
  //   e.preventDefault();
  //   const correcAnswer = data.preguntas[]
  //   console.log(correcAnswer)
  
  // }
  
  //  form.addEventListener("submit", checkAnswer); 