function calcular(){
    var altura = parseFloat(document.getElementById('altura').value)
    var peso = parseFloat(document.getElementById('peso').value)
    var imc = peso/(altura*altura)

    resultado.innerHTML = imc
}