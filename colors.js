const colors = ['yellow','blue','red','orange'];
let total = 1;
while (total <= 4){
   console.log( colors[total] );
    total++;
}
console.log(colors.length);
for (let i = 1; i <= colors.length -1; i++){
    console.log(colors[i]);
}
colors.forEach(element => console.log(element));

// een whileloop neemt 6 regels in
// een forloop neemt 3 regels in
// een forEach method neemt 1 regel in
//For each heeft het voordeel dat het kort geschreven wordt. i.p.v. een condition te bepalen, gebruik je alleen element
// 

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}