
var input = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var img = document.querySelector('.senha');
var img2 = document.querySelector('.Confirmarsenha');



img.addEventListener('click', function () {
  if(input.type == 'text'){
    img.setAttribute("src", "img/olho.png");
  }else{
    img.setAttribute("src", "img/olho-ver.png");
  }  
  input.type = input.type == 'text' ? 'password' : 'text';
});


img2.addEventListener('click', function () {
  if(input2.type == 'text'){
    img2.setAttribute("src", "img/olho.png");
  }else{
    img2.setAttribute("src", "img/olho-ver.png");
  }  
  input2.type = input2.type == 'text' ? 'password' : 'text';
});




