function spinWheel() {
    const segments = document.querySelectorAll('.wheel .segment'); // Todos los segmentos
    const wheel = document.querySelector('.wheel'); // La rueda
    const pointer = document.querySelector('.pointer'); // La flecha

    // Determina el número de segmentos
    const numSegments = segments.length;
    
    // Número aleatorio de cuántos giros dará la ruleta
    const randomSpin = Math.floor(Math.random() * 1000) + 3000; // Giro largo aleatorio

    // Elige un índice aleatorio de los segmentos
    const randomIndex = Math.floor(Math.random() * numSegments);

    // Aplica el giro a la rueda
    wheel.style.transition = "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)";
    wheel.style.transform = `rotate(${randomSpin}deg)`; // Gira la ruleta

    // Después de que el giro termina, determina el resultado
    wheel.addEventListener('transitionend', function() {
        // El índice del segmento que está tocado es el que fue aleatorio
        const activeSegment = segments[randomIndex];
        const resultText = activeSegment.querySelector('span').innerText;

        // Mostrar el resultado
        document.getElementById('result').innerText = "Resultado: " + resultText;
    });
}
