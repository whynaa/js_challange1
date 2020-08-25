let tinggi = 170/100;
let berat = 90;

let bmi = berat / Math.pow(tinggi,2);

console.log(`BMI = ${bmi}`);

if (bmi >= 30.0) {
    console.log(`Status Berat Badan: Kegemukan(Obesitas)`);
} else if (bmi >= 25.0) {
    console.log(`Status Berat Badan: Kelebihan Berat Badan`);
} else if (bmi >= 18.5) {
    console.log(`Status Berat Badan: Normal(Ideal)`);
} else {
    console.log(`Status Berat Badan: Kekurangan Berat Badan`);
}