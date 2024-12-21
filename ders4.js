var dersAdlari = []
var notlar = []
var dersAdi = ""
var not = 0

var dersAdi = prompt("1. Dersin Adı nedir?")
dersAdlari.push(dersAdi)
not = parseFloat(prompt("1. Dersin 1. Notunu giriniz?"))
notlar.push(not)
not = parseFloat(prompt("1. Dersin 2. Notunu giriniz?"))
notlar.push(not)

dersAdi = prompt("2. Dersin adı nedir?")
dersAdlari.push(dersAdi)
not = parseFloat(prompt("2. Dersin 1. Notunu giriniz?"))
notlar.push(not)
not = parseFloat(prompt("2. Dersin 2. Notunu giriniz?"))
notlar.push(not)

ortalama = (notlar[0] + notlar[1] + notlar[2] + notlar[3]) / 4

console.log(ortalama);