document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});

const nav = document.querySelector('.navbar');


document.addEventListener('wheel', e => {
    if(window.pageYOffset >= 50){
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-fade-in');
    }  
})

window.addEventListener('scroll', function() {
    console.log(window.pageYOffset + 'px')
  });


// const titleBG =  document.querySelector('.title-bg-text');
// const titleText =  document.querySelector('.title-text');



// if(window.scrollTop() >= )

