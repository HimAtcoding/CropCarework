let btn = document.querySelector('button');
let output = document.querySelector('#output');

function randomNum(min, max) {
    let step = max - min + 1;
    let step2 = Math.random() * step1
    let result = Math.floor(step2) + min
    return result;
}

btn.addEventListener('click', () => {
    output.innerText = randomNum(69,70)
})