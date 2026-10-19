// src/countdown.js

function countdownTimer(duration, interval) {
  let remainingTime = duration;

  const timerId = setInterval(() => {
    console.log(remainingTime);
    
    if (remainingTime <= 0) {
      clearInterval(timerId);
    } else {
      remainingTime--;
    }
  }, interval);

  return timerId;
}

module.exports = countdownTimer;