document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
});

document.getElementById('home-button').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';  // Troque 'index.html' pelo caminho correto do seu arquivo
});

// Redirecionar para outras páginas ao clicar nos botões
document.getElementById('pending-projects').addEventListener('click', function() {
    window.location.href = 'projetos-pendentes.html';  // Troque pelo caminho correto do seu arquivo
});

document.getElementById('accepted-projects').addEventListener('click', function() {
    window.location.href = 'https://da6zin.github.io/Empresa-VisualizarAndamento/';  // Troque pelo caminho correto do seu arquivo
});