# Website Portfolio Pribadi - Jason Christov Kesuma

Single Page Application (SPA) website portfolio modern dan performan untuk **Jason Christov Kesuma**, Mahasiswa S1 Teknik Informatika di Universitas Ma Chung dengan fokus keahlian pada *Embedded Systems*, *Firmware*, dan *IoT*.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/si`, `react-icons/fa6`, `react-icons/tb`) & [Lucide React](https://lucide.dev/)
- **Forms**: Direct API Formspree / EmailJS / Mailto fallback
- **Typography**: Space Grotesk (Headline) & Inter (Body) via Google Fonts

---

## Fitur Utama

1. **Double Trail-Orbit Animation**:
   - Animasi orbit hero 2 cincin bertingkat dengan efek gradasi memudar (*conic-gradient* + *radial mask*).
   - Ring 1 (Luar): Putaran searah jarum jam (#1B3B6F).
   - Ring 2 (Dalam): Putaran berlawanan arah jarum jam (#8FB8E0).
   - Mendukung aksesibilitas `prefers-reduced-motion`.
2. **Design Tokens Terstandarisasi**:
   - Background Body: `#F7F4EE` (Cream)
   - Frame (Navbar & Footer): `#1B2A4A` (Navy tua)
   - Aksen Utama: `#1B3B6F`
   - Aksen Sekunder: `#8FB8E0`
   - Section Contact menggunakan latar `#EFEAE0` (terpisah tegas dari footer navy).
3. **Pemisahan Data & Logika**:
   - Seluruh konten dan informasi profil tersimpan di [`src/data/portfolio.js`](src/data/portfolio.js). Anda dapat memperbarui informasi tanpa perlu mengubah kode komponen.
4. **Dark / Light Mode**:
   - Dilengkapi toggle mode gelap/terang yang tersimpan di `localStorage` dan otomatis mendeteksi preferensi sistem.
5. **Tombol "Lihat CV"**:
   - Langsung membuka file CV PDF asli di tab baru (`/cv-jason-christov-kesuma.pdf`).

---

## Menjalankan Project Secara Lokal

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 ke atas disarankan).

1. Buka terminal di folder `Website`:
   ```bash
   cd D:\PersonaWebsite\Website
   ```

2. Jalankan server pengembang (development server):
   ```bash
   npm run dev
   ```

3. Buka browser di [http://localhost:3000](http://localhost:3000).

---

## Build untuk Produksi

Untuk menghasilkan file statis siap produksi:
```bash
npm run build
```
File hasil build akan berada di folder `dist/`.

Untuk melihat preview hasil build produksi secara lokal:
```bash
npm run preview
```

---

## Panduan Penyesuaian (Customization)

| Bagian | Lokasi File | Keterangan |
|---|---|---|
| **Data Profil & Teks** | `src/data/portfolio.js` | Edit nama, bio, data pendidikan, pengalaman, proyek, dan kontak |
| **Foto Profil Asli** | `public/avatar.png` | Simpan foto profil Anda dengan format PNG/WebP berukuran persegi |
| **Tautan GitHub & Instagram** | `src/data/portfolio.js` (`social`) | Masukkan URL profil GitHub dan Instagram |
| **Screenshot Proyek** | `public/projects/` | Tambahkan screenshot proyek Aroguard, AiDiTech, dan DinoVerse |
| **Formulir Kontak (Formspree)** | `src/data/portfolio.js` (`formspreeEndpoint`) | Daftarkan form di [Formspree](https://formspree.io/) dan masukkan endpoint ID Anda |
| **File CV PDF Terbaru** | `public/cv-jason-christov-kesuma.pdf` | Ganti file PDF ini jika ada pembaruan CV |

---

## Deployment ke Vercel / Netlify

Website ini 100% statis (SPA) dan siap di-deploy langsung:
- **Vercel**: Hubungkan repository GitHub, pilih direktori root `Website`, framework preset `Vite`.
- **Netlify**: Build command `npm run build`, publish directory `dist`.
