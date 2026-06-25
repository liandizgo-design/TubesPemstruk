// --- NAVIGASI SPA ---
const navigationTriggers = document.querySelectorAll('[data-target]');
const pages = document.querySelectorAll('.page-view');

navigationTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = trigger.getAttribute('data-target');
        const targetPage = document.getElementById(targetId);

        if (targetPage) {
            pages.forEach(page => page.classList.remove('active'));

            document.querySelectorAll('.stat').forEach(box => box.classList.remove('active-box'));
            document.querySelectorAll('.card').forEach(card => card.classList.remove('active-box'));

            targetPage.classList.add('active');

            if (targetId === 'documentation') {
                setTimeout(() => {
                    if (typeof documentationSwiper !== 'undefined') {
                        documentationSwiper.update();
                    }
                }, 100);
            }

            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    });
});

// HOVER RADIAL GRADIENT PADA KARTU
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        card.style.background = `radial-gradient(circle at ${e.offsetX}px ${e.offsetY}px, rgba(255,255,255,0.15), rgba(125, 22, 22, 0.02))`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.background = 'transparent';
    });
});

// SWIPER DOCUMENTATION
const documentationSwiper = new Swiper('.documentationSwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 12,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: true,
        scale: 0.9,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// SCROLL REVEAL
const elementsToReveal = document.querySelectorAll('.card, .stat, .team-member, section h2, .quote h2');

elementsToReveal.forEach(el => el.classList.add('reveal'));

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

elementsToReveal.forEach(el => scrollObserver.observe(el));

// ACCORDION STATS
document.querySelectorAll('.stat').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active-box');
    });
});

// SHORTCUT PROGRAM FOOTER
document.querySelectorAll('.footer-program-link').forEach(shortcut => {
    shortcut.addEventListener('click', () => {
        const targetIndex = shortcut.getAttribute('data-index');
        const programsPage = document.getElementById('programs');

        if (programsPage) {
            document.querySelectorAll('.page-view').forEach(page => page.classList.remove('active'));
            programsPage.classList.add('active');

            const programBoxes = document.querySelectorAll('#programs .stat');
            const targetBox = programBoxes[targetIndex];

            if (targetBox) {
                programBoxes.forEach(box => box.classList.remove('active-box'));
                targetBox.classList.add('active-box', 'active');

                setTimeout(() => {
                    const offsetPosition = targetBox.getBoundingClientRect().top + window.pageYOffset
                        - (window.innerHeight / 2) + (targetBox.clientHeight / 2);
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }, 200);
            }
        }
    });
});