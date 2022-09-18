/*
Ödev 4
FS File System Modülü

Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.

Kolay gelsin.
*/

var fs = require('fs');

fs.writeFile('file.json', '{"name": "Name 1 ", "salary": 1000}', err =>{
    if(err) console.log(err);

fs.readFile('file.json', (err, data) => {
    if(err) console.log(err);
    console.log(data);
})

fs.appendFile('file.json', '\n{"name": "Name 2", "salary": 2000}', (err) => {

})

fs.unlink('file.json', (err) =>{
    if(err) console.log(err);
})

});