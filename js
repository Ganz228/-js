let arrayaLitera = ["q","w","e","r","t","y","u","i","o","p"];

console.log(arrayaLitera);

let st ="";
let n;


for(let i = 0 ; i < 5; i++){
  n = getRandom(9);

  st +=  arrayaLitera[n];

}

console.log(st);
 
let pleyerLitera = prompt("Вевдите строку" + st);

sravnenie(st , pleyerLitera);

function getRandom (i) {
  return Math.floor(Math.random() * i);

}

function sravnenie(stA , pleyerLiteraA) {
  if (stA == pleyerLiteraA) {
    alert("Вы выиграли");
  } else {
    alert("Повторите заново");
  }

  
}
