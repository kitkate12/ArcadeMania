const scoreDisplay = document.querySelector('#score-display');
let score = 0;
scoreDisplay.innerText = score;

const road = document.querySelectorAll('.road > div');

const duckPosition = road[3];
duckPosition.classList.add('duck');

let plantPositionIndex;


document.addEventListener('keydown', jump);
addPlant();




function addPlant() {
    plantPositionIndex = road.length - 1;
    road[plantPositionIndex].classList.add('plant');

    plantMovement();
}



function plantMovement() {
    let plantMovement = setInterval(function () {
        road[plantPositionIndex].classList.remove('plant');
        plantPositionIndex--;
        if (plantPositionIndex < 0) {
            clearInterval(plantMovement);
            addPlant();
            return;
        }
        console.log(road[plantPositionIndex]);

        if (road[plantPositionIndex].classList.contains('duck','plant') &&
            !road[plantPositionIndex].classList.contains('jumping-duck')) {
            showAlertMessage(`HAI PERSO! il tuo punteggio:${score}`);
            console.log('CRASH!!');
            clearInterval(plantMovement);
            return;
        } else if (road[plantPositionIndex].classList.contains('duck','plant','jumping-duck')){
            score++;
            scoreDisplay.innerText = score;
        }
        road[plantPositionIndex].classList.add('plant');
    }, 150);
}



function jump(event) {
    if (event.code === 'Space' && !event.repeat) {
        duckPosition.classList.add('jumping-duck');
        setTimeout(function () {
            duckPosition.classList.remove('jumping-duck');
        }, 400);

        console.log('JUMP!', event);
    }

};