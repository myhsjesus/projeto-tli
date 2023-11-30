
//visualização de senha //
var input = document.querySelector('#input input');
var img = document.querySelector('#input img');
img.addEventListener('click', function () {
  if(input.type == 'text'){
    img.setAttribute("src", "img/olho.png");
  }else{
    img.setAttribute("src", "img/olho-ver.png");
  }  
  input.type = input.type == 'text' ? 'password' : 'text';
});
//final da visualização de senha//

//botões de contraste//
function Start() {
  var menu = document.getElementById('botoes');
  if (menu.style.display === "none"){
  menu.style.display = "flex";
  }else {
      menu.style.display = "none";
  }
} 


var bodyElement = document.body;

 function toggleContrast(){
    bodyElement.classList.toggle("high-contrast")
};

function toggleReading(){
    bodyElement.classList.toggle("reading-mode")
};

function toggleFont(){
    bodyElement.classList.toggle("font-size")
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//final de botões de contraste//

//validar senha//

function login() {
  const usuario = document.querySelector('#usuario').value;
  const senha = document.getElementById('senha').value;
  const dica = document.querySelector('.dica')

  // Simples verificação de login (apenas para exemplo)
  if (usuario === 'teste' && senha === '2023') {
      console.log("ok") 
      location. href="home.html"
  } else {
      console.log("erro")
      dica.style.display = "flex"
  }
}