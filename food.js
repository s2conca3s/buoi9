var food = ["tom", "cua", "ga", "ca"]
console.log(food)
console.table(food)
const n = Number(prompt("vui long chon mon an vi tri n: 0-tom, 1-cua, 2-ga, 3-ca"))
if(n == 0){
    console.log(food[0])
}
else if(n == 1){console.log(food[1])}
else if(n == 2){console.log(food[2])}
else if(n == 3){console.log(food[3])}
else{console.log(prompt("vui long chon lai mon an vi tri n: 0-tom, 1-cua, 2-ga, 3-ca"))}