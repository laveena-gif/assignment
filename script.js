document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Popup
    const contactUsButton = document.getElementById('contactUsButton');
    const contactFormPopup = document.getElementById('contactFormPopup');

    contactUsButton.addEventListener('click', function() {
        contactFormPopup.style.display = 'block';
    });

    contactFormPopup.addEventListener('click', function(event) {
        if (event.target === contactFormPopup) {
            contactFormPopup.style.display = 'none';
        }
    });

    // Slider functionality for "What We Do" section
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * (100 / slides.length) + '%'; // Adjust offset calculation for smaller slides
        document.querySelector('.slides').style.transform = `translateX(${offset})`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);

    slides.forEach(slide => {
        slide.addEventListener('mouseenter', function() {
            const readMoreOverlay = document.createElement('div');
            readMoreOverlay.classList.add('read-more-overlay');
            readMoreOverlay.innerHTML = `
                <h2>Web Development</h2>
                <p>We offer cutting-edge web development services to build robust and scalable web applications.</p>
                <button class="read-more-button">Read More</button>`;
            this.appendChild(readMoreOverlay);

            readMoreOverlay.querySelector('.read-more-button').addEventListener('click', () => {
                window.open(slide.getAttribute('data-url'), '_blank');
            });
        });

        slide.addEventListener('mouseleave', function() {
            const readMoreOverlay = this.querySelector('.read-more-overlay');
            if (readMoreOverlay) {
                this.removeChild(readMoreOverlay);
            }
        });
    });

    // Change image in "Our Project" section based on clicked content item
    const projectImage = document.querySelector('.image-carousel img');
    const contentItems = document.querySelectorAll('.content-item');

    contentItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const newImage = this.getAttribute('data-image');
            projectImage.src = newImage;
            contentItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            this.style.color = 'red';
        });

        item.addEventListener('mouseleave', function() {
            this.style.color = 'black';
        });
    });

    // Hover effects for "Company Growth" cards
    const growthCards = document.querySelectorAll('.card');

    growthCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('highlighted');
        });

        card.addEventListener('mouseleave', function() {
            this.classList.remove('highlighted');
        });
    });
});
