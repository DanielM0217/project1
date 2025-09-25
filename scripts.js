document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('myPopup');
  const closeButton = document.getElementById('closePopup');

  // Show the popup when the page loads
  popup.style.display = 'flex';

  // Hide the popup when the close button is clicked
  closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });
});

/*music on load */

document.addEventListener('click', function () {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.5;
    if (audio.paused) {
      audio.play().catch((err) => {
        console.warn('Audio play blocked:', err);
      });
    }
  }, { once: true });

  /*Safe Password*/

const display = document.getElementById('numpad-display');
const buttons = document.querySelectorAll('.numpad-btn');
const unlockSound = new Audio('assets/music/SafeOpen.mp3');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if (val === 'C') {
      display.value = '';
    } else if (val === '⏎') {
      const pinEntered = display.value;

      if (pinEntered === '519') {
        unlockSound.play();
        if (pincode) pincode.style.display = 'none';

        unlockSound.addEventListener('ended', () => {
          const pincode = document.getElementById('safepassword');
          const openSafe = document.querySelector('.open');
          const closedSafe = document.querySelector('.close');

          if (closedSafe) closedSafe.style.display = 'none';
          if (openSafe) openSafe.style.display = 'flex';

          display.value = '';
        }, { once: true });

      } else {
        alert('Wrong PIN!');
        display.value = '';
      }

    } else {
      display.value += val;
    }
  });
});
/*Sound bite for each button */
  const clickSound = new Audio('assets/music/buttonbeep.mp3');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const sound = clickSound.cloneNode();
      sound.play().catch(err => console.error('Sound error:', err));
    });
  });
/*showing hidden pin pad */
  const pincode = document.getElementById('safepassword');
  const closedsafe = document.querySelector('.close');
  closedsafe.addEventListener('click', function() {
    pincode.style.display = 'flex';
  });