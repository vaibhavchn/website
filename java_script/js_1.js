let track = document.querySelector('.carousel__track');
console.log(track);
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
let dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);

//arranging the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

//above setSlidePosition function can also be written like this

/*
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index +'px';
});

 */

//now on clicking right arrow slide to right


const moveToSlide = (track, currentSlide,targetSlide, amountToMove) =>{
    track.style.transform = 'translateX(-'+ amountToMove +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) =>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

const hideShowArrow = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0){
        prevButton.classList.add('is_hidden');
        nextButton.classList.remove('is_hidden');
    }
    else if (targetIndex === slides.length - 1){
        prevButton.classList.remove('is_hidden');
        nextButton.classList.add('is_hidden');
    }
    else{
        prevButton.classList.remove('is_hidden');
        nextButton.classList.remove('is_hidden');
    }
};


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const targetIndex = slides.findIndex(slides => slides === nextSlide);

    moveToSlide(track, currentSlide, nextSlide, amountToMove);
    updateDots(currentDot,nextDot);
    hideShowArrow(slides, prevButton, nextButton, targetIndex);
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const targetIndex = slides.findIndex(slides => slides === prevSlide);

    moveToSlide(track, currentSlide, prevSlide, amountToMove);
    updateDots(currentDot,prevDot);
    hideShowArrow(slides, prevButton, nextButton, targetIndex);
});


dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dots => dots === targetDot);
    const targetSlide = slides[targetIndex];
    const amountToMove = targetSlide.style.left;

    moveToSlide(track, currentSlide, targetSlide, amountToMove);

    updateDots(currentDot,targetDot);

    hideShowArrow(slides, prevButton, nextButton, targetIndex);
});
