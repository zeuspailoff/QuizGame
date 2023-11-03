"use strict";

const jsonCategoriasURLs = [
  "../JSON/ciencias.json",
  "../JSON/cultura-general.json",
  "../JSON/deportes.json",
  "../JSON/lifeHacks.json",
  "../JSON/movies.json",
  "../JSON/music.json",
];

const randomQuestionEachJSON = async(urls) => {

  const finalQuestions = [];

  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    const preguntas = data.preguntas

    if(preguntas){

      const ramdomI = Math.floor(Math.random() * preguntas.length);
      const question = preguntas[ramdomI];
      finalQuestions.push({
        "question": question.pregunta,
        "options": question.opciones,
        "correct_answer": question.respuesta_correcta
      })
    }
  }

  return finalQuestions;
}

randomQuestionEachJSON(jsonCategoriasURLs);

const divShow = document.querySelector(".show");

const renderQuestion = (obj) => {

  const quest = document.createElement("div");
  quest.className = "preguntaPreguntas";
  quest.textContent = obj.pregunta;

  const header = document.getElementById("pregunta");
  header.appendChild(quest);

  const form = document.forms.respuesta;

  obj.opciones.forEach((opcion) => {
    const opcions = document.createElement("div");
    opcions.className = "botonPregunta";
    form.appendChild(opcions);
  

    const opcionValue = document.createElement("div");
    opcionValue.className = "opcionPregunta";
    opcionValue.textContent = opcion;

    const inputRadio = document.createElement("input");
    inputRadio.type = "radio";
    inputRadio.name = "respuesta";

    opcionesElement.appendChild(opcionValue);
    opcionesElement.appendChild(inputRadio);
  });

}


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

iniciarQuiz();


// const checkAnswer =  (e) =>{
//   e.preventDefault();
//   const correcAnswer = data.preguntas[]
//   console.log(correcAnswer)

// }

//  form.addEventListener("submit", checkAnswer);  */