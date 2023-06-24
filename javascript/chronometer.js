class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;

    // BONUS =>
    this.millisecondsIntervalId = 0;
    this.currentMilliseconds = 0; 
  }

  startClick(printTime, /* BONUS => */ printMilliseconds) {
    // ... your code goes here
    this.intervalId = setInterval( () => {
      this.currentTime++;
      //check if the callback exists before invoking it
      if (printTime) printTime();
    }, 1000);

  // BONUS =>
  this.millisecondsIntervalId = setInterval( () => {
    if (this.currentMilliseconds === 99) {
      this.currentMilliseconds = 0;
    }
    this.currentMilliseconds++;
    if (printMilliseconds) printMilliseconds();
  }, 10);
  }

  getMinutes() {
    // ... your code goes here
      let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin;
  }

  getSeconds() {
    // ... your code goes here
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }

  twoDigitsNumber(num) {
    // ... your code goes here
    return ("0" + num).slice(-2);
    }
    // let strValue = ("0" + value).slice(-2);
    // return strValue;

    stopClick() {
      // ... your code goes here
      clearInterval(this.intervalId);
      clearInterval(this.millisecondsIntervalId); // <= BONUS
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;

    // BONUS =>
    this.currentMilliseconds = 0
  }

  splitClick() {
      // ... your code goes here
     //the goal is to return a string that looks like this 'mm:ss'
      let minutes = this.twoDigitsNumber(this.getMinutes());
      let seconds = this.twoDigitsNumber(this.getSeconds());
      let milliseconds = this.twoDigitsNumber(this.currentMilliseconds); // <= BONUS

      return `${minutes}:${seconds}`;
      // return `${minutes}:${seconds}:${milliseconds}`; // <= BONUS (comentado porque no pasa los tests sino) 
    }
  }

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
//if (typeof module !== 'undefined') {
  //module.exports = Chronometer;
//}
