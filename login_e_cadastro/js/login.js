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