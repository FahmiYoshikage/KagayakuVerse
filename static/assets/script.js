// Fungsi simpl untuk melakukan alert
function greet() {
    alert('Selamat Siang')
}
// greet();

// Mendapatkan elemen dengan id 'tahun'
var tahunElement = document.getElementById('kopi-kanan');
  
// Mendapatkan tahun saat ini
var tahunSaatIni = new Date().getFullYear();

// Memasukkan tahun saat ini ke dalam elemen span
tahunElement.textContent = tahunSaatIni;


//fungsi untuk  mengubah warna border apabilla di tekan
function changeColor(elemen) {
    elemen.style.borderColor = "red";
    elemen.style.color = "green";
}

document.querySelectorAll('.border-pulsa').forEach(div => {
    div.addEventListener('click', function() {
      // Menghapus class active dari semua child div
      document.querySelectorAll('.border-pulsa').forEach(div => div.classList.remove('border-pulsa-activate'));
      
      // Menambahkan class active ke div yang diklik
      this.classList.add('border-pulsa-activate');
      
      // Mendapatkan nama paket dan harga dari data attributes
      const packageName = this.getAttribute('data-name');
      const packagePrice = this.getAttribute('data-price');
      
      // Menampilkan nama paket dan harga di resultDiv
      document.getElementById('packageName').textContent = packageName;
      document.getElementById('packagePrice').textContent = packagePrice;
    });
  });

// Fungsi untuk mengubah border namun dengan sedikit logika
// let elemenYangSedangDitekan = null; // Menyimpan referensi ke elemen yang sedang ditekan

// function ubahWarnaBorder(elemen) {
//     if (elemenYangSedangDitekan !== null) {
//       elemenYangSedangDitekan.style.borderColor = "#B9AEC5"; // Mengembalikan warna border ke semula
//     }
//     elemen.style.borderColor = "yellow"; // Mengubah warna border menjadi merah pada elemen yang ditekan
//     elemenYangSedangDitekan = elemen; // Menyimpan elemen yang sedang ditekan
// }


// const divs = document.querySelectorAll('.divToClick');

// divs.forEach(div => {
//     div.addEventListener('click', function() {
//       // Menghapus border merah dari div yang sebelumnya terpilih (jika ada)
//       const selectedDiv = document.querySelector('.divToClick.red-border');
//       if (selectedDiv) {
//         selectedDiv.classList.remove('red-border');
//       }

//       // Menambahkan border merah pada div yang baru terpilih
//       this.classList.add('red-border');
//     });
// });



// untuk slider
