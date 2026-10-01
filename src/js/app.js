const telaCarousel = document.getElementById("carousel");
const btnEsquerda = document.querySelector('#btnEsquerda');
const btnDireita = document.querySelector('#btnDireita');

const imagens = [
    './images/fofuxo.png',
    './images/jansei.png',
    './images/luis.png'
];

/** variável acumuladora de valor */
let indiceAtual = 0;
let temporizador;

function atualizarCarrossel(){
    telaCarousel.src = imagens[indiceAtual];
}

function autoplay(){
    clearInterval(temporizador);
    temporizador = setInterval(()=>{
        indiceAtual++;
        if(indiceAtual >= imagens.length){
            indiceAtual = 0;
        }
        atualizarCarrossel();
    }, 3000);
}

btnDireita.addEventListener("click", () => {
    indiceAtual++;
    if(indiceAtual >= imagens.length){
        indiceAtual = 0;
    }
    atualizarCarrossel();
    autoplay();
});
btnEsquerda.addEventListener("click", () => {
    indiceAtual--;
    if(indiceAtual < 0){
        indiceAtual = imagens.length - 1;
    }
    autoplay();
    atualizarCarrossel();
});
    autoplay();
    atualizarCarrossel();