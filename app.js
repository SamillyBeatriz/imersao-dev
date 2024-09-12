function pesquisarTermo() {
  //seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  //seleciona o valor digitado no campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //seleciona os botões das linguagens
  const botoesEstrutura = document.querySelectorAll('.botao-mostrarEstrutura');
  
  //transforma entrada de texto em texto com letras minusculas
  campoPesquisa = campoPesquisa.toLowerCase();

  //impede o click no botão pesquisar sem nenhum termo
  if (campoPesquisa === "") {
    return
  }
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultadosTermos = "";

  //variaveis para manusear titulo e descrição de dados.js
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {

    //transforma o titulo de dado em letras minusculas
    titulo = dado.titulo.toLocaleLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
    //verifica se o termo digitado está na base de dados
    if (dado.titulo.includes(campoPesquisa)) {
      // Cria uma nova div para cada resultado
      resultadosTermos += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <button  class="botao-mostrarEstrutura" id="JavaScript">JavaScript</button>
          
          <button class="botao-mostrarEstrutura" id="Java">Java</button>
          
          <button class="botao-mostrarEstrutura" id="Python">Python</button>
          <div id="exibicaoEstrutura"></div>
          <p>Mais Informações:</p>
          <ul>
            <li><a href=${dado.links[0]} target="_blank">Site 1</a></li>
            <li><a href=${dado.links[1]} target="_blank">Site 2</a></li>
          </ul>
        </div>`;
    }
  }

  //se não encontrar o termo na base de dados
  if (!resultadosTermos) {
    resultadosTermos = "Nada Encontrado. Digite um termo!"
  }

  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = resultadosTermos;

  //adiciona o evento de mostrar estrutura nos botões das linguagens
  botoesEstrutura.forEach(botao => {
    botao.addEventListener('click', function () {
      const linguagem = this.id;//pega a linguagem do botao
      // Encontrar o objeto do termo pesquisado
      const termoPesquisado = dados.find(dado => dado.titulo === campoPesquisa);

      if (termoPesquisado) {//se encontrou o termo
        mostrarEstrutura(linguagem, termoPesquisado);//mostra a estrutura atraves da função
      } else {
        console.error("Termo não encontrado.");
      }

    });
  });
}

function mostrarEstrutura(linguagem, termoPesquisado) {

  // obtem o id do paragrafo onde sera exibido a estrutura
  const paragrafoEstrutura = document.getElementById('exibicaoEstrutura');

  // Cria um objeto para mapear linguagens para índices numéricos
  const indicesLinguagens = {
    'JavaScript': 0,
    'Java': 1,
    'Python': 2
  };

  // Obtém o índice da linguagem correspondente no objeto de índices
  const indiceLinguagem = indicesLinguagens[linguagem];

  // Acessa a estrutura específica da linguagem dentro do objeto termoPesquisado
  const estruturaEncontrada = termoPesquisado.estrutura[indiceLinguagem];

  // Atualiza o conteúdo do parágrafo com a estrutura encontrada
  paragrafoEstrutura.textContent = `${estruturaEncontrada}`;
}


