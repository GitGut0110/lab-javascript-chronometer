var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    var intervalId = setInterval(function(){
        printSeconds();
        printMinutes();
    },1000)
}

function printMinutes() {
    var minStr = chronometer.twoDigitsNumber(chronometer.setMinutes().toString())
   // console.log('print minutes started')
    minUni.innerHTML = minStr[1];
    minDec.innerHTML = minStr[0];
}

function printSeconds() {
    var secStr = chronometer.twoDigitsNumber(chronometer.setSeconds().toString())
   // console.log('print sec started')
    secUni.innerHTML = secStr[1];
    secDec.innerHTML = secStr[0];
}

function printMilliseconds() {

}

function printSplit() {
}

function clearSplits() {
    
}

function setStopBtn() {
    chronometer.stopClick()
}

function setSplitBtn() {
    var listNode = document.createElement('li');
    var splits = document.getElementById('splits');
    var minStr = chronometer.twoDigitsNumber(chronometer.setMinutes().toString())
    var secStr = chronometer.twoDigitsNumber(chronometer.setSeconds().toString())
    var time = minStr+' : '+secStr
    var textNode = document.createTextNode(time);
    listNode.appendChild(textNode);
    splits.appendChild(listNode)

}

function setStartBtn() {

}

function setResetBtn() {
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className.includes('start')){
        var newClassName = btnLeft.className.replace('start','stop');
        btnLeft.className = newClassName
        btnLeft.innerHTML = 'STOP';
        btnRight.innerHTML ='SPLIT';
        btnRight.className = btnRight.className.replace('reset','split');
        chronometer.startClick();
         printTime();
    }else{
        var newClassName = btnLeft.className.replace('stop','start');
       btnLeft.className  = newClassName
       btnLeft.innerHTML = 'START';
       btnRight.innerHTML ='RESET';
        btnRight.className = btnRight.className.replace('split','reset');
       chronometer.stopClick();
    }
    });

// Reset/Split Button
btnRight.addEventListener('click', function () {
 if (btnRight.className.includes('split')){
     console.log('TRY TO SPLIT');
     setSplitBtn();
 } else{
     console.log('try to reset');
     setResetBtn();
 }
})

  //     stopClick()
  //     var newClassName = btnRight.className.replace('split','reset');
  //    btnRight.className  = newClassName
  //    btnRight.innerHTML = 'RESET';
  // }
//});
