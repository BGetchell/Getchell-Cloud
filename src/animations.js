document.addEventListener('DOMContentLoaded', function () {
    // ScrollReveal initialization
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        reset: true
    });

    // Animate the elements on scroll
    sr.reveal('#home img', { origin: 'left' });
    sr.reveal('#home h1', { delay: 200 });
    sr.reveal('#home p', { delay: 400 });

    // You can repeat this pattern for other sections
    sr.reveal('#github-repo h2', { delay: 200 });
    sr.reveal('#github-repo a', { delay: 400 });

    // ... Add for other sections similarly
});
