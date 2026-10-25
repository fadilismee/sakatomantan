
## Update 25 Okt 2026 (malam) — Mode produktif + donasi

- **Blocks: kartu logo diganti Mode produktif:** kartu ikon
  aplikasi di Blocks diganti screenshot Beranda kiriman user
  (`public/zeronotch/beranda.png`, 1094×455) dengan judul
  "Mode produktif" — Beranda kerja: pintasan, Pomodoro 25:00,
  progres hari, tugas, catatan, dan kalkulator. Blocks tetap
  6 item (Mode Kuliah, Musik, Clipboard, Mode produktif,
  Kalender UT, Fokus belajar), semua screenshot asli.
- **Donasi: hanya 3 placeholder, semua klik ke cebanmatters:**
  daftar donatur di `src/features/sponsor/data.tsx` dipangkas
  dari 8 jadi 3 (Nama Donatur 1–3), jadi grid Thanks sekarang
  2×2: 3 donatur + 1 sel "+" donasi. Kartu donatur sudah
  mengarah ke cebanmatters.com/zeronotch (dengan UTM), sel "+"
  juga ke cebanmatters (SPONSORSHIP_URL), dan tombol bawah
  diubah dari "Semua donatur" (/sponsors) jadi "Jadi donatur"
  ke cebanmatters (buka tab baru). Halaman /sponsors sendiri
  tetap ada dan bisa diakses lewat nav Thanks.
- **Coretan/doodle di panel donasi:** di pojok kanan atas
  panel ada coretan garis gelombang + 2 bintang kecil, dan
  sel "+" donasi dilingkari coretan tangan — keduanya
  pointer-events-none (tidak menghalangi klik) dan aria-hidden.
  Note tulisan tangan lama ("donate, letakkan namamu di sini")
  tetap ada di kanan panel.
