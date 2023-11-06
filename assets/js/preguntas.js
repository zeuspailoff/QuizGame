const url = new URL(window.location.href);
const params = url.searchParams;
const userName = params.get("name");

const resolveURL = (e) => {
  e.preventDefault()
  let usuario = nombre.value
  let baseURL = window.location.protocol + "//" + window.location.host;
  // window.location.href = `${baseURL}/assets/templates/preguntas.html?name_${usuario}` 
  console.log(`${baseURL}/assets/templates/preguntas.html?name_${usuario}`);
}

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
// recorremos los json para elegir las preguntas
const randomQuestionEachJSON = async (urls) => {
  const finalQuestions = []

  for (const url of urls) {
    const response = await fetch(url)
    const data = await response.json()
    const preguntas = data.preguntas

    if (preguntas) {
      const ramdomI = Math.floor(Math.random() * preguntas.length)
      const question = preguntas[ramdomI]
      //creamos el objeto para trabajar con el 
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
//empezamos a crear las preguntas
const renderQuestion = (obj, index) => {
  const element = obj[index]
  const quest = document.querySelector('.preguntaPreguntas')
  quest.textContent = ''
  quest.textContent = element.question

  const header = document.getElementById('pregunta')
  header.appendChild(quest)
// creamos los contenedores para introducir los datos
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
    inputRadio.className = 'choose'
    inputRadio.name = 'user_answer'
    inputRadio.value = opcion
    inputRadio.id = opcion

    correctAnswer = questions[numPregunta].correct_answer
    opciones.appendChild(label)
    opciones.appendChild(inputRadio)
  })
}
//creamos la base para poder iniciar el juego y tener los datos necesarios para verificar respuestas 
const iniciarQuiz = async () => {
  questions = await randomQuestionEachJSON(jsonCategoriasURLs)
  /* console.log(questions[numPregunta])
  console.log(questions[numPregunta].correct_answer) */
  
  if (questions) {
    renderQuestion(questions, numPregunta)
    
  } else {
    console.log('No se encontraron preguntas.')
  }
}
iniciarQuiz()
console.log(`la respuesta correcta es ${correctAnswer}`)

// verificamos las respuestas del usuario
const checkAnswer = (e) => {
  e.preventDefault()
  const userAnswer = form.elements.user_answer.value
  const chooses = document.querySelectorAll('.choose')
  const score = document.querySelector('.score')
  const err = document.querySelector('.error')
  //creamos el flag para ayudarnos a saber la respuesta 
  let flag = 0;
  if(userAnswer.length === 0){
    // evitamos respuesta vacia 
    //añadimos una clase error

    err.innerHTML = 'Tiene que seleccionar una respuesta'

    return false
  }else if(correctAnswer === userAnswer){
    correctas++
    err.innerHTML = "";
    score.innerHTML = `Respuestas Correctas: ${correctas}`
    flag = 1;  
    }
    else {
      err.innerHTML = "";
      flag = 2;
    }
//damos tiempo a ver si fallaste o acertaste 
    setTimeout(() => {
      divShow.textContent = ''
      renderQuestion(questions, numPregunta)
      console.log(`la respuesta correcta es ${correctAnswer}`)
    }, 2000)
// usamos el flag para comprobar que clase añadir si la que pone color verde o rojo
    chooses.forEach(element => {
      if (element.value === userAnswer) {
        if (flag === 1) {
          element.parentNode.classList.add('correct')
        }else{
          element.parentNode.classList.add('fail')
        }
      }
    });
    
    numPregunta++
    finalGame()
}
// si terminamos con el array de preguntas se acaba el juego y mosatramos el mensaje 
const finalGame = () => {
  if(numPregunta === 6){

    const buttonE = document.querySelector('.boton-enviar-respuestas')
    const start = document.querySelector('.Form-bajo')
    const linkStart = document.createElement('a');
    linkStart.href = '/index.html'
    linkStart.textContent = '¿Otra Partida?'

    const reStart = document.createElement('button')
    reStart.className = 'boton-enviar-respuestas'
    reStart.appendChild(linkStart)

    const questionsContainer = document.querySelector('.contenedorPreguntas')
    const finalText = document.createElement('h2')
    finalText.className = 'textoFinal'
    finalText.textContent = `${userName} has conseguido ${correctas} de 6 preguntas`
    questionsContainer.textContent = ''
    divShow.textContent = ''
    buttonE.remove()
    start.appendChild(reStart)
    questionsContainer.appendChild(finalText)

  }
}




form.addEventListener('submit', checkAnswer)


