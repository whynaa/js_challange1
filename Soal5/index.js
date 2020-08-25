import Bola from "./bola.js";
import Kerucut from "./kerucut.js";
import Tabung from "./tabung.js";

// Bola Sepak dengan Jari-jari 15 cm
let bolaSepak = new Bola(15);
console.log(`BOLA SEPAK`);
console.log(`Jari-Jari = 15 cm`);
console.log(`Volume = ${bolaSepak.volume()}`);
console.log(`Luas Permukaan = ${bolaSepak.permukaan()}`);

// Kerucut Jalan dengan Jari-jari 20 cm dan tinggi 40 cm
let kerucutJalan = new Kerucut(10, 40);
console.log(`KERUCUT JALAN`);
console.log(`Jari-Jari = 10 cm`);
console.log(`Tinggi = 40 cm`);
console.log(`Volume = ${kerucutJalan.volume()}`);
console.log(`Luas Selimut = ${kerucutJalan.selimut()}`);
console.log(`Luas Permukaan = ${kerucutJalan.permukaan()}`);

// Gelas Tabung dengan Jari-jari 15/2 cm dan tinggi 50 cm
let gelas = new Tabung(15/2, 50);
console.log(`GELAS`);
console.log(`Jari-Jari = 7,5 cm`);
console.log(`Tinggi = 50 cm`);
console.log(`Volume = ${gelas.volume()}`);
console.log(`Luas Selimut = ${gelas.selimut()}`);
console.log(`Luas Permukaan = ${gelas.permukaan()}`);
