const { error } = require('console')
const fs = require('fs')
const path = require('path')

fs.mkdirSync // sinxron
fs.mkdir     // asinxron
// !! async usulida yozish tavsiya etiladi
// masalan

// fs.mkdir(path.join(__dirname,  'templates'), err=>{
//     if(err) throw new Error()

// console.log('created file template succes fully')
// })

// `bu funksiya bizga templates degan papka yaratib berdi`

// fs.mkdir(path.join(__dirname , 'notes'), err=>{
//     if(err) throw new Error()
//     console.log('succes fully');
// })

fs.writeFile(path.join(__dirname, 'notes', 'december.txt'), 'create new folder', err => {
    if (err) throw new Error()
    console.log('file was created succes fully');

    fs.appendFile(path.join(__dirname, 'notes', 'december.txt'), ' file was changed succes fully', err => {
        if (err) throw new Error()
        console.log('file was changed succes');

        fs.readFile(path.join(__dirname, 'notes', 'december.txt'), 'utf-8', (err, data) => {
            if (err) throw new Error()
            console.log(data);
        })
        //bu xolatda esa fileda bo'lgan xamma malumotlarni olishimz mumkin
    })
})








fs.readFile(path.join(__dirname, 'notes','december.txt'),'utf-8', (err , data)=>{
    if(err) throw new Error()
    console.log(data);
})

// shu xolatda ko'rinishi bo'lsa faylda oldin bo'lgan yani push bo'lmagan xolatdagi valueni chqazb beradi 