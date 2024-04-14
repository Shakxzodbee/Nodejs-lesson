const { log } = require('console');
const path = require('path')

console.log(path.basename(__filename));
// qaysi fileda ishlanyatgan bo'lsa xuddi shu faylni ko'rsatib beradi 

console.log(path.basename(__dirname))
// qaysi papkada ishlanyatgan bo'lsa xuddi shu faylni ko'rsatib beradi


console.log(path.dirname(__filename));
// papkagacha bo'lgan ketma ketlikni aniqlab beradi

console.log(path.dirname(__dirname));
//papkagacha bo'lgan ketma ketlikdan bita oldingi faylni topib beradi

console.log(path.extname(__filename));
//fileni kengaytmasi yani fayl turini aniqlab beradi masalan (.js .html .css .jsx)
console.log(path.extname(__dirname));
// xech qanday malumot qaytarmaydi ( ) <bo'shliq qaytarib beradi

console.log(path.parse(__filename))
// filega oid xamma malumotlarni chiqazib beradi
console.log(path.parse(__filename).root) `file turgan xolati`
console.log(path.parse(__filename).dir)  `papkagacha bo'lgan manzil`
console.log(path.parse(__filename).name) `file nomi`
console.log(path.parse(__filename).ext)  `file kengaytmasi`
console.log(path.parse(__filename).base) `file nomi`

// xuddi shu ko'rinishda alohida chiqazvolsak xam bo'ladi 

console.log(path.join(__filename , 'tempates', 'index.jsx'))
// papkagacha borib papkadan keyin template degan papka ochib uning ichiga index.css degan file ochadi

console.log(path.join(__filename , 'tempates', '/index.jsx'))
// vazifasi bir lekn shu ko'rinishda ishga tushurilsa /index.css ni ishga tushurvoradi