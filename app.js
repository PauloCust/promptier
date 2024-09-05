function pesquisar () {
    // Função responsável por realizar a pesquisa e exibir os resultados na página

    let section = document.getElementById("resultados-pesquisa");
    // Seleciona a seção onde os resultados da pesquisa serão exibidos, usando o ID "resultados-pesquisa"

    let resultados = "";
    // Cria uma variável vazia para armazenar o HTML que será inserido na página com os resultados

    //para cada dado dentro da lista de dados
    for(let dado of dados) {
        // Loop que percorre a lista de dados (presumivelmente uma lista de objetos) e gera o HTML para cada item

        resultados += `
        <div class="item-resultado">
            <h3>
            <!-- Adiciona o título e o link da plataforma relacionados ao dado -->
            <a href="#" target="_blank">${dado.titulo}<a/>
            <a href=${dado.linkplataforma} target="_blank">${dado.plataforma}</a>
            <!-- Link para a plataforma associado ao dado, com atributo target="_blank" para abrir em nova aba -->
            </h3>

            <!-- Adiciona o autor com um link para o perfil do autor -->
            <p class="user-resultado">
            <a href=${dado.linkautor} target="_blank">${dado.autor}</a></p>

            <!-- Exibe a descrição do dado -->
            <p>${dado.descricao}</p>

            <!-- Link para mais informações sobre o item -->
            <a href=${dado.link} target="_blank">Mais informações</a>
            <div class="botoes-acao">
                <button><img src="imagens/like.png" alt=""></button>
                <button><img src="imagens/dislike.png" alt=""></button>
                <button><img src="imagens/copy.png" alt=""></button>
                <button><img src="imagens/share.png" alt=""></button>
            </div>
        </div>
    `
    // Para cada item no array de "dados", um bloco de resultado é adicionado à variável "resultados"
    }

    section.innerHTML = resultados;
    // Insere o conteúdo HTML gerado (resultados) dentro da seção de resultados na página
}
