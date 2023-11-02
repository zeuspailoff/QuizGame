"use strict";

const tituloPregunta = document.querySelector("#pregunta");
const jsonCategoriasURLs = [
    "../JSON/ciencias.json",
    "../JSON/cultura-general.json",
    "../JSON/deportes.json",
    "../JSON/lifeHacks.json",
    "../JSON/movies.json",
    "../JSON/music.json"
];

const main = async () => {
    const quiz = [];
    let puntos = 0;

    for (let categoriaURL of jsonCategoriasURLs) {
        const resp = await fetch(categoriaURL);
        const preguntas = await resp.json();

        if (preguntas.preguntas && preguntas.preguntas.length > 0) {
            let i = Math.floor(Math.random() * preguntas.preguntas.length);
            quiz.push(preguntas.preguntas[i]);
        }
        console.log(quiz);
    }

    const preguntaElement = document.createElement("div");
    preguntaElement.className = "preguntaPreguntas";
    document.getElementById("pregunta").appendChild(preguntaElement);

    const opcionesElement = document.createElement("div");
    opcionesElement.className = "botonPregunta";
    preguntaElement.appendChild(opcionesElement);
    console.log(preguntaElement)

    function mostrarPregunta(nombres) {
        const pregunta = quiz[nombres];
        preguntaElement.textContent = pregunta.tituloPregunta;
    
        opcionesElement.innerHTML = "";
    
        for (let i = 0; i < pregunta.opciones.length; i++) {
            const opcionElement = document.createElement("div");
            opcionElement.className = "opcionPregunta";
            opcionElement.textContent = pregunta.opciones[i];
    
            const inputElement = document.createElement("input");
            inputElement.type = "checkbox";
            inputElement.name = "respuesta";
    
            opcionesElement.appendChild(opcionElement);
            opcionesElement.appendChild(inputElement);
            console.log(opcionElement)
           
        }
    }
    mostrarPregunta(i);
};

main();
