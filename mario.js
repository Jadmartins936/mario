const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const pulo = () => {
   
    mario.classList.add('pulo'); 
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);

};

const loop = setInterval(() => {
    console.log('loop')
    const pipeposition = pipe.offsetLeft;
    const marioposition = window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipeposition <= 120 && marioposition < 80 && pipeposition > 0) {
       
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;
        mario.src= 'images/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px'

        clearInterval(loop);
        
    }
}, 10);

document.addEventListener('keydown', pulo);
