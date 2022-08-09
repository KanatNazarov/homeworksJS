
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const score = document.getElementById('score')
const reset = document.getElementById('reset')
let num = 0;
plus.onclick = () => {
    num++
    score.innerText = num
}
minus.onclick = () => {
    num--
    if ( num < 1){
        num = 0
    }
    score.innerText = num
}
reset.onclick = () => {
    num = 0;
    score.innerText = num
}



const random= document.getElementsByClassName("random")