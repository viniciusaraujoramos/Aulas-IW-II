const ligar = document.getElementById ('ligar')
const desligar = document.getElementById ('desligar')
const ambos = document.getElementById ('ambos')
const reset = document.getElementById ('reset')
const lamp = document.getElementById ('lamp')
const estado = document.getElementById ('estado')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function comoEsta(){
    return lamp.src.indexOf('desligada') > -1 
}

function comoEsta2(){
    return lamp.src.indexOf('ligada') > -1 
}

function acender (){
    if(!estaQuebrada()){
        lamp.src = "img/ligada.jpg"
    }
        if(comoEsta2()){           
            estado.innerHTML = "A lâmpada está LIGADA"   
        }
}

function apagar (){
    if(!estaQuebrada()){
        lamp.src = "img/desligada.jpg"
    }
        if(comoEsta()){
            estado.innerHTML = "A lâmpada está DESLIGADA"
        }
}

function quebrar (){
    lamp.src = "img/quebrada.jpg"
    estado.innerHTML = "A lâmpada está QUEBRADA"
}

function mult (){
    if(comoEsta()){
        acender()
    }
    else{
        apagar()
    }
    
}

function resetar (){
    lamp.src = "img/desligada.jpg"
}

ligar.addEventListener('click',acender)
desligar.addEventListener('click',apagar)

lamp.addEventListener('mouseover',acender)
lamp.addEventListener('mouseleave',apagar)
lamp.addEventListener('dblclick',quebrar)

ambos.addEventListener('click', mult)
reset.addEventListener('click',resetar)
