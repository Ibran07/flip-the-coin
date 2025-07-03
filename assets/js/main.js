const coin = document.querySelector('.coin');
const resultText = document.querySelector('.result');
const flipButton = document.querySelector('.btn');

try{
    flipButton.addEventListener('click', flipCoin);
    coin.addEventListener('click', flipCoin);
}catch (err) {
    console.log(err);
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function flipCoin() {

    resultText.innerText = "Flipping...";
    coin.classList.remove('flipping');
    void coin.offsetWidth;
    coin.classList.add('flipping');

    await wait(3000);

    const outcome = Math.random() < 0.5 ? 'heads' : 'tails';

    coin.src = `assets/images/${outcome}.svg`;

    coin.style.transform = 'rotateX(180deg)';

    resultText.textContent = `${outcome.charAt(0).toUpperCase() + outcome.slice(1)}`;
}
