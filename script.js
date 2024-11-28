let isSpinning = false; // Para evitar que se gire mientras ya está girando

function spinWheel() {
    if (isSpinning) return; // Evita que gire si ya está girando
    isSpinning = true;

    const segments = document.querySelectorAll('.wheel .segment'); // Todos los segmentos
    const wheel = document.querySelector('.wheel'); // La rueda

    // El número de segmentos
    const numSegments = segments.length;
    
    // Generar un número aleatorio para el giro
    const randomSpin = Math.floor(Math.random() * 1000) + 3000; // Giro largo aleatorio

    // Aplica el giro a la rueda
    wheel.style.transition = "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)";
    wheel.style.transform = `rotate(${randomSpin}deg)`; // Gira la ruleta

    // Determina el segmento debajo de la flecha
    setTimeout(function() {
        // Calcula el índice del segmento que está bajo la flecha
        const segmentIndex = Math.floor(((randomSpin % 360) / 60) % numSegments);

        // Obtiene el contenido del segmento
        const resultText = segments[segmentIndex].querySelector('span').innerText;

        // Muestra el resultado
        // Asegúrate de mostrar el resultado en algún lugar, si lo deseas
        console.log(resultText);

        // Ejecutar la animación de confeti como celebración
        triggerConfetti();

        // Habilitar nuevo giro después de la animación
        isSpinning = false;
    }, 4000); // El tiempo de espera debe coincidir con la duración del giro
}

function resetWheel() {
    const wheel = document.querySelector('.wheel');
    // Restablecer la rotación de la rueda a 0 grados
    wheel.style.transition = "transform 0s"; // Sin transición para un reinicio rápido
    wheel.style.transform = "rotate(0deg)"; // Restaura la posición inicial
}

function triggerConfetti() {
    const wheel = document.querySelector('.wheel-container');
    const wheelRect = wheel.getBoundingClientRect();

    // Calculamos el centro de la rueda usando su rectángulo
    const centerX = wheelRect.left + wheelRect.width / 2;
    const centerY = wheelRect.top + wheelRect.height / 2;

    // Confeti de celebración desde el centro de la ruleta
    confetti({
        particleCount: 200,
        spread: 90,
        origin: {
            x: (centerX / window.innerWidth), // Normalizamos para usar coordenadas relativas
            y: (centerY / window.innerHeight)
        }
    });
}
