const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(" .slide-button");
    
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction; // Scroll by the width of the visible area
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
    
}

// Initialize the slider on window load
window.addEventListener("load", initSlider);
