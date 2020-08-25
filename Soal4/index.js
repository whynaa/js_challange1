/**
 * Rumus Deret Geometri
 * Jika r > 1
 * Sn = a(r^n - 1) / (r-1)
 * Jika r < 1
 * Sn = a(1 - r^n) / (1-r)
 */

 let a = 4;
 let r = 3;

 //Menggunakan rumus
 let sn = (a*(Math.pow(r,10) - 1)) / (r - 1);

 console.log(`Menggunakan Rumus`);
 console.log(`Sn = ${sn}`);

 let sum = 0;
 let n = 0;
 //Menggunakan Perulangan
 for (let i = 0; i < 10; i++){
     n = a*Math.pow(r,i);
     sum += n;
 }
 console.log(`Menggunakan Perulangan`);
 console.log(`Sn = ${sum}`);
