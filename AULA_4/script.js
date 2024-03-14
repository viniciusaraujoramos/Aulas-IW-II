function calcular(){
    var altura = parseFloat(document.getElementById('altura').value)
    var peso = parseFloat(document.getElementById('peso').value)
    var imc = peso/(altura*altura)

    resultado.innerHTML = imc
    diag(calcular)
}

function diag(calcular){
    var sexo = document.getElementById('sexo').value
    if(sexo=='mas'){
        if (imc < 20){
            diagnostico.innerHTML = "Abaixo do peso"
        }
        else if (19 > imc && imc < 24){
            diagnostico.innerHTML = "Normal"
        }
        else if (25 > imc && imc < 29){
            diagnostico.innerHTML = "Obesidade leve"
        }
        else if (30 > imc && imc < 39){
            diagnostico.innerHTML = "Obesidade moderada"
        }
        else{
            diagnostico.innerHTML = "Obesidade mórbida"
        }
    }
    else if(sexo=='fem'){
        if (imc < 19){
            diagnostico.innerHTML = "Abaixo do peso"
        }
        else if (19 > imc && imc < 23){
            diagnostico.innerHTML = "Normal"
        }
        else if (24 > imc && imc < 28){
            diagnostico.innerHTML = "Obesidade leve"
        }
        else if (29 > imc && imc< 38){
            diagnostico.innerHTML = "Obesidade moderada"
        }
        else{
            diagnostico.innerHTML = "Obesidade mórbida"
        }
    }
    else{
        diagnostico.innerHTML = 'Erro de dados'
    }
    
}