/*
Ödev 3
Daire Modüler Dosyası
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
Kolay gelsin.
*/

const circleArea = (r) => {
  return 3.14 * r * r
}

const circleCircumference = (r) => {
  return r * 3.14 * 2
}

module.exports = {circleArea, circleCircumference};

