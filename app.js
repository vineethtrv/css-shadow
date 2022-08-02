import { BoxShadows } from './box-shadow.js';

const APP_EL = document.getElementById('app');
const BoxShadow_EL = document.getElementById('box-shadow');
let boxText = '👆 Click to \n 📋 copy style';


// Box shadows
BoxShadows.forEach(boxShadow => {

    const CardEl = document.createElement('div');
    CardEl.classList.add('card');
    CardEl.innerText = boxText;
    CardEl.style.boxShadow = boxShadow;

    BoxShadow_EL.appendChild(CardEl);

});