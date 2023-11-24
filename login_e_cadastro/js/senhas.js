
//validação de senhas//
let senha = document.getElementById('input1');
let senhaC = document.getElementById('input2');

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.style =  "border-bottom: 2px solid red"
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    senhaC.style =  "border-bottom: 2px solid green"
    return true;
  }
}

// Verificar também quando o campo for modificado, 
// para que a mensagem suma quando as senhas forem iguais
senhaC.addEventListener('input', validarSenha);

//final validação de senhas//