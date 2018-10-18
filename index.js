// let print=""
// for (i=1 ; i<=5 ; i++){
//     print=print+"*"
//     console.log(print)
// }
console.log("Level 0")
let print=""
for(j=1;j<=5;j++){
    for(k=j;k>=1;k--){
        print=print+"* "
        }
        console.log(print)
        print=""
}

console.log("")
console.log("Level 1")
print=""
for(j=1;j<=5;j++){
    for(k=j;k<=5;k++){
        print=print+"* "
        }
        console.log(print)
        print=""
}
