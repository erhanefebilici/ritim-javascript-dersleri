var cars = ["BMW", "Mercedes", "Audi", "Fiat"]

//son elemanı yönetmek için
cars.push("Volvo"); //sonuna ekler
cars.pop(); //son elemanı siler

//ilk elemanı yönetmek için (Dizinin başına etki etmek daha fazla performans harcatır)
cars.unshift("Opel"); //ilk başa ekler
cars.shift(); // ilk baştan siler

//FIFO (First In First Out) - İlk Giren İlk Çıkar - (Queue - Kuyruk) Örnek: Ekmek Kuyruğu
cars.push() //eklerken
cars.shift() //silerken

//LIFO (Last In First Out) Son Giren İlk Çıkar (Stack) - Örnek: Üst Üste Dizilmiş Yıkancak Tabaklar
cars.push() //eklerken
cars.pop() //silerken