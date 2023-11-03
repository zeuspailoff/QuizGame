const form = document.forms.usuario

const resolveURL = (e) => {
    e.preventDefault()
    let userResponse = form.userName.value.toString()
    console.log(userResponse);
    let baseURL = window.location.protocol + "//" + window.location.host + "/assets/templates/preguntas.html?name=" + userResponse ;
    window.location.href = baseURL 
    // console.log(baseURL);
}


form.addEventListener('submit', resolveURL)
