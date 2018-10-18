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

console.log("")
console.log("Level 2")
print=""
var rows = 5; 
for(var i=0; i<rows; i++)
{
 for(var k=1; k<=(rows-i);k++)
{
  print +=" "
 }
 for(var j=1; j<=(2*i+1); j++)
 {
  print += "*"
 }
 print += "\n"
}
console.log(print)

console.log("")
console.log("Level 3")
print=""
var rows = 5; 
for(var i=0; i<rows; i++)
{
 for(var k=1; k<=i;k++)
{
  print +=" "
 }
 print +="*** "
 print += 5-i
 print += "\n"
}
console.log(print)