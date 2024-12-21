ad = prompt("Adınız Nedir?")

var ders_1_ad = prompt("1. Dersin adı nedir?")
var ders_1_not_1 = prompt ("1. Dersin 1. Notu kaçtır?")
var ders_1_not_2 = prompt ("1. Dersin 2. notu kaçtır?")
ders_1_not_1 = parseInt(ders_1_not_1)
ders_1_not_2 = parseInt(ders_1_not_2)
var ders_1_ortalama = (ders_1_not_1 + ders_1_not_2) / 2

var ders_2_ad = prompt("2. Dersin adı nedir?")
var ders_2_not_1 = prompt("2. Dersin 1. notu kaçtır?")
var ders_2_not_2 = prompt("2. Dersin 2. notu kaçtır?")
ders_2_not_1 = parseInt(ders_2_not_1)
ders_2_not_2 = parseInt(ders_2_not_2)
var ders_2_ortalama = (ders_2_not_1 + ders_2_not_2) / 2

var genel_ortalama = (ders_1_ortalama + ders_2_ortalama) / 2

console.log("Merhaba ", ad);
console.log(ders_1_ad, " dersinin ortalaması: ", ders_1_ortalama);
console.log(ders_2_ad, " dersinin ortalaması: ", ders_2_ortalama);
console.log("Yıl Sonu Ortalaması", genel_ortalama);