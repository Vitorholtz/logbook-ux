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