function exercicio1 (){
    var nome1 = prompt('Digite seu nome: ')
    alert('Olá '+nome1+'! Prazer em conhecer!')
}

function exercicio2 (){
    var nome2 = prompt('Digite seu nome: ')
    exe2.innerHTML = 'Olá '+nome2+'! Prazer em conhecer!'
}

function b1 (){
    exe3.innerHTML = 'Você clicou no botão 1'
}

function b2 (){
    exe3.innerHTML = 'Você clicou no botão 2'
}

function b3 (){
    exe3.innerHTML = 'Você clicou no botão 3'
}

function c1 (){
    document.getElementById('exer4').style.color = "rgb(255,0,0)"
    exe4.innerHTML = 'Você clicou no botão 1'
}

function c2 (){
    document.getElementById('exer4').style.color = "rgb(0,0,255)"
    exe4.innerHTML = 'Você clicou no botão 2'
}

function c3 (){
    document.getElementById('exer4').style.color = "rgb(0,255,0)"
    exe4.innerHTML = 'Você clicou no botão 3'
}

function exercicio5 (){
    var produto = prompt('Digite o nome do produto: ')
    var valor = prompt('Digite o valor do produto R$: ')
    exe5.innerHTML = 'Você ira comprar um '+produto+' por R$ '+valor
}

function exercicio6 (){
    var produto = prompt('Digite o nome do produto: ')
    var valor = prompt('Digite o valor do produto R$: ')
    var valorP = prompt('Digite o valor recebido R$: ')

    if (valorP<valor){
        Info3.innerHTML ='Valor insuficiênte'
    }

    else{
        var troco = valorP-valor
    }

    info1.innerHTML = 'Você ira comprar um: '+produto
    info2.innerHTML = 'Que custa: '+valor
    info3.innerHTML = 'Troco: '+troco
}

function exercicio7 (){
    var salario = parseInt (prompt('Digite o seu salario: ')) 
    var por = parseInt (prompt('Digite a porcentagem do aumento: '))
    var aumento = (salario*por)/100
    var salarioF = salario+aumento

    sald.innerHTML = 'Seu salario é de : '+salario
    porc.innerHTML = 'Seu aumento em porcentagem foi de: '+por+'% e em dinheiro é '+aumento
    final.innerHTML = 'Seu salario final é de: '+salarioF
}

function exercicio8 (){
    var a = parseInt (prompt('Digite o valor de a: '))
    var b = parseInt (prompt('Digite o valor de b: '))
    var c = parseInt (prompt('Digite o valor de c: '))

    var delta = (b*b)-4*a*c

    equacao.innerHTML = 'A equação atual é '+a+'x²+'+b+'x+'+c+'=0'
    calculo.innerHTML = 'O cálculo realizado será Δ ='+b+'²-4.'+a+'.'+c
    resultado.innerHTML = 'O valor calculado foi Δ='+delta
    console.log = calculo
}