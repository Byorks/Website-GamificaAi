
let menu =  document.getElementById("menu");
let iconeBarras = document.getElementById("icone-barras");
let iconeX = document.getElementById("icone-x");


function abreFechaMenu(){
    // Menu fechado - tem a classe menu-fechado
    // Menu aberto - não tem a classe menu-fechado

    // Alterna a classe "menu-fechado" no menu
    // menu.classList.toggle()
    
    // Se o menu contem a classe menu-fechado
    if ( menu.classList.contains("menu-fechado") ){
        // Abrir o menu - tirar a classe menu-fechado
        menu.classList.remove("menu-fechado");

        // Mostrar icone barras | inLine é o padrão para mostrar o svg
        iconeBarras.style.display = "none";

        // Esconder o icone do X
        iconeX.style.display = "inLine";

    }
    else {
        // Fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-fechado");

        // Mostrar o icone do X
        iconeX.style.display = "none";

        // Esconder o icone do barras
        iconeBarras.style.display = "inLine";
    }
}

// if (window.innerWidth < 1300) {
//     menu.classList.add("menu-fechado")
    
// }

oneresize = () => {
     // Abrir o menu - tirar a classe menu-fechado
     menu.classList.remove("menu-fechado");

     // Mostrar icone barras | inLine é o padrão para mostrar o svg
     iconeBarras.style.display = "none";

     // Esconder o icone do X
     iconeX.style.display = "inLine";
}

// Carrossel

let banner = document.querySelector(".banner");

// let slide = [0, 1, 2]
// slide [0] => "primeiro-banner"
// slide [1] => "segundo-banner"
// slide [2] => "terceiro-banner"
let slides = [
    "primeiro-banner", 
    "segundo-banner",
    "terceiro-banner"
];

let slideAtual = 0;

banner.classList.add(slides[slideAtual]);

function mostrarProximoSlide() {
    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual]);
    
    if(slideAtual < 2) {
        // Somar 1 a var slideAtual
        slideAtual++;
    }else{
        // Voltar para o primeiro banner
        slideAtual = 0;
    }

    // Mostra slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual]);
}

function mostrarSlideAnterior() {
    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual]);

    if(slideAtual > 0) {
        // Subtrair 1 na variável slideAtual
        slideAtual--;
    }else{
        slideAtual = 2;
    }

    // Mostrar slide de acordo com o slide Atual
    banner.classList.add(slides[slideAtual]);
}

function selecionarSlide(indiceSlide) {
    // Remove o slide atual
    banner.classList.remove(slides[slideAtual]);

    // Atualiza a variavel com o indice de slide selecionado
    slideAtual = indiceSlide;

    // Mostra o slide selecionado a salvo na variavel slideAtual
    banner.classList.add(slides[slideAtual]);
}


// Carregamento dinâmico dos cases
let listaCases = [
    
]


// Código usado para trazer os cards de forma dinamica 
function renderizarCases() {
    // Encontrar o elemento para inserir os cards
    let containerCards = document.querySelector(".container-cards");

    //Variável para guardar o html dos cases montados
    let template = ""

    // Para cada case da listaCases
    listaCases.forEach(cardCases => {
        // Montar o hmtl do card, passando os atriubutos do case
        template += ` <div class="cards">
        <img src=${ cardCases.imagem } alt="">
        <p>${ cardCases.descricao }</p>
        <button>Ver mais</button>
    </div>`

    })


    // Inserir hmtl dos cases montados no elemento cantainer cards
    containerCards.innerHTML = template;
}   