alert("Hello World");

let menu =  document.getElementById("menu");
let iconeBarras = document.getElementById("icone-barras");
let iconeX = document.getElementById("icone-x");

function abreFechaMenu(){
    console.log("Funcionou!")

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


