const telaCarousel = document.getElementById("carousel");
const btnEsquerda = document.querySelector('#btnEsquerda');
const btnDireita = document.querySelector('#btnDireita');

const cores = [
    'var(--azul-300)',
    'var(--rosa)',
    'var(--vermelho-vivo)'
];

/** variável acumuladora de valor */
let indiceAtual = 0;
let temporizador;

function atualizarCarrossel(){
    telaCarousel.style.backgroundColor = cores[indiceAtual];
}

function autoplay(){
    clearInterval(temporizador);
    temporizador = setInterval(()=>{
        indiceAtual++;
        if(indiceAtual >= cores.length){
            indiceAtual = 0;
        }
        atualizarCarrossel();
    }, 3000);
}

btnDireita.addEventListener("click", () => {
    indiceAtual++;
    if(indiceAtual >= cores.length){
        indiceAtual = 0;
    }
    atualizarCarrossel();
    autoplay();
});
btnEsquerda.addEventListener("click", () => {
    indiceAtual--;
    if(indiceAtual < 0){
        indiceAtual = cores.length - 1;
    }
    autoplay();
    atualizarCarrossel();
});
    autoplay();
    atualizarCarrossel();