let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let textDisplay = document.getElementById('textDisplay');
let catImage = document.getElementById('catImage'); // Referencia al elemento de la imagen

let currentTextIndex = 0; // Comienza desde el primer texto
let scaleValue = 1; // Valor inicial de escala

// Array de textos personalizados
let texts = [
    "¿Quieres ser mi San Valentín?", // Primer mensaje
    "Dime que si porfa🥰", // Segundo mensaje
    "no seas malaaaa 💖", // Tercer mensaje
    "mira como eres eh 💘", // Cuarto mensaje
    "ai cv", // Quinto mensaje
    "te voy a pegar tu  eh", // Sexto mensaje
    "waa", // Séptimo mensaje
    "y yo que quedarte sorpresa 🎁", // Octavo mensaje
    "ahora no tienes opcion", // Noveno mensaje
    "sabia que dirias que si, te amo mucho!", // Décimo mensaje
];

// Rutas de los GIFs
let gifs = [
    'images/b8cd50e9cc81b4ed82324cb46dd2077f.gif', // GIF 1
    'images/pidiendo algo.gif', // GIF 2
    'images/llorando.gif', // GIF 3
    'images/emoji-sanrio.gif', // GIF 4
    'images/pompompurin-pom-pom-purin.gif',  // ahi c v
    'images/asterizco.gif', // poto
    'images/llorandooo.gif', // poto
    'images/regalo.gif', // poto
    'images/pompom.gif', // poto
    'images/93bb05fb04adf3b57b4579d7726d32ee.jpg' // GIF 10
];

let gifIndex = 0; // Índice para controlar cuál GIF mostrar

yesButton.addEventListener('click', function() {
    // Cambiar el texto y mostrar el GIF 10 directamente al presionar "Sí"
    textDisplay.textContent = texts[9]; // Muestra el mensaje final: "sabía que dirías que sí, te amo mucho!"
    catImage.src = gifs[9]; // Cambiar al GIF 10 (que es el índice 9)

    // Ocultar ambos botones
    yesButton.style.display = 'none'; // Oculta el botón "Sí"
    noButton.style.display = 'none'; // Oculta el botón "No"

    // Generar confeti
    confetti({
        particleCount: 2000,  // Número de partículas ajustado
        spread: 90,           // Aumentar el rango de dispersión
        origin: { x: 0, y: 0 },  // Confeti desde el lado izquierdo
        scalar: 2             // Aumentar el tamaño de las partículas
    });

    confetti({
        particleCount: 2000,  // Número de partículas ajustado
        spread: 90,           // Aumentar el rango de dispersión
        origin: { x: 1, y: 0 },  // Confeti desde el lado derecho
        scalar: 2             // Aumentar el tamaño de las partículas
    });
});

noButton.addEventListener('click', function() {
    // Cambiar el texto cada vez que se hace clic en "No"
    currentTextIndex = (currentTextIndex + 1) % texts.length; // Ciclo de los textos
    textDisplay.textContent = texts[currentTextIndex]; // Muestra el texto del array

    // Cambiar el GIF en la imagen
    gifIndex = (gifIndex + 1) % gifs.length; // Asegura que el índice se mantenga dentro del rango de los GIFs
    catImage.src = gifs[gifIndex]; // Cambiar el "src" del GIF

    // Incrementar el tamaño del botón "Sí" un poco más rápido
    scaleValue += 0.3; // Incrementamos el tamaño del botón "Sí" de manera más rápida
    yesButton.style.transform = `scale(${scaleValue})`; // Aplica la nueva escala
});
