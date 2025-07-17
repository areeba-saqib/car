let currentIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(showSlide, 2000); 
//  slide //
let slideIndex = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;
const visibleReviews = 3;

function updateSlider() {
    reviews.forEach((review, index) => {
        if (index >= slideIndex && index < slideIndex + visibleReviews) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    });
}

function moveSlider(direction) {
    if (direction === 'next') {
        slideIndex += visibleReviews;
        if (slideIndex >= totalReviews) {
            slideIndex = 0; // Loop back to start
        }
    } else if (direction === 'prev') {
        slideIndex -= visibleReviews;
        if (slideIndex < 0) {
            slideIndex = totalReviews - visibleReviews;
        }
    }
    updateSlider();
}

document.querySelector('.left').addEventListener('click', () => moveSlider('prev'));
document.querySelector('.right').addEventListener('click', () => moveSlider('next'));

 // Auto move slider every 1.5 seconds
setInterval(() => {
    moveSlider('next');
}, 1500);

// Scroll To Top Button Functionality

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  
    });
}
//update lines //
document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".bar span");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let targetWidth = entry.target.getAttribute("data-width");
                entry.target.style.width = targetWidth;
                entry.target.style.transition = "width 1s ease-in-out";
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});

       //send message



document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form submission

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const message = document.getElementById("message");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobilePattern = /^[0-9]{10}$/;

    validateField(name);
    validateField(email, emailPattern);
    validateField(mobile, mobilePattern);
    validateField(message);

    function validateField(field, pattern = null) {
        const errorMessage = field.nextElementSibling;

        if (field.value.trim() === "" || (pattern && !pattern.test(field.value))) {
            errorMessage.style.display = "block";
            field.style.border = "1px solid red";
            isValid = false;
        } else {
            errorMessage.style.display = "none";
            field.style.border = "1px solid #ccc";
        }
    }

    if (isValid) {
        alert("Appointment request submitted successfully!");
    }
});