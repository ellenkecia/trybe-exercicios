// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function alterarTexto (){
    let paragrafo = document.getElementsByTagName('p')[0].innerHTML = "Daqui dois anos estarei trabalhando na area de tecnologia e fazendo uma pós na area de atuação";
}
alterarTexto();
// Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function quadradoAmarelo(){
    let quadradoVerde = document.getElementsByClassName('main-content')[0].style.background = 'rgb(76,164,109)';
}
quadradoAmarelo();
// Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function quadradoVermelho(){
    let quadradoBranco = document.getElementsByClassName('center-content')[0].style.background = 'rgb(255,255,255)';
}
quadradoVermelho();
// Crie e execute uma função que corrija o texto da tag <h1>.
function correcaoTag (){
    let correcaoTexto = document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';
}
correcaoTag();
// Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
function modificarTagMaiusculo (){
    let textModificado = document.getElementsByTagName('p')[0].innerHTML = document.getElementsByTagName('p')[0].textContent.toUpperCase();
}
modificarTagMaiusculo();
// Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function textAll (){
    let paragrafosAll = document.getElementsByTagName ('p');
    for ( let index = 0; index < paragrafosAll.length; index += 1){
        console.log (parafrafosAll[index].innerHTML);
    }
}
textAll();
// */s