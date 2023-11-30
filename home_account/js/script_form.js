//funções para startar o formulário de ida e volta
function startFormIdaEVolta() {
    var menu = document.getElementById('form_ida_volta');
    var menu2 = document.getElementById('form_so_ida');
    let seta2 = document.querySelector('#setaIdaeVoltaCima');
    let seta = document.querySelector('#setaIdaeVoltaBaixo');
    if (menu.style.display === "none"){
    menu.style.display = "inline-block";
    seta2.style.display = "inline-block";
    seta.style.display = "none";
    }else {
        menu.style.display = "none";
        seta2.style.display = "none";
        seta.style.display = "inline-block";
    }
    if(menu2.style.display === "inline-block"){
        menu.style.display = "none";
        seta2.style.display = "none";
        seta.style.display = "inline-block";
    }
} 
//funções para startar o formulário de ida
function startFormIda() {
    var menu = document.getElementById('form_so_ida');
    var menu2 = document.getElementById('form_ida_volta');
    let seta2 = document.querySelector('#setaIdaCima');
    let seta = document.querySelector('#setaIdaBaixo');

    if (menu.style.display === "none"){
    menu.style.display = "inline-block";
    seta2.style.display = "inline-block";
    seta.style.display = "none";
    }else {
        menu.style.display = "none";
        seta2.style.display = "none";
        seta.style.display = "inline-block";
    }
    if(menu2.style.display === "inline-block"){
        menu.style.display = "none";
        seta2.style.display = "none";
        seta.style.display = "inline-block";
    }
} 

