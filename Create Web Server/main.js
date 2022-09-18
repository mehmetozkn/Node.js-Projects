/*
Ödev 5

Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.

Kolay gelsin.
*/

const http = require('http');
const port = 3000; 

const server = http.createServer((req, res) => {
    
    const url = req.url
 
        if(url === '/') {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Giris sayfasina hosgeldiniz</h2>")
        }else if(url === '/index'){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Index sayfasina hosgeldiniz</h2>")
        }else if(url === '/hakkimda'){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Hakkimda sayfasina hosgeldiniz</h2>")
        }else if(url === '/iletisim'){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Iletisim sayfasina hosgeldiniz</h2>")
        } 

    console.log('Bir istek gönderildi')
    res.end()
})

server.listen(port, () => {
    console.log(`Server ${port}'da başlatıldı.`)
})