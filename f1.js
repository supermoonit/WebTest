const o = {name: "Jerry"};
let arr16 = [1, 5, "a", o, true, 5,[1, 2], "9"];
console.log(o);
console.log(arr16);

 console.log(arr16.indexOf(5));
 console.log(arr16.lastIndexOf(5));
 console.log(arr16.indexOf("a"));
 console.log(arr16.lastIndexOf("a"));
 console.log(arr16.indexOf({name: "Jerry"}));
 console.log(arr16.indexOf(o));
 console.log(arr16.indexOf([1, 2]));//
 console.log(arr16.indexOf("9"));
 console.log(arr16.indexOf(9));

 console.log(arr16.indexOf("a", 5));//
 console.log(arr16.indexOf(5, 5));//
 console.log(arr16.indexOf(5, 4));//
 console.log(arr16.indexOf(true, 3));//
console.log("----------------------------------");
 let arr17 = [{id:5, name:"judith"},{id:7, name:"Francis"}];
 console.log(arr17);

 console.log(arr17.findIndex(o=>o.id===5));
 console.log(arr17.findIndex(o=>o.name==="Francis"));
 console.log(arr17.findIndex(o=>o===3));
 console.log(arr17.findIndex(o=>o.id===17));

 console.log(arr17.find(o=>o.id===5));
 console.log(arr17.find(o=>o.id===2));

 let arr18 = [1,17,16,5,4,16,10,3,49];
 console.log(arr18.find((x, i)=>i>2&&Number.isInteger(Math.sqrt(x))));//
 console.log("----------------------------------");

let arr19 = [5,7,12,15,17];
console.log(arr19.some(x=>x%2 === 0));
console.log(arr19.some(x=>Number.isInteger(Math.sqrt(x))));

let arr20 = [4,6,16,36];
console.log(arr20.every(x=>x%2===0));
console.log(arr20.every(x=>Number.isInteger(Math.sqrt(x))));
console.log("----------------------------------");

let cart = [{name: "Widget", price: 9.95},{name: "Gadget", price:22.95}];
console.log(cart);
let names = cart.map(x=>x.name);
console.log(names);
let prices = cart.map(x=>x.price);
console.log(prices);
let discountPrices = prices.map(x=>x * 0.8);
console.log(discountPrices);

let items = ["Widget", "Gadget"];
let prices2 = [9.95, 22.95];
console.log(items);
console.log(prices2);

let cart2 = items.map((x, i)=>({name: x, price:prices[i]}));
console.log(cart2);
console.log("---------------------------------------");

let data = [3.3, 5 , 7.2, 12, 4, 6, 10.3];
let stats = data.reduce((a,x)=>{
    a.N++;
    let delta = x - a.mean;
    a.mean += delta/a.N;
    return a;

},{N:0, mean: 0,M2: 0});
if(stats.N > 2){
    stats.variance = stats.M2 / (stats.N - 1);
    stats.stdev = Math.sqrt(stats.variance);
}
console.log(stats);
