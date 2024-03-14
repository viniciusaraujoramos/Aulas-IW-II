function calcular(){
    var altura = parseFloat(document.getElementById('altura').value)
    var peso = parseFloat(document.getElementById('peso').value)
    var calcular = peso/(altura*altura)
    resultado.innerHTML = calcular
    diag(calcular)
}

function diag(calcular){
    var sexo = document.getElementById('sexo').value
    if(sexo=='mas'){
        if (calcular <= 20){
            diagnostico.innerHTML = 'Abaixo do peso'
        } 
        else if (calcular > 20 && calcular <= 24){
            diagnostico.innerHTML = 'Normal'
        }
        else if (calcular > 24 && calcular <= 29){
            diagnostico.innerHTML = 'Obesidade leve'
        }
        else if (calcular > 29 && calcular <= 39){
            diagnostico.innerHTML = 'Obesidade moderada'
        }
        else{
            diagnostico.innerHTML = 'Obesidade mórbida'
        }
    }
    else{
        if (calcular <= 19){
            diagnostico.innerHTML = 'Abaixo do peso'
        }
        else if (calcular > 19 && calcular <= 23){
            diagnostico.innerHTML = 'Normal'
        }
        else if (calcular > 23 && calcular <= 28){
            diagnostico.innerHTML = 'Obesidade leve'
        }
        else if (calcular > 28 && calcular <= 38){
            diagnostico.innerHTML = 'Obesidade moderada'
        }
        else{
            diagnostico.innerHTML = 'Obesidade mórbida'
        }
    }
   
}

function limpa(){
    peso.value = " "
    altura.value = " "
    diagnostico.innerHTML = "0"
    resultado.innerHTML = "0"
    sexo.value = "0"
}