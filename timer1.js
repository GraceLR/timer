
// variable name: descriptive
// dry
// condition
// pull out function

const beep = () => {
  process.stdout.write('\x07');
};

const scheduleAlarm = (sec) => {
  setTimeout(() => {
    beep();
  }, sec * 1000);
};

const alarmTimes = process.argv.slice(2);

alarmTimes.forEach(timeStr => {
  const timeNum = Number(timeStr);
  if (!isNaN(timeNum) && timeNum >= 0) {
    scheduleAlarm(timeNum);
  }

});

