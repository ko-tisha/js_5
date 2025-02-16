const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
const task3 = document.getElementById('task3');

function hideAllTasks() {
    task1.style.display = 'none';
    task2.style.display = 'none';
    task3.style.display = 'none';
}

hideAllTasks();
task1.style.display = 'block';

document.getElementById('showTask1').addEventListener('click', () => {
    hideAllTasks();
    task1.style.display = 'block';
    stopTimer();
});

document.getElementById('showTask2').addEventListener('click', () => {
    hideAllTasks();
    task2.style.display = 'block';
    startTimer();
});

document.getElementById('showTask3').addEventListener('click', () => {
    hideAllTasks();
    task3.style.display = 'block';
    stopTimer();
});

let counter = 0;
const clickButton = document.getElementById('clickButton');
const counterDisplay = document.getElementById('counter');
const message = document.getElementById('message');

clickButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;

    if (counter === 15) {
        clickButton.disabled = true;
        message.textContent = "Вы достигли максимального количества кликов!";
    }
});

let time = 10;
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('resetButton');
let interval;

function startTimer() {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
        time--;
        timerDisplay.textContent = time;

        if (time === 0) {
            clearInterval(interval);
            timerDisplay.textContent = "Время вышло!";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    time = 10;
    timerDisplay.textContent = time;
    startTimer();
});

let stopwatch = 0;
const stopwatchDisplay = document.getElementById('stopwatch');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetStopwatchButton = document.getElementById('resetStopwatchButton');
let stopwatchInterval;

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatch++;
        stopwatchDisplay.textContent = stopwatch;
    }, 1000);
}

startButton.addEventListener('click', startStopwatch);

stopButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
});

resetStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatch = 0;
    stopwatchDisplay.textContent = stopwatch;
});