function recarregarPagina() {
    window.location.reload(true); // Recarrega a página a partir do servidor
}

function carregarConteudo() {
    fetch('conteudo.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('conteudo').innerHTML = data;
        });
}