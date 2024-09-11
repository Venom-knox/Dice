const dice = document.getElementById(`dice`);
const myLabel = document.getElementById(`myLabel`);

const min=1;
const max=6;
let randomNum;

dice.onclick= function(){
    randomNum= Math.floor(Math.random()* max + min);
    dice.textContent=randomNum;
}

reset.onclick= function(){
    dice.textContent=`ROLL`;
}