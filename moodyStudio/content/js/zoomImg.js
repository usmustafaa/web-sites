const zoomContainers = document.querySelectorAll('.zoom-container');

zoomContainers.forEach(container => {
    const zoomImage = container.querySelector('.zoom-image');

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        zoomImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        zoomImage.style.transform = 'scale(1.5)';
    });

    container.addEventListener('mouseleave', () => {
        zoomImage.style.transform = 'scale(1)';
        zoomImage.style.transformOrigin = 'center center';
    });
});