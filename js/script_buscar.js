const pacotes = {
  "RJ": [
    {
      name: 'Copacabana',
      img: 'img_teste/copacabana.jpg',
      text: "A cidade maravilhosa também é uma cidade inclusiva! Aproveite a beleza deste destino com quem você ama! "
    },
    {
      name: 'Paraty',
      img: 'img_teste/paraty.jfif',
      text: "Um lugar de belas paisagens, verdadeiro paraíso na Terra. Suas férias merecem Paraty! "
    },
    {
      name: 'Ipanema',
      img: 'img_teste/ipanema.jpg',
      text: '"Olha que coisa que coisa mais linda, mais cheia de graça" Tom Jobim não errou ao escrever esta frase, até porque, além de linda, Ipanema ainda é inclusiva!'
    }
  ],
  "SP": [
    {
      name: 'São Paulo',
      img: 'img_teste/são_paulo.jpg',
      text: 'A cidade conhecida como "Selva de pedras" ou ainda "A cidade que nunca dorme" também é exemplo de inclusão '
    },
    {
      name: 'São Sebastião',
      img: 'img_teste/sao_sebastiao.jpg',
      text: "O litoral paulista pode ser uma boa pedida! Uma cidade paradisíaca e, acima de tudo, inclusiva! "
    },
    {
      name: 'Socorro',
      img: 'img_teste/socorro.jpg',
      text: "Destino dos amantes de adrenalina, Socorro é uma boa opção para se aventurar independente de suas restrições "
    }
  ],
  "PR": [
    {
      name: 'Foz do Iguaçu',
      img: 'img_teste/foz_do_iguaçu.webp',
      text: "Desfrute o mix de sensações que somente as cataratas podem lhe causar! "
    },
    {
      name: 'Curitiba',
      img: 'img_teste/curitiba.jpg',
      text: "A capital sustentável é uma boa opção parao seu lazer, aproveite o melhor que curitiba pode oferecer!  "
    },
    {
      name: 'Ilha do Mel',
      img: 'img_teste/ilha_do_mel.webp',
      text: "Local de belas praias, a Ilha do Mel é o destino perfeito para a sua viagem! "
    }
  ],
  "BA": [
    {
      name: 'Salvador',
      img: 'img_teste/salvador.jpg',
      text: "Terra boa, com muito calor humano e um tempero únco, a captal baiana é uma ótima opção para as suas férias "
    },
    {
      name: 'Barra. Salvador',
      img: 'img_teste/barra.webp',
      text: "Ah, a Barra... Que destino maravilhoso para turistar, principalmente se for acompanhado por quem ama! "
    },
    {
      name: 'Porto Seguro',
      img: 'img_teste/porto_seguro.jpg',
      text: "Porto Seguro é o lugar perfeito para quem busca sol, mar e diversão. Possui diversas opções de lazer para tornar a sua viagem inesquecível! "
    }
  ],
  "PE": [
    {
      name: 'Porto de Galinhas',
      img: 'img_teste/porto_galinha.jpg',
      text: "Lugar tão bonito que nem dá vontade de voltar para casa! Desfrute as belezas de Porto durantes as suas férias! "
    },
    {
      name: 'Boa Viagem',
      img: 'img_teste/boa_viagem.jpg',
      text: '"Lembro da moça bonita da praia de Boa Viagem..." É realmente impossível esquecer este lugar apaixonante!'
    },
    {
      name: 'Fernando de Noronha',
      img: 'img_teste/noronha.jpg',
      text: "É inevitável não se apaixonar por este paraíso tropical, Noronhe-se! Suas férias merecem! "
    }
  ],
  "RS": [
    {
      name: 'Gramado',
      img: 'img_teste/gramado.jpg',
      text: "Sonho doa amantes de frio, Gramado é um destino muito bom para quem quer conhecer o clima europeu sem sair do Brasil "
    },
    {
      name: 'Bento Gonçalves',
      img: 'img_teste/bento_gonçalves.jpg',
      text: "Aproveite as belezas da Serra Gaúcha! Bento Gonçalves é uma boa opção para os amantes de um bom vinho. "
    },
    {
      name: 'Porto Alegre',
      img: 'img_teste/porto_alegre.jpg',
      text: "Venha se maravilhar com as belezas de Porto Alegre , onde cada esquina guarda  uma surpresa especial."
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

