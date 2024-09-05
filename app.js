function pesquisarTermo() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Cria uma nova div para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <button onclick="" class="botao-mostrarEstrutura">JavaScript</button>
          <button onclick="" class="botao-mostrarEstrutura">Java</button>
          <button onclick="" class="botao-mostrarEstrutura">Python</button>
          <p>Mais Informações:</p>
          <ul>
            <li><a href=${dado.links[0]} target="_blank">Site 1</a></li>
            <li><a href=${dado.links[1]} target="_blank">Site 2</a></li>
          </ul>
        </div>`;
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }