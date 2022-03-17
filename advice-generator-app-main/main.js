const randomBtn = document.getElementById('random');
const cardTitle = document.querySelector('.card__title');
const cardContent = document.querySelector('.card__content');

async function fetchAdvice() {
  let data = await fetch('https://api.adviceslip.com/advice');
  data = data.json();
  return data;
}

function fillData() {
  fetchAdvice().then((data) => {
    console.log(data);
    cardTitle.innerHTML = 'ADVICE #' + data.slip.id;
    cardContent.innerHTML = data.slip.advice;
  });
}

randomBtn.addEventListener('click', async function () {
  this.classList.add('active');
  fillData();
  setTimeout(() => {
    this.classList.remove('active');
  }, 800);
});
