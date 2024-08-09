const cards = document.querySelectorAll('.card');
let currentCardIndex = 0;

function showCard(index) {
    cards.forEach((card, idx) => {
        if (idx === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= cards.length) {
        currentCardIndex = 0; // Loop back to the first card
    }
    showCard(currentCardIndex);
}

// Función para retroceder a la tarjeta anterior
function prevCard() {
    currentCardIndex--;
    if (currentCardIndex < 0) {
        currentCardIndex = cards.length - 1; // Volver al final si está en el principio
    }
    showCard(currentCardIndex);
}

// Show the first card initially
showCard(currentCardIndex);

function cambiarColorPalabras() {
    // Seleccionamos todos los elementos con la clase 'texto'
    const elementos = document.querySelectorAll('.texto');

    // Expresiones regulares para buscar palabras completas
    const regex_die = /\bdie\b/g;
    const regex_das = /\bdas\b/g;
    const regex_der = /\bder\b/g;

    // Iteramos sobre cada elemento
    elementos.forEach(elemento => {
        let texto = elemento.textContent;

        // Reemplazamos las palabras específicas con versiones en color
        texto = texto.replace(regex_die, '<span style="color: #f9829b;">die</span>');
        texto = texto.replace(regex_das, '<span style="color: #94cb54;">das</span>');
        texto = texto.replace(regex_der, '<span style="color: #0cb7f2;">der</span>');

        // Actualizamos el contenido HTML del elemento
        elemento.innerHTML = texto;
    });
}

// Ejecutamos la función al cargar la página
document.addEventListener('DOMContentLoaded', cambiarColorPalabras);
