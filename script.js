const fadeEls = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
    }
);

fadeEls.forEach((el) => observer.observe(el));
