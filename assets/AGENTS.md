# Xylitol Website Project

## Tujuan
Bangun website promosi produk Lotte Xylitol yang:
- responsif dari HP sampai PC
- konsisten dengan mockup yang sudah dibuat
- modern, bersih, rounded, dan ringan
- memiliki halaman: Home, Sign In, Sign Up, Contact Us, dan About Us

## Stack wajib
- HTML
- CSS
- JavaScript
- Bootstrap dari folder `dist` sebagai basis layout dan komponen utama

## Aturan desain
- Pertahankan identitas visual Xylitol: dominan biru muda, putih, dan coklat gelap untuk aksen
- Gunakan layout yang clean, modern, dan tidak penuh
- Gunakan border-radius besar untuk card, button, input, dan container
- Hindari tampilan terlalu tajam atau kaku
- Semua section harus tampak selaras antar halaman

## Aturan responsive
- Gunakan `%`, `flex`, `grid`, `vw`, dan `rem` untuk layout utama
- Gunakan `px` hanya untuk detail kecil seperti:
  - border
  - icon
  - shadow
  - radius
- Jangan hardcode lebar besar seperti `1200px` tanpa `max-width`
- Gunakan media query untuk tampilan mobile, tablet, dan desktop

## Bootstrap
- Gunakan Bootstrap dari folder `dist` semaksimal mungkin
- Prioritaskan class Bootstrap untuk:
  - grid
  - spacing
  - tombol
  - navbar
  - form
  - card
- Custom CSS hanya untuk penyesuaian brand dan detail visual khusus

## Struktur file
- `index.html`
- `signin.html`
- `signup.html`
- `contact.html`
- `about.html`
- `css/style.css`
- `js/main.js`
- `dist/` untuk Bootstrap dan aset framework pendukung

## Navigasi
- Menu navbar harus konsisten di semua halaman
- Hover pada menu:
  - Home
  - Flavors
  - Benefits
  - About Us
  harus berubah menjadi putih
- Tombol utama seperti `Sign up` dan `Sign In` harus tetap jelas dan konsisten

## Perilaku halaman
- `About Us` boleh diarahkan ke halaman atau section yang berisi informasi kontak bila itu sesuai prototype final
- `Contact` harus menampilkan form dan informasi kontak yang relevan
- Setiap halaman harus tetap bisa diakses sendiri tanpa merusak alur navigasi

## Interaksi wajib
- `Explore Flavors` harus memiliki aksi
- `Buy Now` harus memiliki aksi
- `Price Range` harus bisa digunakan sebagai filter atau kontrol
- Icon search harus menjalankan pencarian atau filter produk
- Aksi bisa berupa scroll ke section, filter kartu produk, atau trigger pencarian sederhana

## Konten produk
- Tampilkan produk Xylitol sesuai aset yang tersedia
- Gunakan gambar produk yang sudah ada di folder aset
- Jaga rasio gambar agar tidak pecah atau terdistorsi

## Kualitas implementasi
- Kode harus rapi, modular, dan mudah dibaca
- Gunakan semantic HTML
- Hindari duplikasi kode yang tidak perlu
- Pastikan semua link, tombol, dan form bekerja
- Pastikan layout tidak rusak saat ukuran layar berubah