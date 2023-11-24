//Função do mini menu acessibilidade
function Start() {
    var menu = document.getElementById('botoes');
    if (menu.style.display === "none"){
    menu.style.display = "flex";
    }else {
        menu.style.display = "none";
    }
} 

//Função topo
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}