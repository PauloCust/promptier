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
            <a href="#" class="mais-info" onclick="mostrarMais(this)">Mais informações</a>

            <!-- Conteúdo oculto que será exibido ao clicar em "Mais informações" -->
            <div class="conteudo-adicional" style="display: none;">
                <p>#Regras</p>
                <p>1 - Pergunte qual problema do usuário?</p>
                <p>2 - Pergunte qual nome do usuário?</p>
                <p>3 - Pergunte qual é o cargo ou função do usuário?</p>
                <p>4 - Pergunte qual área o usuário trabalha?</p>
                <p>5 - Pergunte qual é o tom de voz da resposta?</p>
                <p>6 - Solicite um exemplo de problema real que o usuário enfrentou? Por favor, seja o mais específico possível. Um exemplo real pode ajudar muito.</p>
                <p>7 - Com base nas suas respostas e em pesquisas na internet em sites confiáveis, o Gemini entregará solução personalizada.</p>
                
                <p>#Dicas para Melhorar a Resposta:</p>
                <p>Personalização: Adapte o tom e a linguagem de acordo com o público-alvo.</p>
                <p>Clareza: Use frases curtas e objetivas, evitando termos técnicos.</p>
                <p>Especificidade: As perguntas devem ser direcionadas para coletar informações relevantes, podendo usar até embasamento de pesquisas devidamente referenciadas para responder.</p>
                <p>Empatia: Demonstre interesse pelo problema do usuário.</p>
                <p>Incentivo: Use verbos de ação e frases positivas para motivar o compartilhamento.</p>

                <p>Gostou da solução? Ajude mais pessoas a encontrarem respostas! Compartilhe este chat em suas redes sociais:</p>
                <p>Instagram: @gambiarrartificial</p>
                <p>Tiktok: @gambiarrartificial</p>
                <p>Youtube: @gambiarrational</p>
            </div>

            <div class="botoes-acao">
                <button><img src="like.png" alt=""></button>
                <button><img src="dislike.png" alt=""></button>
                <button><img src="copy.png" alt=""></button>
                <button><img src="share.png" alt=""></button>
            </div>
        </div>
    `
    // Para cada item no array de "dados", um bloco de resultado é adicionado à variável "resultados"
    }

    section.innerHTML = resultados;
    // Insere o conteúdo HTML gerado (resultados) dentro da seção de resultados na página
}

function mostrarMais(element) {
    // Encontra a div de conteúdo adicional mais próxima do link clicado
    let conteudoAdicional = element.nextElementSibling;

    // Alterna entre mostrar e ocultar o conteúdo adicional
    if (conteudoAdicional.style.display === "none" || conteudoAdicional.style.display === "") {
        conteudoAdicional.style.display = "block";  // Mostra o conteúdo
        element.innerText = "Mostrar menos";        // Muda o texto do link
    } else {
        conteudoAdicional.style.display = "none";   // Oculta o conteúdo
        element.innerText = "Mais informações";     // Restaura o texto do link
    }
}

function mostrarMais(element) {
    let conteudoAdicional = element.nextElementSibling;
    let isExpanded = conteudoAdicional.style.display === "block";

    conteudoAdicional.style.display = isExpanded ? "none" : "block";
    element.innerText = isExpanded ? "Mais informações" : "Mostrar menos";
    element.setAttribute("aria-expanded", !isExpanded);
}
