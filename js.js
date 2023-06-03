let n = Number(prompt("nhap vao so n:"));

for (let i = 0; i <= n; i++) {
    if(i % 2 == 0){
        console.log("so chan :" + i);
    }
}
console.log("--------")

for (let i = 0; i <= n; i++) {
    if(i % 2 != 0){
        console.log("so le: "+ i );
    }
}
console.log("--------")
console.log("chuyen sang he co so 2: " + parseInt(n, 10).toString(2));
let giaithua = 1;
for(let i = 1; i <= n; i++){
    giaithua *= i;
    console.log(giaithua);
}
console.log("--------")
let sum = 0;
for(let i = 1; i <= n; i++){
    sum += i;
    console.log(sum);
}
console.log("--------")
let soUoc = 0
for(let i = 1; i <= n; i++){
    if(n % i == 0){
        soUoc++;
        console.log(soUoc);
    }
}
console.log("--------")
flag = true;
for(let i = 3; i < n; i+=2){
    if(n % i == 0){
        flag = false;
    }
    else if(n % 2 == 0){
        flag = false;
    }
    else if(n == 2){
        flag = true;
    }
    if(flag == true){
        console.log(n + " la so nto")
    }
    else{
        console.log(n + " ko la so nto")
    }
    
}
console.log("--------")

