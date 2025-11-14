document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('gift-box');
    const modal = document.getElementById('creation-modal');
    const closeButton = document.querySelector('.close-button');
    const scene = document.getElementById('scene');
    const decorations = document.querySelectorAll('.deco-item');

    // --- Modal Logic ---
    giftBox.addEventListener('click', () => {
        giftBox.classList.add('open');
        setTimeout(() => {
            modal.style.display = 'flex';
        }, 500); // Wait for lid animation
    });

    const closeModal = () => {
        modal.style.display = 'none';
        giftBox.classList.remove('open'); // Reset gift
    };

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- Drag and Drop Logic ---
    decorations.forEach(deco => {
        deco.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            setTimeout(() => {
                e.target.classList.add('dragging');
            }, 0);
        });

        deco.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });

    scene.addEventListener('dragover', (e) => {
        e.preventDefault(); // This is necessary to allow dropping
    });

    scene.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        // Clone the decoration to allow multiple uses
        const clone = draggable.cloneNode(true);
        clone.classList.remove('deco-item');
        clone.classList.add('placed-deco');
        
        // Calculate position relative to the scene
        const sceneRect = scene.getBoundingClientRect();
        const x = e.clientX - sceneRect.left - (clone.width / 2);
        const y = e.clientY - sceneRect.top - (clone.height / 2);

        clone.style.left = `${x}px`;
        clone.style.top = `${y}px`;
        
        // Make the dropped item not draggable again
        clone.draggable = false;

        scene.appendChild(clone);
    });


    // --- Snowflake creation ---
    function createSnowflakes() {
        const snowflakeCount = 100;
        const body = document.querySelector('body');
        
        // Only create snowflakes if they don't already exist
        if (document.querySelector('.snowflake')) return;

        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            const size = Math.random() * 5 + 2;
            const startX = Math.random() * window.innerWidth;
            const duration = Math.random() * 10 + 5;
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

