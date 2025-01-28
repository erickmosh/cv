document.addEventListener('DOMContentLoaded', function() {
    // Efecto de carga suave para las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    });

    document.querySelectorAll('.section').forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });

    // Efecto hover en tarjetas
    const cards = document.querySelectorAll('.certificado-card, .experiencia, .educacion');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Botón "Volver arriba"
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // Cambio de color del encabezado al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#34495e';
        } else {
            header.style.backgroundColor = '#2c3e50';
        }
    });

    // Efecto de escritura automática en el título
    const title = document.querySelector('.profile-info h1');
    const text = title.innerText;
    title.innerText = '';

    let index = 0;
    const typingEffect = setInterval(() => {
        title.innerText += text[index];
        index++;
        if (index === text.length) clearInterval(typingEffect);
    }, 100);
});