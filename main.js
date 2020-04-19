var slideshow = document.getElementById('slideshow');
var slides = slideshow.getElementsByTagName('img');
var slideshowText = document.getElementById('slideshowText');
var slidesText = slideshowText.getElementsByTagName('div');
var index = 0;

function nextSlide() {

    slides[index].classList.remove('active');
    slidesText[index].classList.remove('active');

    var nextIndex = calcNextIndex(index, slides.length);
    index = nextIndex;

    slides[nextIndex].classList.add('active');
    slidesText[nextIndex].classList.add('active');
}

function prevSlide() {
    slides[index].classList.remove('active');
    slidesText[index].classList.remove('active');

    var previousIndex = calcPreviousIndex(index, slides.length);
    index = previousIndex;

    slides[previousIndex].classList.add('active');
    slidesText[previousIndex].classList.add('active');
}

function calcNextIndex(currentIndex, maxIndex) {
    var nextIndex = currentIndex + 1;
    if (nextIndex >= maxIndex) {
        return 0;
    }
    return nextIndex;
}

function calcPreviousIndex(currentIndex, maxIndex) {
    var previousIndex = currentIndex - 1;
    if (previousIndex <= 0) {
        return maxIndex - 1;
    }
    return previousIndex;
}
