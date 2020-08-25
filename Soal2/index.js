let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10}
];

let pricePerItem = barang.map((item) => {
   let total = item.harga * item.jumlah
   return total
});

let totalPrice = pricePerItem.reduce((x, y) => x + y);

console.log(pricePerItem);
console.log(`Harga yang harus dibayarkan adalah Rp.${totalPrice}`);