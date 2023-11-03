"use strict";

const jsonCategoriasURLs = [
    "../JSON/ciencias.json",
    "../JSON/cultura-general.json",
    "../JSON/deportes.json",
    "../JSON/lifeHacks.json",
    "../JSON/movies.json",
    "../JSON/music.json"
];

const obtenerPreguntasAleatorias = async (urls) => {
    const preguntas = [];

    for (const url of urls) {
        const resp = await fetch(url);
        const data = await resp.json();

        if (data.preguntas && data.preguntas.length > 0) {
            const preguntaAleatoria = data.preguntas[Math.floor(Math.random() * data.preguntas.length)];
            preguntas.push(preguntaAleatoria);
        }
    }

    return preguntas;
};

const mostrarPregunta = (pregunta) => {
    const preguntaElement = document.createElement("div");
    preguntaElement.className = "preguntaPreguntas";
    preguntaElement.textContent = pregunta.pregunta;
    document.getElementById("pregunta").appendChild(preguntaElement);

    const opcionesElement = document.createElement("div");
    opcionesElement.className = "botonPregunta";
    document.getElementById("pregunta").appendChild(opcionesElement);

    pregunta.opciones.forEach((opcion, index) => {
        const opcionElement = document.createElement("div");
        opcionElement.className = "opcionPregunta";
        opcionElement.textContent = opcion;

        const inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "preguntas"; 

        opcionesElement.appendChild(opcionElement);
        opcionesElement.appendChild(inputElement);
    });
};

const iniciarQuiz = async () => {
    const preguntas = await obtenerPreguntasAleatorias(jsonCategoriasURLs);
    preguntas.forEach(mostrarPregunta);
};

iniciarQuiz();