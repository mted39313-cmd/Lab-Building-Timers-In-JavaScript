// src/recurringTimer.js

function recurringTimer(message, interval) {
  return setInterval(() => {
    console.log(message);
  }, interval);
}

function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };