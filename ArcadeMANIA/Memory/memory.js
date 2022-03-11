const grid = document.querySelector('.grid');
const cards = ['alien', 'bug', 'rocket', 'tictac', 'duck', 'spaceship'];
const deck = [...cards, ...cards];

let pickedCards = [];

deck.sort(function () {
    return (5 - Math.floor(Math.random() * 9));

});

for (let i = 0; i < deck.length; i++) {
    const card = document.createElement('div');
    const cardName = deck[i];
    card.classList.add('card');
    card.setAttribute('data-name', cardName);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
}


function flipCard(event) {
    const card = event.target;

    if (card.classList.contains('flipped')) return;

    card.classList.add(card.getAttribute('data-name'), 'flipped');
    pickedCards.push(card);

    if (pickedCards.length === 2) {
        checkCardsMatch();
    }

    hasWon();
}


function checkCardsMatch() {
    const card1 = pickedCards[0];
    const card1Name = card1.getAttribute('data-name');
    const card2 = pickedCards[1];
    const card2Name = card2.getAttribute('data-name');

    if (card1Name != card2Name) {
        setTimeout(function () {
            card1.classList.remove(card1Name, 'flipped');
            card2.classList.remove(card2Name, 'flipped');
        }, 600);
    }
    pickedCards = [];
};

function hasWon() {
    const flippedCards = document.querySelectorAll('.flipped');
    console.log(flippedCards.length);
    if (flippedCards.length === deck.length) {
        showAlertMessage(`hai vinto!!`);
    }

}