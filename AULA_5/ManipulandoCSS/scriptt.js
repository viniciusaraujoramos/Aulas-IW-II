var titulo = document.querySelector('h1')
var tela = document.querySelector('body')
var BE = document.querySelector('#E')
var BR = document.querySelector('#R')
var BG = document.querySelector('#G')
var BS = document.querySelector('#S')
var BI = document.querySelector('#I')
var BH = document.querySelector('#H')
var imagem = document.querySelector('#gif')

BE.addEventListener('click', Endo)
BR.addEventListener('click', Ronaldinho)
BG.addEventListener('click', Goenji)
BS.addEventListener('click', Someoca)
BI.addEventListener('click', Intituto)
BH.addEventListener('click', Helio)

function Endo() {
    tela.classList.remove('H1Ronaldinho')
    tela.classList.remove('H1Goenji')
    tela.classList.remove('H1Someoca')
    tela.classList.remove('H1Instituto')
    tela.classList.remove('H1Helio')
    tela.classList.add('H1Endo')
    titulo.classList.remove('Ronaldinho')
    titulo.classList.remove('Goenji')
    titulo.classList.remove('Someoca')
    titulo.classList.remove('Instituto')
    titulo.classList.remove('Helio')
    titulo.classList.add('Endo')
    imagem.setAttribute('src', 'img/Mao.gif')
    imagem.setAttribute('width', '780px')
    NTecnica.textContent = 'Mão demoniaca'
    Personagem.textContent = 'Endo'
    Info.textContent = 'Endo é o protagonista de Inazuma Eleven(anime , mangá e série de jogos sobre futebol). É guarda-redes principal e capitão das equipas em que jogou (Raimon e Inazuma Japão). Em Inazuma Eleven GO ,já com 23 anos, ele é o treinador da equipa de Raimon'

}

function Ronaldinho(){
    tela.classList.add('H1Ronaldinho')
    tela.classList.remove('H1Goenji')
    tela.classList.remove('H1Someoca')
    tela.classList.remove('H1Instituto')
    tela.classList.remove('H1Helio')
    tela.classList.remove('H1Endo')
    titulo.classList.add('Ronaldinho')
    titulo.classList.remove('Goenji')
    titulo.classList.remove('Someoca')
    titulo.classList.remove('Instituto')
    titulo.classList.remove('Helio')
    titulo.classList.remove('Endo')
    imagem.setAttribute('src', 'img/Carnaval.gif')
    imagem.setAttribute('width', '780px')
    NTecnica.textContent = 'Fogos de Carnaval'
    Personagem.textContent = 'Ronaldinho'
    Info.textContent = 'Ronaldinho aparece no ultimo arco da obra, como o principal da seleção brasileira, porém tristemente os brasileiros são caracterizados pessimamente'
}

function Goenji(){
    tela.classList.remove('H1Ronaldinho')
    tela.classList.add('H1Goenji')
    tela.classList.remove('H1Someoca')
    tela.classList.remove('H1Instituto')
    tela.classList.remove('H1Helio')
    tela.classList.remove('H1Endo')
    titulo.classList.remove('Ronaldinho')
    titulo.classList.add('Goenji')
    titulo.classList.remove('Someoca')
    titulo.classList.remove('Instituto')
    titulo.classList.remove('Helio')
    titulo.classList.remove('Endo')
    imagem.setAttribute('src', 'img/FuracaoDeFogo.gif')
    imagem.setAttribute('width', '780px')
    NTecnica.textContent = 'Furacão de Fogo'
    Personagem.textContent = 'Goenji'
    Info.textContent = 'Goenji aparece desde o inicio do anime como o principal atacante da equipe Reymon'
}

function Someoca(){
    tela.classList.remove('H1Ronaldinho')
    tela.classList.remove('H1Goenji')
    tela.classList.add('H1Someoca')
    tela.classList.remove('H1Instituto')
    tela.classList.remove('H1Helio')
    tela.classList.remove('H1Endo')
    titulo.classList.remove('Ronaldinho')
    titulo.classList.remove('Goenji')
    titulo.classList.add('Someoca')
    titulo.classList.remove('Instituto')
    titulo.classList.remove('Helio')
    titulo.classList.remove('Endo')
    imagem.setAttribute('src', 'img/ImpactoDragao.gif')
    imagem.setAttribute('width', '780px')
    NTecnica.textContent = 'Impacto Dragão'
    Personagem.textContent = 'Someoca'
    Info.textContent = 'Someoca tem um dos Chutes mais maecantes, além de ser um personagem muito extrassado é negrao demais'
}

function Intituto(){
    tela.classList.remove('H1Ronaldinho')
    tela.classList.remove('H1Goenji')
    tela.classList.remove('H1Someoca')
    tela.classList.add('H1Instituto')
    tela.classList.remove('H1Helio')
    tela.classList.remove('H1Endo')
    titulo.classList.remove('Ronaldinho')
    titulo.classList.remove('Goenji')
    titulo.classList.remove('Someoca')
    titulo.classList.add('Instituto')
    titulo.classList.remove('Helio')
    titulo.classList.remove('Endo')
    imagem.setAttribute('src', 'img/Pinguins.gif')
    imagem.setAttribute('width', '780px')
    NTecnica.textContent = 'Pinguins Imperiais'
    Personagem.textContent = 'Instituto Imperial'
    Info.textContent = 'O instituto Imperial comandado pelo Kidou Yuuto é o primeiro desafio da escola Raymon, e após serem derrotados Kidou Yuuto entra pra equipe de Endo'
}

function Helio(){
    tela.classList.remove('H1Ronaldinho')
    tela.classList.remove('H1Goenji')
    tela.classList.remove('H1Someoca')
    tela.classList.remove('H1Instituto')
    tela.classList.add('H1Helio')
    tela.classList.remove('H1Endo')
    titulo.classList.remove('Ronaldinho')
    titulo.classList.remove('Goenji')
    titulo.classList.remove('Someoca')
    titulo.classList.remove('Instituto')
    titulo.classList.add('Helio')
    titulo.classList.remove('Endo')
    imagem.setAttribute('src', 'img/RaioRed.gif')
    imagem.setAttribute('width', '780px')
    NTecnica.textContent = 'ChuteX'
    Personagem.textContent = 'Helio'
    Info.textContent = 'Helio é o melhor hibrido do anime, ele é goleiro e atacante'
    Ntecnica.classList.add
}