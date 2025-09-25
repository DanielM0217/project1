document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('myPopup');
  const closeButton = document.getElementById('closePopup');
  const openSafe = document.querySelector('.open');
  // Show the popup when the page loads
  popup.style.display = 'flex';

  // Hide the popup when the close button is clicked
  closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });
});

let key = false;
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

const pincode = document.getElementById('safepassword');
const display = document.getElementById('numpad-display');
const buttons = document.querySelectorAll('.numpad-btn');
const unlockSound = new Audio('assets/music/SafeOpen.mp3');
const wrongSound = new Audio('assets/music/wrong.mp3');

wrongSound.volume = 0.5;

// Open the pin pad when clicking the closed safe
const closedsafe = document.querySelector('.close');
closedsafe.addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent immediate closing
  pincode.style.display = 'flex';
});

// Prevent clicks inside the pin pad from closing it
pincode.addEventListener('click', function (event) {
  event.stopPropagation();
});

// Close the pin pad when clicking outside
document.addEventListener('click', function (event) {
  if (
    pincode.style.display === 'flex' &&
    !pincode.contains(event.target)
  ) {
    pincode.style.display = 'none';
  }
});

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if (val === 'C') {
      display.value = '';
    } else if (val === '⏎') {
      const pinEntered = display.value;

      if (pinEntered === '519') {
        unlockSound.play();
        pincode.style.display = 'none';

        unlockSound.addEventListener(
          'ended',
          () => {
            const openSafe = document.querySelector('.open');
            if (closedsafe) closedsafe.style.display = 'none';
            if (openSafe) openSafe.style.display = 'flex';
            display.value = '';
          },
          { once: true }
        );
      } else {
        wrongSound.play();
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
      sound.play();
    });
  });

  const openSafe = document.querySelector('.open');
  openSafe.addEventListener('click', () => {
    const takenSafe = document.querySelector('.taken');
    const keysound = new Audio('assets/music/key.mp3')
    keysound.volume = .7;
    keysound.play();
    takenSafe.style.display = "flex";
    openSafe.style.display = 'none';
    key = true
    console.log(key);
});

console.log(key);

const unpluggedTV = document.querySelector('.unplugged')
unpluggedTV.addEventListener('click', () =>{
    const pluggedTV = document.querySelector('.plugged')
    const news = document.querySelector('.tvon')
    const tvStatic = new Audio('assets/music/tvON.mp3');
    tvStatic.volume = 0.7;
    tvStatic.play();
    pluggedTV.style.display = 'flex';
    unpluggedTV.style.display = 'none';
    tvStatic.addEventListener('ended', () => {

    news.style.display = 'flex';
    });

});

const closedcabinet = document.querySelector('.closedcabinet')
closedcabinet.addEventListener('click', () =>{
    const opencabinet = document.querySelector('.opencabinet');
    const hinge = new Audio('assets/music/cabinetdoor.mp3');
    hinge.volume = .7;
    hinge.play();
    closedcabinet.style.display = 'none';
    opencabinet.style.display = 'flex';
});

const door = document.querySelector('.door')
door.addEventListener('click', () => {
    if (key === true){
        const endscreen = document.getElementById('ending');
        const doornoise = new Audio('assets/music/dooropen.mp3');
        doornoise.volume = .7
        doornoise.play();
        doornoise.addEventListener('ended', () => {
            ending.style.display = 'flex';
    });
}
    else{
        const lockeddoor = new Audio('assets/music/lockeddoor.mp3');
        lockeddoor.volume = 0.25;
        lockeddoor.play();
    }
});


  const sky = document.getElementById('ending');

  const numStars = 150;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 5 + 1; // 1px to 3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random position
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;

    sky.appendChild(star);

    // Twinkling animation
    gsap.to(star, {
      opacity: Math.random(),
      duration: Math.random() * 2 + 1,
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 1,
      ease: "sine.inOut"
    });
  }