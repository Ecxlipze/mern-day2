const products = [
 {name:"Laptop", price:1000},
 {name:"Phone", price:500},
 {name:"Tablet", price:300}
];

const prices = products.map(p => p.price);

const expensive = products.filter(p => p.price > 400);

const total = prices.reduce((sum,p)=> sum+p,0);

console.log("Prices:",prices);
console.log("Expensive:",expensive);
console.log("Total:",total);