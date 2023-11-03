'use strict'

const jsonCategoriasURLs = [
  '../JSON/ciencias.json',
  '../JSON/cultura-general.json',
  '../JSON/deportes.json',
  '../JSON/lifeHacks.json',
  '../JSON/movies.json',
  '../JSON/music.json'
]

let numPregunta = 0
let correctas = 0
const divShow = document.querySelector('.show')
const form = document.forms.respuesta
let correctAnswer = ''
let questions = ''

const randomQuestionEachJSON = async (urls) => {
  const finalQuestions = []

  for (const url of urls) {
    const response = await fetch(url)
    const data = await response.json()
    const preguntas = data.preguntas

    if (preguntas) {
      const ramdomI = Math.floor(Math.random() * preguntas.length)
      const question = preguntas[ramdomI]
      finalQuestions.push({
        question: question.pregunta,
        options: question.opciones,
        correct_answer: question.respuesta_correcta
      })
    }
  }

  return finalQuestions
}

randomQuestionEachJSON(jsonCategoriasURLs)

const renderQuestion = (obj, index) => {
  const element = obj[index]
  const quest = document.querySelector('.preguntaPreguntas')
  quest.textContent = ''
  quest.textContent = element.question

  const header = document.getElementById('pregunta')
  header.appendChild(quest)

  element.options.forEach((opcion, key) => {
    const opciones = document.createElement('div')
    opciones.className = 'botonPregunta'
    opciones.id = key
    divShow.appendChild(opciones)

    const label = document.createElement('label')
    label.className = 'opcionPregunta'
    label.for = opcion
    label.textContent = opcion

    const inputRadio = document.createElement('input')
    inputRadio.type = 'radio'
    inputRadio.name = 'user_answer'
    inputRadio.value = opcion
    inputRadio.id = opcion

    opciones.appendChild(label)
    opciones.appendChild(inputRadio)
  })
}

const iniciarQuiz = async () => {
  questions = await randomQuestionEachJSON(jsonCategoriasURLs)
  console.log(questions[numPregunta])
  console.log(questions[numPregunta].correct_answer)
  correctAnswer = questions[numPregunta].correct_answer
  if (questions) {
    renderQuestion(questions, numPregunta)
  } else {
    console.log('No se encontraron preguntas.')
  }
}
iniciarQuiz()
console.log(`la respuesta correcta es ${correctAnswer}`)

const checkAnswer = (e) => {
  e.preventDefault()
  const userAnswer = form.elements.user_answer.value
  console.log(form.elements.user_answer.parentNode)
  if(correctAnswer === userAnswer){
    correctas++
    form.elements.user_answer.classList.add('correct')
  }else{
    form.elements.user_answer.classList.add('fails')
  }
  // numPregunta++
  // divShow.textContent = ''
  // console.log(divShow);
  // renderQuestion(questions, numPregunta)
}

form.addEventListener('submit', checkAnswer)
