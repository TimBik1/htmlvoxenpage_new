const profileCards = document.querySelectorAll('.profile-card');

profileCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');

        const description = card.querySelector('.description');
        if (card.classList.contains('active')) {
            description.style.display = 'block';
        } else {
            description.style.display = 'none';
        }
    });
});
