const pacotes = {
    "RJ": [
        {
          name: 'Copacabana',
          img: 'img_teste/lugar1.jpg',
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "  
        },
        {
            name: 'Copacabana',
            img: 'img_teste/lugar1.jpg',
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "  
        },
        {
            name: 'Copacabana',
            img: 'img_teste/lugar1.jpg',
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "  
        }
    ],
    "SP": [
        {
          name: 'Avenida Paulista',
          img: 'img_teste/lugar2.jpg',
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "  
        },
        {
            name: 'Avenida Paulista',
            img: 'img_teste/lugar2.jpg',
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "  
        },
        {
            name: 'Avenida Paulista',
            img: 'img_teste/lugar2.jpg',
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "  
        }
    ],
    "PR": [
        {
          name: 'Foz do Iguaçu',
          img: 'img_teste/lugar3.jpg',
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "  
        },
        {
          name: 'Foz do Iguaçu',
          img: 'img_teste/lugar3.jpg',
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "  
        },
        {
          name: 'Foz do Iguaçu',
          img: 'img_teste/lugar3.jpg',
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "  
        }
    ]  
    };

// percorrer o objeto de pacotes
// para cada pacote, criar uma div com a classe "pacote"
 function buscarPacotes(destino){ 
    console.log(destino)
    const pacotesV = pacotes[destino]
    console.log(pacotesV)
    //limpar pacotes do local storage
    localStorage.removeItem('pacotes')
    //salvar no local storage os pacotes
    localStorage.setItem('pacotes', JSON.stringify(pacotesV))
    //ir para outra pagina
    window.location.href = "estrutura_busca/busca.html"
 }

 function buscarPacotesIda(destino2){ 
  console.log(destino2)
  const pacotesV = pacotes[destino2]
  console.log(pacotesV)
  //limpar pacotes do local storage
  localStorage.removeItem('pacotes')
  //salvar no local storage os pacotes
  localStorage.setItem('pacotes', JSON.stringify(pacotesV))
  //ir para outra pagina
  window.location.href = "estrutura_busca/busca.html"
}

