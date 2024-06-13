// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Cambiar el color de fondo del header al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#222';
        } else {
            header.style.backgroundColor = '#333';
        }
    });

    // Manejar el botón de registro con una alerta
    const registroBtn = document.querySelector('#crear-cuenta .registro');
    registroBtn.addEventListener('click', () => {
        alert('¡Gracias por registrarte! Por favor, revisa tu correo para confirmar.');
    });

    // Manejar el botón de "Continuar con Google"
    const googleBtn = document.querySelector('#crear-cuenta .google');
    googleBtn.addEventListener('click', () => {
        alert('Funcionalidad de Google próximamente disponible.');
    });

    // Testimonios carrusel (opcional)
    const testimonios = document.querySelectorAll('.testimonios-carta');
    let currentTestimonio = 0;

    const showTestimonio = (index) => {
        testimonios.forEach((testimonio, i) => {
            testimonio.style.display = i === index ? 'block' : 'none';
        });
    };

    showTestimonio(currentTestimonio);

    const nextTestimonio = () => {
        currentTestimonio = (currentTestimonio + 1) % testimonios.length;
        showTestimonio(currentTestimonio);
    };

    setInterval(nextTestimonio, 5000); // Cambiar testimonio cada 5 segundos
});
