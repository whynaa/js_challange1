let p = 30;
let l = 20.5;
let luas = p * l;
let price = luas * 1500000;

let result = price + (price*15/100);

console.log(`Luas ${luas}`);
console.log(`Harga yang harus dibayarkan Rp. ${price}`);
console.log(`Harga setelah ditambah PPN 15% Rp. ${result}`);