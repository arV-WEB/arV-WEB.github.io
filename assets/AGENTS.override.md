# Xylitol Website Override

## Scope
Instruksi di file ini meng-override aturan umum untuk bagian visual, aset, dan penyesuaian implementasi pada proyek Xylitol.

## Prioritas visual
- Ikuti mockup yang sudah dibuat sebagai referensi utama
- Pertahankan nuansa brand Xylitol yang cerah, fresh, dan modern
- Jangan ubah karakter visual menjadi terlalu formal atau terlalu gelap
- Hero home dan contact harus terasa satu keluarga desain

## Aset gambar
- Gunakan aset yang sudah tersedia di folder proyek
- Jangan rename file gambar tanpa alasan yang jelas
- Gunakan PNG transparan untuk cutout produk
- Gunakan JPG untuk screenshot mockup atau foto produk yang butuh latar penuh
- Jangan memperbesar gambar melebihi ukuran aslinya tanpa pengaturan `max-width`

## Layout home
- Hero section harus tetap dominan dan rapi
- Produk, testimonial, dan footer harus mengikuti ritme visual yang sama
- Card harus rounded dan diberi shadow lembut
- Spasi antar section harus lega dan tidak sesak

## Navbar behavior
- Hover pada item navbar harus menjadi putih
- State aktif harus tetap jelas
- Navigasi harus responsif di layar kecil

## Tombol dan form
- Tombol utama harus konsisten dengan brand color
- Input form harus rounded, bersih, dan mudah dibaca
- Gunakan style form yang sejalan dengan card di landing page

## Interaksi khusus
- `Explore Flavors` dapat diarahkan ke section produk/flavors
- `Buy Now` dapat diarahkan ke section pembelian, form, atau halaman produk
- `Price Range` harus memfilter produk berdasarkan harga
- Search icon harus menjalankan pencarian berdasarkan nama/flavor produk
- Semua aksi harus terasa nyata, bukan tombol mati

## About Us
- Bila prototype final memakai satu halaman yang memuat kontak, `About Us` boleh diarahkan ke section atau halaman Contact Us
- Jika dibuat halaman terpisah, isi tetap harus selaras dengan brand dan tidak bertabrakan dengan halaman Contact

## Bootstrap usage
- Bootstrap dari `dist` harus tetap menjadi fondasi utama
- Gunakan custom CSS hanya untuk:
  - warna brand
  - radius
  - shadow
  - hover state
  - penyesuaian tipografi
- Jangan menumpuk terlalu banyak utility class sampai markup sulit dibaca

## Output target
- Website harus siap dipakai di desktop, tablet, dan mobile
- Tampilan harus tetap stabil di semua breakpoint
- Hasil akhir harus cocok untuk GitHub Pages