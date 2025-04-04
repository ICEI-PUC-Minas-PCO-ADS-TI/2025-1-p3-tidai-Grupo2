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
    document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll(".carousel-slide");
        const totalSlides = slides.length;
        let currentIndex = 0;
    
        function showSlide(index) {
            const carouselContent = document.querySelector(".carousel-content");
            carouselContent.style.transform = `translateX(-${index * 100}%)`;
        }
    
        document.querySelector(".next").addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        });
    
        document.querySelector(".prev").addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        });
    
        // Auto-slide a cada 3 segundos
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }, 3000);
    });
    
});
