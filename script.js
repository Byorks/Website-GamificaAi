
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
    
    // Somar 1 a var slideAtual
    slideAtual++;

    // Mostra slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual]);
}


