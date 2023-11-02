"use strict";
// Seleciono con DOM la section donde crear la pregunta (<section id="pregunta"></section>)
const jsonCategoriasURLs = [
  "../JSON/ciencias.json",
  "../JSON/cultura-general.json",
  "../JSON/deportes.json",
  "../JSON/lifeHacks.json",
  "../JSON/movies.json",
  "../JSON/music.json",
];
const main = async () => {
  const quiz = [];
  let puntos = 0;
  for (let categoriaURL of jsonCategoriasURLs) {
    const resp = await fetch(categoriaURL);
    const preguntas = await resp.json();
    let indice = Math.floor(Math.random() * preguntas.length);
    quiz.push(preguntas[indice]);
    console.log(preguntas, quiz.push(preguntas[indice]));
    // genero num random entre 0 y preguntas.length-1
    // añado la pregunta random preguntas[numRandom] a quiz (quiz.push)   preguntaElement.innerHTML("");
    // creo la pregunta y respuestas con DOM }};
  }
};
main();
