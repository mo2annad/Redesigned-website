const sentences = [
  "On your desire domain",
  "Gives hands on experience",
  "Get a competitive job"
];

let currentSentence = 0;
let currentChar = 0;
const typingSpeed = 100; 
const sentencePause = 2000; 

const typingElement = document.querySelector('.typing-animation');

function typeSentence() {
  if (currentChar < sentences[currentSentence].length) {
    typingElement.textContent += sentences[currentSentence].charAt(currentChar);
    currentChar++;
    setTimeout(typeSentence, typingSpeed);
  } else {
    setTimeout(eraseSentence, sentencePause);
  }
}

function eraseSentence() {
  if (currentChar > 0) {
    typingElement.textContent = sentences[currentSentence].substring(0, currentChar - 1);
    currentChar--;
    setTimeout(eraseSentence, typingSpeed / 2);
  } else {
    currentSentence = (currentSentence + 1) % sentences.length;
    setTimeout(typeSentence, typingSpeed);
  }
}

setTimeout(typeSentence, sentencePause);
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});


const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}
