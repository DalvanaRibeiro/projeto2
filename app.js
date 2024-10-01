// Função que será executada quando o botão for clicado
function adicionarGiria() {
    // Obtém o valor inserido no campo de texto com o id "giriasInput"
    const giria = document.getElementById("giriasInput").value;
    // Seleciona a div onde os resultados (gírias) serão exibidos
    const resultadoDiv = document.getElementById("resultado");

    // Verifica se o campo de texto não está vazio
    if (giria) {
        // Cria um novo elemento <p> que conterá a gíria adicionada
        const novaGiria = document.createElement("p");
        // Define o conteúdo de texto do <p> como a gíria inserida
        novaGiria.textContent = `Gíria adicionada: ${giria}`;
        // Adiciona o <p> dentro da div de resultados
        resultadoDiv.appendChild(novaGiria);
        // Limpa o campo de texto após a gíria ser adicionada
        document.getElementById("giriasInput").value = '';
    } else {
        // Alerta o usuário caso o campo esteja vazio
        alert("Por favor, insira uma gíria!");
    }
}
