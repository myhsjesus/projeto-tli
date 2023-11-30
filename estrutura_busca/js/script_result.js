//funcao quando carregar a pagina
document.addEventListener('DOMContentLoaded', () => {

    function criarPacote(){
    //buscar no local storage os pacotes
    const pacotesV = JSON.parse(localStorage.getItem('pacotes'))
    const pacotesDiv = document.getElementById('resultado')
    //percorrer o array de pacotes
    pacotesV.forEach(pacote => {
        //criar uma div com a classe "pacote"
        const pacoteDiv = createPacote(pacote)
        //adicionar a div de pacote no resultado
        pacotesDiv.appendChild(pacoteDiv)
    });
}


//Função criar o layout da Busca
function createPacote(pacote){
    const pacoteDiv = document.createElement('div')
    pacoteDiv.classList.add('card-container')
    pacoteDiv.innerHTML = `
    <div class="card">
    <div class="pacote-img">
        <img src="${pacote.img}" alt="">
    </div>
        <h2 class="card-title">${pacote.name}</h2>
        <p>${pacote.text}</p>
        <button class="card-button">Compre Aqui</button>
    </div>
    `
    return pacoteDiv
 }

 criarPacote()
})
