const ligar = document.getElementById ('ligar')
const desligar = document.getElementById ('desligar')
const lamp = document.getElementById ('lamp')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function acender (){
    if(!estaQuebrada()){
        lamp.src = "img/ligada.jpg"
    }
}

function apagar (){
    if(!estaQuebrada()){
        lamp.src = "img/desligada.jpg"
    }
}

function quebrar (){
    lamp.src = "img/quebrada.jpg"
}

ligar.addEventListener('click',acender)
desligar.addEventListener('click',apagar)

lamp.addEventListener('mouseover',acender)
lamp.addEventListener('mouseleave',apagar)
lamp.addEventListener('dblclick',quebrar)