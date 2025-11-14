document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('gift-box');
    const modal = document.getElementById('gallery-modal');
    const closeButton = document.querySelector('.close-button');
    const gallery = document.querySelector('.photo-gallery');

    const photoPlaceholders = [
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ];

    // Populate gallery
    photoPlaceholders.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Recuerdo especial";
        gallery.appendChild(img);
    });

    // Open modal
    giftBox.addEventListener('click', () => {
        giftBox.classList.add('open');
        setTimeout(() => {
            modal.style.display = 'flex';
        }, 500); // Wait for lid animation
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        giftBox.classList.remove('open'); // Reset gift
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            giftBox.classList.remove('open'); // Reset gift
        }
    });

    // Snowflake creation
    function createSnowflakes() {
        const snowflakeCount = 100;
        const body = document.querySelector('body');
        
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            const size = Math.random() * 5 + 2; // size between 2px and 7px
            const startX = Math.random() * window.innerWidth;
            const duration = Math.random() * 10 + 5; // fall duration between 5s and 15s
            const delay = Math.random() * 5;

            snowflake.classList.add('snowflake');
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            snowflake.style.left = `${startX}px`;
            snowflake.style.animationDuration = `${duration}s`;
            snowflake.style.animationDelay = `${delay}s`;
            
            body.appendChild(snowflake);
        }
    }

    createSnowflakes();
});
