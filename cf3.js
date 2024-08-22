function flipCoin() {
    const resultDisplay = document.getElementById('result');
    const coin = document.getElementById('coin');

    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

    resultDisplay.textContent = result;

    coin.style.transform = 'rotateY(360deg)';

    setTimeout(() => {
        coin.style.transform = 'rotateY(0deg)';
    }, 300);
}