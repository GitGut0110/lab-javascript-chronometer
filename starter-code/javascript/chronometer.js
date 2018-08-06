// Constructor
function Chronometer(){
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function (){
      that.currentTime++;
      that.setTime();
    },1000);
    console.log('startClick started');
}
Chronometer.prototype.setMinutes = function () {
    var minutes = 0;
    minutes = Math.floor(this.currentTime / 60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
   return this.currentTime % 60;
};

 Chronometer.prototype.twoDigitsNumber = function (num) {
     //return num.padStart(2,'0').toString();
     if (num <10){
         return '0' + num;
     } return num.toString();
 };

 Chronometer.prototype.setTime = function () {
    var seconds = this.twoDigitsNumber(this.setSeconds);
    var minutes = this.twoDigitsNumber(this.setMinutes);
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
     clearInterval(this.intervalId)
 };

 Chronometer.prototype.resetClick = function () {
     this.currentTime = 0
 };

// Chronometer.prototype.splitClick = function () {

// };
