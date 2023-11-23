const pacotes = {
  "RJ": [
    {
      name: 'Copacabana',
      img: 'img_teste/copacabana.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Paraty',
      img: 'img_teste/paraty.jfif',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Ipanema',
      img: 'img_teste/ipanema.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    }
  ],
  "SP": [
    {
      name: 'São Paulo',
      img: 'img_teste/são_paulo.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'São Sebastião',
      img: 'img_teste/são_sebastião.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Socorro',
      img: 'img_teste/socorro.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    }
  ],
  "PR": [
    {
      name: 'Foz do Iguaçu',
      img: 'img_teste/foz_do_iguaçu.webp',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Curitiba',
      img: 'img_teste/curitiba.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Ilha do Mel',
      img: 'img_teste/ilha_do_mel.webp',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    }
  ],
  "BA": [
    {
      name: 'Salvador',
      img: 'img_teste/salvador.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Barra. Salvador',
      img: 'img_teste/barra.webp',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Porto Seguro',
      img: 'img_teste/porto_seguro.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    }
  ],
  "PE": [
    {
      name: 'Porto de Galinhas',
      img: 'img_teste/porto_galinha.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Boa Viagem',
      img: 'img_teste/boa_viagem.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Fernando de Noronha',
      img: 'img_teste/noronha.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    }
  ],
  "RS": [
    {
      name: 'Gramado',
      img: 'img_teste/gramado.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Bento Gonçalves',
      img: 'img_teste/bento_gonçalves.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    },
    {
      name: 'Porto Alegre',
      img: 'img_teste/porto_alegre.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit "
    }
  ]
};

// percorrer o objeto de pacotes
// para cada pacote, criar uma div com a classe "pacote"
function buscarPacotes(destino) {
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

function buscarPacotesIda(destino2) {
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

