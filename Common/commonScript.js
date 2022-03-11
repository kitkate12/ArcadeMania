function showAlertMessage(message) {
  const gameArea = document.querySelector('.game-area');
  const alertMessage = `
      <div class="gameAlert">
        <div class="gameAlertMessage">${message}</br>
        <button id='restart'>gioca ancora</button>
        </div>
        
      </div>
    `;

  gameArea.innerHTML += alertMessage;

  const restartBtn = document.getElementById('restart');

  restartBtn.addEventListener('click', function () {
    window.location.reload();
  }); 
} 




