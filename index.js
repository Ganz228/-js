let x = Number(prompt("Введите x ="));
let c = +prompt("Введите  =");
let y = +prompt("Введите y =");
let z = +prompt("Введите z =");
let h;

if(t * z >0 && x > 0){
    let minEL = y;

    if(minEL > z){
        minEL = z;
    }

    maxEL = c;

     if (maxEL < Math.sqrt(x)){
        maxEL = Math.sqrt(x)
    }

    if (maxEL < minEL){
        maxEL = minEL
    }

    h = maxEL
} else if(y *z < 0 && x > 0){
    let minEL = Math.pow(y, 2);

    if (minEL > x){
        minEL = x;
    }

    h = minEL;
} else{
    h = 1
}

onsole.log(h);
