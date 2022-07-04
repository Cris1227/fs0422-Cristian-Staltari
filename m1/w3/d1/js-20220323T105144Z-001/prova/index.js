alert('Usa il pop up per dare dei messaggi');
window.alert('Sto studiando JS');

var bo1 = document.getElementsByClassName('bo')
console.log(bo1)

var bah1 = document.getElementsByClassName('bah')
console.log(bah1)
var bu1 = document.getElementById('bu')
console.log(bu1)

var bo1Bah1 = document.getElementsByTagName('bo,bah')
console.log(bo1Bah1)
/**query */

var bo2 = document.querySelector('.bo');
var bah2 = document.querySelector('.bah');
var bo2Bah2 = document.querySelectorAll('.bo, bah');
console.log(bo2)
console.log(bah2)
console.log(bo2Bah2)
console.log(typeof(bo2), typeof(bo2Bah2) )

function colorati(){
    bu1.style.backgroundColor = 'green'
}

