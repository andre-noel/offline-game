const hero = document.querySelector('.hero');
const coiso = document.querySelector('.coiso');

window.addEventListener('keydown', ({ key }) => {
    if (key === 'ArrowUp') {
        hero.classList.add('jump');
        setTimeout(() => {
            hero.classList.remove('jump');
        }, 500)
    }
});

const loop = setInterval(() => {
    const leftCoiso = parseInt(window.getComputedStyle(coiso).left);
    const heroBase = parseInt(window.getComputedStyle(hero).marginBottom);
    if (leftCoiso < parseInt(window.getComputedStyle(hero).width) - 15 && leftCoiso > 10 && heroBase < 100) {
        coiso.style.animation = 'none';
        coiso.style.left = leftCoiso + 'px';
        hero.style.animation = 'none';
        hero.style.marginBottom = heroBase + 'px';
        hero.style.transform = 'scaleY(-1)';

        clearInterval(loop);
    }
}, 10);