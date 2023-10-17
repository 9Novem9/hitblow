const targetNumber = generateTargetNumber();

function generateTargetNumber() {
    // 0 から 9 までのランダムな数字を生成
    return Math.floor(Math.random() * 10);
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 0 || guess > 9) {
        document.getElementById('message').textContent = 'Invalid input. Please enter a number between 0 and 9.';
        return;
    }

    if (guess === targetNumber) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the correct number!';
    } else {
        document.getElementById('message').textContent = 'Try again. Wrong guess!';
    }
}
let currentGuess = '';

function appendNumber(number) {
    if (currentGuess.length < 4) {
        currentGuess += number;
        document.getElementById('guessInput').value = currentGuess;
    }
}

function checkGuess() {
    const guess = parseInt(currentGuess);

    if (isNaN(guess) || guess < 0 || guess > 9999) {
        document.getElementById('message').textContent = 'Invalid input. Please enter a number between 0 and 9999.';
        return;
    }

    // ゲームのロジックをここに追加
    // ...

    // ゲームの結果に基づいてメッセージを表示する
    // document.getElementById('message').textContent = 'Game result message';
}