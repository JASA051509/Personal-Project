let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function() {
    showSlider('next');    
}

prevDom.onclick = function() {
    showSlider('prev');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    showSlider('next');  // Correct reference here
}, timeAutoNext);

// Updated showSlider function
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (SliderItemsDom.length > 0 && thumbnailItemsDom.length > 0) {
        if (type === 'next') {
            // Move first item to the end
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else if (type === 'prev') {
            // Move last item to the start
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }

        // Reset the classes after animation
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);
    
        // Reset auto slider timeout
        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            showSlider('next');  // Use showSlider instead of next.click()
        }, timeAutoNext);
    } else {
        console.error('No items available in the slider.');
    }
}
