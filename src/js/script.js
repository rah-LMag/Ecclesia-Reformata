// Adicione essa função para rolar suavemente para o topo
function scrollToTop() {
    // Define a posição de rolagem para o topo, suportando diferentes navegadores
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Adicione esse evento para mostrar ou ocultar o botão conforme a rolagem
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    // Obtém o botão de rolar para o topo pelo ID
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Verifica a posição de rolagem e exibe ou oculta o botão
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Adiciona uma função para alternar a exibição de uma seção com base no ID da seção
function toggleSection(sectionId) {
    // Obtém o conteúdo da seção pelo ID
    var sectionContent = document.getElementById(sectionId);

    // Verifica se a seção está visível e alterna sua visibilidade
    if (sectionContent.style.display === 'block' || sectionContent.style.display === '') {
        sectionContent.style.display = 'none';
    } else {
        sectionContent.style.display = 'block';
    }
}

// Obtém o botão móvel pelo ID
const btnMobile = document.getElementById('btn-mobile');

// Adiciona um evento para alternar a classe 'active' no elemento de navegação
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

// Adiciona um ouvinte de evento ao botão móvel para acionar a função toggleMenu
btnMobile.addEventListener('click', toggleMenu);



// Adiciona uma função para rolar suavemente para o topo e fechar seções abertas
function scrollToTop() {
    // Obtém todas as seções com a classe 'section-content'
    var sections = document.querySelectorAll('.section-content');

    // Itera sobre as seções e fecha aquelas que estão abertas
    sections.forEach(function(section) {
        if (section.style.display === 'block') {
            section.style.display = 'none';
        }
    });

    // Rola suavemente para o topo
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Função para alternar a visibilidade de uma seção
function toggleSection(sectionId) {
    // Obtém a referência do elemento de conteúdo da seção pelo ID
    var sectionContent = document.getElementById(sectionId);

    // Verifica se a seção está atualmente visível ou oculta
    if (sectionContent.style.display === 'block' || sectionContent.style.display === '') {
        // Se estiver visível ou se não houver estilo definido, oculta a seção
        sectionContent.style.display = 'none';
    } else {
        // Se estiver oculta, torna a seção visível
        sectionContent.style.display = 'block';
    }
}


