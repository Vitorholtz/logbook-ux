// manual slider btns

let manualSliderBtn1 = document.querySelector('.auto-btn1');
let manualSliderBtn2 = document.querySelector('.auto-btn2');
let manualSliderBtn3 = document.querySelector('.auto-btn3');
let manualSliderBtn4 = document.querySelector('.auto-btn4');
let manualSliderBtn5 = document.querySelector('.auto-btn5');

manualSliderBtn1.addEventListener ('click', () => {

    document.querySelector('#radio1').checked = true;
})

manualSliderBtn2.addEventListener ('click', () => {

    document.querySelector('#radio2').checked = true;
})

manualSliderBtn3.addEventListener ('click', () => {

    document.querySelector('#radio3').checked = true;
})

manualSliderBtn4.addEventListener ('click', () => {

    document.querySelector('#radio4').checked = true;
})

manualSliderBtn5.addEventListener ('click', () => {

    document.querySelector('#radio5').checked = true;
})

// DT toggles

// Empatia

let empathyBtn = document.querySelector('.empathy-toggle');
let pesquisaSection = document.querySelector('.pesquisa');
let iconDown1 = document.querySelector('.fas1');

empathyBtn.addEventListener ('click', () => {

    pesquisaSection.classList.toggle('pesquisa-active');
    iconDown1.classList.toggle('fas-active');
    
})

// Entrevistas

let entrevistasBtn = document.querySelector('.interviews-toggle');
let entrevistasSection = document.querySelector('.entrevistas');
let iconDown2 = document.querySelector('.fas2');

entrevistasBtn.addEventListener ('click', () => {

    entrevistasSection.classList.toggle('entrevistas-active');
    iconDown2.classList.toggle('fas-active');
    
})

// Personas

let personasBtn = document.querySelector('.personas-toggle');
let personasSection = document.querySelector('.personas');
let personasDesires = document.querySelector('.personas-desire');
let iconDown3 = document.querySelector('.fas3');

personasBtn.addEventListener ('click', () => {

    personasSection.classList.toggle('personas-active');
    personasDesires.classList.toggle('personas-desires-active');
    iconDown3.classList.toggle('fas-active');
})

// Ideação

let ideacaoBtn = document.querySelector('.ideate-toggle');
let ideacaoSection = document.querySelector('.ideacao');
let iconDown4 = document.querySelector('.fas4');

ideacaoBtn.addEventListener ('click', () => {

    ideacaoSection.classList.toggle('ideacao-active');
    iconDown4.classList.toggle('fas-active');
})

// Prototipo

let prototipoBtn = document.querySelector('.prototype-toggle');
let prototipoSection = document.querySelector('.prototipo');
let iconDown5 = document.querySelector('.fas5');

prototipoBtn.addEventListener ('click', () => {

    prototipoSection.classList.toggle('prototipo-active');
    iconDown5.classList.toggle('fas-active');
})

// Testes

let testeBtn = document.querySelector('.test-toggle');
let testeusabilidadeSection = document.querySelector('.teste-usabilidade');
let iconDown6 = document.querySelector('.fas6');

testeBtn.addEventListener ('click', () => {

    testeusabilidadeSection.classList.toggle('teste-usabilidade-active')
    iconDown6.classList.toggle('fas-active');
})

// UI - Guia de estilo

let uiBtn = document.querySelector('.ui-toggle');
let uiSection = document.querySelector('.ui');
let iconDown7 = document.querySelector('.fas7');

uiBtn.addEventListener ('click', () => {

    uiSection.classList.toggle('ui-active');
    iconDown7.classList.toggle('fas-active');
})

//hamburger menu 

let hamburgerToggle = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile-menu')

hamburgerToggle.addEventListener('click', () => {

    hamburgerToggle.classList.toggle('hamburger-close');
    mobileMenu.classList.toggle('mobile-menu-active');

})

// to-the-top icon

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let position = 1082;

    if (currentScrollPos >= position) {
        document.getElementById("stickhome_img").style.opacity = 1;
        document.getElementById("stickhome_img").style.visibility = 'visible';
        document.getElementById("stickhome_img").style.top = '50%';
    } else {
        document.getElementById("stickhome_img").style.opacity = 0;
        document.getElementById("stickhome_img").style.visibility = 'hidden';
        document.getElementById("stickhome_img").style.top = '0em';
    }
}