let audioFondo = document.getElementById('audioFondo');
let bSilencio = document.getElementById('Bsilencio');
const imgSilencio = '<img src="../recourses/icons/icons8-silencio-48.png"alt="emoji boca tapada">';
const imgSonido = ' <img src="../recourses/icons/icons8-boca-abierta-48.png" alt="emoji boca abierta ">'

function toggleMuted(){
    if(audioFondo.muted){
        audioFondo.muted = false;

        bSilencio.innerHTML = imgSilencio;
    }else {
        audioFondo.muted = true;
        bSilencio.innerHTML = imgSonido;
    }
}
