const ladybug = document.querySelector(`.ladybug`);
const akuma = document.querySelector(`.akuma`);

const jump = () => {
    ladybug.classList.add(`jump`);

    setTimeout(() => {
        
        ladybug.classList.remove(`jump`);

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const akumaPosition = akuma.offsetLeft;
    const ladybugPosition = +window.getComputedStyle(ladybug).bottom.replace('px', '');

    console.log(ladybugPosition );

    if (akumaPosition <= 105 && akumaPosition > 0 && ladybugPosition <80) {

        akuma.style.animation = 'none';
        akuma.style.left = `${akumaPosition}px`;

        ladybug.style.animation = 'none';
        ladybug.style.bottom = `${ladybugPosition}px`;

        ladybug.src = './imgs/marinettedomal.png';

        clearInterval(loop);
    }
}, 10);

document.addEventListener(`keydown`, jump);
