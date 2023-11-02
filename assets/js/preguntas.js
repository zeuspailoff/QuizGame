"use strict";
// Seleciono con DOM la section donde crear la pregunta (<section id="pregunta"></section>)


const tituloPregunta = document.querySelector("#pregunta")
const jsonCategoriasURLs = [  
    "../JSON/ciencias.json", 
    "../JSON/cultura-general.json", 
    "../JSON/deportes.json",
    "../JSON/lifeHacks.json",
    "../JSON/movies.json",
    "../JSON/music.json"];
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
        for (let pregunta of quiz) {
            pregunta = document.createElement("div .preguntaPreguntas");
            preguntaElement.innerHTML = pregunta.tituloPregunta;

            document.getElementById("Pregunta").append(preguntaElement)
            
        }
    };
    
    main();

