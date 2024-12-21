// var a = 5;
// a = 10
// a = a + 10
// a += 10
// a += a %=2
// alert(a);

// İşlem Önceliği

// var a= (8 + 2) * 4
// var a = (8+ 2) * 4 // nu şekilde 40
// var otrtalama = (60 + 70 + 30) / 3
// alert(ortalama)

// Kullanıcıdan bilgi almak için prompt fonksiyonu kullanılır
// Kullanıcının verdiği bilgi sayı bile olsa string olarak kabul edilir

var name = prompt("Adın Ne?");
var note1 = prompt("1. Sınav Notun Ne?");
var note2 = prompt("2. Sınav Notun Ne?");

// Integer (Int - Tam Sayı) Ayıklayıcı

note1 = parseInt(note1);
note2 = parseInt(note2);

var ortalama = (note1 + note2) / 2;

console.log("Merhaba, " + name);
console.log("Not Ortalaması: " + ortalama);

// 2 adet dersin ikişer sınav notunu alın.
// Derslerin adını almayı unutmayın.
// Bu iki dersin not ortalamasını hesaplayın.
// Ardından öğrencinin genel ortalamasını hesaplayın.
// Öğrencinin adını alın ve en sonunda notları konsola yazdırın
