// tres constantes para referenciar as ITEM nas Divs Projetos
const Formulario = document.getElementById('Formulario');
const Site = document.getElementById('Site');
const MeuPortfolio = document.getElementById('MeuPortfolio');

const videoFormulario = document.querySelector('.videoFormulario');
const videoSite = document.querySelector('.videoSite');
const videoMeuPortfolio = document.querySelector('.videoMeuPortfolio');

// evento de click
Formulario.addEventListener('click', () =>{
    Formulario.classList.toggle('active');
    videoFormulario.classList.toggle('active');
});

Site.addEventListener('click', () =>{
    Site.classList.toggle('active');
    videoSite.classList.toggle('active');
});

MeuPortfolio.addEventListener('click', () =>{
    MeuPortfolio.classList.toggle('active');
    videoMeuPortfolio.classList.toggle('active');
});