document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const modal = document.getElementById('popup-modal');
    const card = document.getElementById('popup-card');
    const closeBtn = document.getElementById('close-popup');
    const triggerHeader = document.getElementById('trigger-popup');
    const triggerHero = document.getElementById('trigger-popup-hero');
    const rightPanel = document.getElementById('popup-right-area');
    const ticketsTilt = document.getElementById('tickets-tilt');

    // --- Modal Open/Close Logic ---
    
    // Open modal function
    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Reset tilt position to default
        if (ticketsTilt) {
            ticketsTilt.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            ticketsTilt.style.transform = 'rotateY(-20deg) rotateX(10deg) rotateZ(0deg)';
        }
    };

    // Close modal function
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Auto-open modal after 1.5 seconds delay
    setTimeout(openModal, 1500);

    // Event listeners for opening
    if (triggerHeader) triggerHeader.addEventListener('click', openModal);
    if (triggerHero) triggerHero.addEventListener('click', openModal);

    // Event listeners for closing
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside on the backdrop
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop-blur')) {
            closeModal();
        }
    });
    
    // Allow closing with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // --- 3D Holographic Parallax Tilt Effect ---
    if (rightPanel && ticketsTilt) {
        
        rightPanel.addEventListener('mousemove', (e) => {
            const rect = rightPanel.getBoundingClientRect();
            
            // Mouse position relative to center of the panel
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);
            
            // Normalized values (-1 to 1)
            const normX = x / (rect.width / 2);
            const normY = y / (rect.height / 2);
            
            // Rotation calculations (max rotation: 28 degrees Y, -22 degrees X)
            // Left move tilts right, right move tilts left
            const rotateY = normX * 28;
            const rotateX = -normY * 22;
            
            // Apply 3D rotation transform dynamically
            // Remove transition for lag-free cursor tracking
            ticketsTilt.style.transition = 'transform 0.08s ease-out';
            ticketsTilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(-2deg)`;
        });

        // Smooth transition reset when mouse leaves the interaction area
        rightPanel.addEventListener('mouseleave', () => {
            ticketsTilt.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
            ticketsTilt.style.transform = 'rotateY(-20deg) rotateX(10deg) rotateZ(0deg)';
        });
    }

    // --- Optional: Action button hover ripple triggers ---
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            // Optional redirect or action - e.g. custom visual event
            console.log("Free delegate pass claimed!");
        });
    }
});

