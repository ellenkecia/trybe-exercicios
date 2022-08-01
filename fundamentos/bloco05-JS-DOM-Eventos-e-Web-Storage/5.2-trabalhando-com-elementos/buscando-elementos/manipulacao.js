// 1 Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById ('elementoOndeVoceEsta');

// 2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const acessarPai = elementoOndeVoceEsta.parentElement;
acessarPai.style.color = 'red';

// 3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerHTML= 'primeiroFilhoDoFilho';

// 4 Acesse o primeiroFilho a partir de pai.
const primeiroFilho = acessarPai.firstElementChild;

// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// 6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.


// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// 8 Agora acesse o terceiroFilho a partir de pai.