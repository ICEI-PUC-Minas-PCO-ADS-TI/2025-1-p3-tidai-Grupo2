document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselContent = document.querySelector('.carousel-content');
    let currentIndex = 0;

    const images = carouselContent.querySelectorAll('img');
    const totalImages = images.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContent.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });
});
