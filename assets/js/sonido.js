"use strict"

let audioFondo = document.getElementById('audioFondo');
let bSilencio = document.querySelector('#bSilencio');
let imgElementSilencio = document.querySelector('#bSilencio img');
const imgSilencio = "../recourses/icons/icons8-silencio-48.png";
const imgSonido = "../recourses/icons/icons8-boca-abierta-48.png";

function toggleMuted(){
    if(audioFondo.muted){
        //coloccamos el setTimeout por problema de asincronia para ponerlo en cola
        setTimeout(()=>{
            audioFondo.muted = false;
            
        }, 0)
        imgElementSilencio.setAttribute("src", imgSonido )
    }else {
        setTimeout(()=>{
            audioFondo.muted = true;
        }, 0)
        imgElementSilencio.setAttribute("src", imgSilencio )
    }
}

console.log(bSilencio)

bSilencio.addEventListener("click", toggleMuted)
