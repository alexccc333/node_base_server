const fs = require('fs')
const path = require('path')
//File system

// fs.mkdir(path.join(__dirname,'notes'),(err)=>{
//     if(err)throw err
//     console.log('Папка была создана');
// })



// fs.writeFile(path.join(__dirname,'notes','mynotes.txt'),
//     'Helloy world',
//     (err)=>{
//         if(err) throw err
//         console.log('Фаил был создан');

//         fs.appendFile(
//             path.join(__dirname,'notes','mynotes.txt'),
//             'From append',
//             (err)=>{if(err)throw err}
            
//         )
//         fs.readFile(
//             path.join(__dirname,'notes','mynotes.txt'),
//             'utf-8',
//             (err,data)=>{
//                 if(err) throw err
//                 // console.log(Buffer.from(data).toString());
//                 console.log(data);
                
//             }
//         )
//     }
// )


fs.rename(
    path.join(__dirname,'notes','mynotes.txt'),
    path.join(__dirname,'notes','notes.txt'),
    (err)=>{
        if(err)throw err
        console.log('фаил переменовам');
        
    }
)

