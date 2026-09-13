/**
 * Data Portfolio & Engineering Blog - Jason Christov Kesuma
 * Terpusat dan modular agar mudah diperbarui tanpa menyentuh kode tampilan.
 */

export const personalData = {
  name: "Jason Christov Kesuma",
  role: "Mahasiswa Teknik Informatika",
  tagline: "Mahasiswa Teknik Informatika | Embedded Systems, Firmware & Web3 Enthusiast",
  bio: "Mahasiswa S1 Teknik Informatika di Universitas Ma Chung yang aktif berorganisasi dan mendalami rekayasa firmware, embedded systems, serta arsitektur smart contracts. Memiliki pengalaman langsung memprogram mikrokontroler STM32 & ESP32, analisis ketahanan sinyal noise, dan eksplorasi ekosistem blockchain terdesentralisasi.",
  location: "Malang, Indonesia",
  avatar: "/avatar.svg",
  cvUrl: "/cv-jason-christov-kesuma.pdf",
  
  // Kontak & Media Sosial
  social: {
    email: "jasonchristov@gmail.com",
    linkedin: "https://www.linkedin.com/in/jason-christov-kesuma-a2a19a36b/",
    linkedinHandle: "linkedin.com/in/jason-christov-kesuma-a2a19a36b",
    github: "https://github.com/JasonCK897",
    githubHandle: "github.com/JasonCK897",
    instagram: "https://www.instagram.com/j._chrisk/",
    instagramHandle: "@j._chrisk"
  }
};

export const educationData = {
  institution: "Universitas Ma Chung",
  location: "Malang, Indonesia",
  degree: "Bachelor of Informatics Engineering",
  period: "Agustus 2023 - Agustus 2027 (Expected)",
  gpa: "3.49 / 4.00",
  highlights: [
    "Fokus studi pada Arsitektur Komputer, Pemrograman Sistem Rendah, dan Analisis Algoritma.",
    "Riset mandiri dalam ketahanan noise sinyal mikrokontroler dan telemetri nirkabel IoT.",
    "Aktif dalam kepanitiaan universitas dan riset dosen di laboratorium HMI."
  ]
};

export const skillsData = {
  programming: [
    { name: "C/C++", level: "Lanjutan", icon: "SiCplusplus", category: "Embedded / Systems" },
    { name: "Python", level: "Menengah", icon: "SiPython", category: "General / Data" },
    { name: "Java", level: "Menengah", icon: "FaJava", category: "OOP Architecture" },
    { name: "C#", level: "Menengah", icon: "TbBrandCSharp", category: "App & Unity" },
    { name: "HTML", level: "Lanjutan", icon: "FaHtml5", category: "Web Interface" },
    { name: "CSS", level: "Menengah", icon: "FaCss3Alt", category: "Web Styling" },
    { name: "JavaScript", level: "Menengah", icon: "SiJavascript", category: "Frontend & dApp" },
  ],
  softSkills: [
    "Project Management",
    "Problem Solving",
    "Ketelitian Analisis",
    "Kolaborasi Tim",
    "Kemauan Belajar Mandiri",
    "Adaptive Engineering"
  ]
};

export const experienceData = [
  {
    id: "exp-1",
    role: "Asisten Peneliti",
    organization: "Pusat Studi Human-Machine Interaction (HMI)",
    location: "Malang, Indonesia",
    period: "Februari 2026 - Juli 2026",
    description: "Lembaga riset kampus Universitas Ma Chung yang berfokus menciptakan teknologi inklusif, dengan karya unggulan berupa Mouse Difabel, Sarung Tangan Bahasa Isyarat, serta riset Voice Recognition.",
    highlights: [
      "Berkolaborasi dalam pengujian antarmuka perangkat keras dan akurasi sensor.",
      "Mengembangkan pembacaan sinyal sensor untuk perangkat komputasi inklusif."
    ]
  },
  {
    id: "exp-2",
    role: "Ketua Program Kerja Studi Banding (IF-JOURNEY)",
    organization: "Himpunan Teknik Informatika",
    location: "Surabaya, Indonesia",
    period: "Juni 2026",
    description: "Memimpin delegasi 12 anggota himpunan Teknik Informatika dan berkoordinasi dengan pihak Universitas Surabaya.",
    highlights: [
      "Mengkoordinir 50 peserta gabungan Ubaya & Ma Chung dalam forum pertukaran kurikulum dan teknologi.",
      "Memastikan manajemen logistik dan eksekusi acara berjalan tepat waktu."
    ]
  },
  {
    id: "exp-3",
    role: "Panitia Ma Chung Festival 2025",
    organization: "Universitas Ma Chung",
    location: "Malang, Indonesia",
    period: "Agustus 2025 - Februari 2026",
    description: "Event besar tahunan Universitas Ma Chung dalam rangka penerimaan mahasiswa baru.",
    highlights: [
      "Memimpin dan berkoordinasi dengan 12 anggota tim panitia himpunan Teknik Informatika.",
      "Mengelola operasional teknis acara demi kelancaran orientasi mahasiswa baru."
    ]
  }
];

// 3 Proyek Utama yang Difokuskan (Firmware, Sui Project, AiDiTech)
export const projectsData = [
  {
    id: "proj-firmware",
    title: "Project Shasta: Touch Controller Firmware",
    role: "Firmware & Embedded Developer",
    period: "September 2026",
    category: "firmware",
    description: "Touch Controller Noise Immunity Firmware Suite yang menggabungkan ESP32 Wireless Relay dan STM32 Precision Waveform Synthesizer untuk mensimulasikan dan menganalisis kekebalan sinyal sentuh terhadap interferensi elektromagnetik.",
    tags: ["STM32", "ESP32", "Embedded C++", "Signal Processing", "Firmware", "DAC"],
    features: [
      "Sintesis gelombang presisi tinggi via DAC STM32 untuk injeksi noise frekuensi variabel",
      "Relay telemetri nirkabel real-time menggunakan ESP32 WiFi & BLE stack",
      "Algoritma penyaringan sinyal digital untuk eliminasi false-touch triggers"
    ],
    demoUrl: "",
    repoUrl: "https://github.com/JasonCK897/ProjectShasta-Firmware",
    isPrivate: true,
    image: "/projects/firmware-shasta.svg"
  },
  {
    id: "proj-sui",
    title: "Sui Blockchain dApp: Library System",
    role: "Smart Contract & Web3 Developer",
    period: "November 2025",
    category: "web3",
    description: "Sistem peminjaman buku perpustakaan terdesentralisasi berbasis jaringan blockchain Sui menggunakan bahasa pemrograman Move, dilengkapi antarmuka frontend reaktif untuk koneksi Web3 wallet dan pencatatan status buku on-chain.",
    tags: ["Sui Move", "Blockchain", "Smart Contracts", "React", "TypeScript", "Web3"],
    features: [
      "Smart contract Move berbasis model objek Sui untuk integritas peminjaman buku",
      "Integrasi interaktif dengan Sui Wallet Provider untuk penandatanganan transaksi",
      "Dashboard frontend real-time menampilkan status ketersediaan dan mutasi buku"
    ],
    demoUrl: "https://github.com/JasonCK897/SuiProjekD3-Kel4",
    repoUrl: "https://github.com/JasonCK897/SuiProjekD3-Kel4",
    isPrivate: false,
    image: "/projects/sui-library.svg"
  },
  {
    id: "proj-aiditech",
    title: "AiDiTech: Research Center Portal",
    role: "Anggota Tim Pengembang Web",
    period: "April 2026 - Juni 2026",
    category: "web",
    description: "Website resmi lembaga riset kecerdasan buatan dan teknologi Universitas Ma Chung yang dipimpin oleh Windra Swastika, S.Kom., MT., Ph.D. Menyediakan katalog repositori artikel ilmiah dan dashboard admin untuk kurasi konten landing page.",
    tags: ["PHP", "MySQL", "PHPMyAdmin", "Web Architecture", "Admin Dashboard"],
    features: [
      "Database relasional MySQL untuk katalog publikasi jurnal dan profil peneliti",
      "Dashboard administrasi khusus untuk kurasi artikel dan pengelolaan landing page",
      "Struktur kode modular dan responsif untuk kenyamanan akses civitas akademika"
    ],
    demoUrl: "",
    repoUrl: "https://github.com/JasonCK897",
    isPrivate: false,
    image: "/projects/aiditech.svg"
  }
];

// Blog & Engineering Notes: Ide fitur pengembangan untuk personal blog Jason
export const blogPostsData = [
  {
    id: "post-1",
    title: "Merancang Touch Controller Tahan Noise dengan STM32 & ESP32",
    date: "10 September 2026",
    readTime: "5 menit baca",
    category: "Firmware & Embedded",
    summary: "Catatan rekayasa mengenai cara mengatasi interferensi elektromagnetik pada capacitive touch sensor melalui sintesis noise frekuensi variabel dan digital filtering.",
    content: `Dalam pengembangan perangkat embedded modern, sensor sentuh kapasitif (capacitive touch) seringkali mengalami pembacaan palsu (*false trigger*) akibat noise dari catu daya switching atau radiasi elektromagnetik di sekitar sirkuit.

### 1. Eksperimen Project Shasta
Pada Project Shasta, kami membagi arsitektur pengujian menjadi dua mikrokontroler:
- **STM32 Precision Waveform Synthesizer**: Bertugas menghasilkan injeksi sinyal noise melalui DAC internal berkecepatan tinggi dengan berbagai frekuensi (10 kHz - 500 kHz).
- **ESP32 Wireless Relay**: Membaca respons controller, menghitung Signal-to-Noise Ratio (SNR), dan mengirimkan log telemetri nirkabel secara real-time.

### 2. Teknik Filtering Digital
Kami mengimplementasikan **Moving Median Filter** yang dikombinasikan dengan **Exponential Moving Average (EMA)** pada firmware:
\`\`\`cpp
// Cuplikan logika debounce filter pada STM32/ESP32
float filteredValue = (alpha * rawReading) + ((1.0f - alpha) * previousFilteredValue);
if (abs(filteredValue - baseline) > TOUCH_THRESHOLD) {
    registerValidTouch();
}
\`\`\`
Pendekatan ini berhasil mengurangi fluktuasi noise hingga 78% tanpa menambah latensi respons sentuh yang berarti.`
  },
  {
    id: "post-2",
    title: "Memahami Model Objek Sui Move vs Model Akun EVM",
    date: "22 November 2025",
    readTime: "6 menit baca",
    category: "Blockchain & Web3",
    summary: "Analisis komparatif mengapa model pemrograman berbasis objek pada bahasa Move di Sui memberikan keamanan dan skalabilitas lebih tinggi untuk dApp perpustakaan.",
    content: `Sebagian besar pengembang terbiasa dengan model akun pada EVM (Ethereum Virtual Machine), di mana saldo dan status tersimpan dalam storage kontrak pintar itu sendiri. Namun, Sui Blockchain mengadopsi paradigma baru: **Object-Centric Model**.

### 1. Semantik Objek di Sui Move
Di Sui, setiap entitas (seperti buku dalam sistem dApp perpustakaan kami) adalah objek unik yang memiliki UID (*Globally Unique Identifier*) dan status kepemilikan (*Ownership*):
\`\`\`move
struct Book has key, store {
    id: UID,
    title: String,
    borrower: Option<address>,
    is_available: bool,
}
\`\`\`

### 2. Keuntungan Skalabilitas Paralel
Karena transaksi di Sui mengeksekusi objek secara eksplisit, transaksi yang memodifikasi objek berbeda dapat diproses secara **paralel tanpa antrean global**. Ini membuat biaya gas sangat efisien dan mencegah race-condition secara arsitektural.`
  },
  {
    id: "post-3",
    title: "Arsitektur IoT ESP32: Telemetri Sensor Real-Time ke Web Dashboard",
    date: "15 Juni 2026",
    readTime: "4 menit baca",
    category: "IoT & Fullstack",
    summary: "Praktik terbaik membaca 4 sensor analog-digital secara simultan pada ESP32 dan mengirimkannya ke dashboard web pemantauan air.",
    content: `Membangun perangkat pemantau kualitas air (seperti pada project Aroguard) membutuhkan pembacaan sensor yang stabil dari 4 parameter: suhu, derajat keasaman (pH), kekeruhan (*turbidity*), dan kedalaman air.

### Poin Kunci Keberhasilan:
1. **Kalibrasi Tegangan Referensi**: ESP32 ADC cenderung non-linear di bawah 0.1V dan di atas 3.1V. Penggunaan kalibrasi kurva polinomial pada firmware menghasilkan pembacaan pH yang jauh lebih presisi.
2. **Buffer Telemetri & Non-blocking I/O**: Hindari penggunaan \`delay()\`! Gunakan timer interupsi \`millis()\` atau FreeRTOS task scheduler agar ESP32 tetap responsif melayani request HTTP/MQTT.`
  }
];

export const contactData = {
  email: "jasonchristov@gmail.com",
  linkedin: "https://www.linkedin.com/in/jason-christov-kesuma-a2a19a36b/",
  linkedinHandle: "linkedin.com/in/jason-christov-kesuma-a2a19a36b",
  github: "https://github.com/JasonCK897",
  githubHandle: "@JasonCK897",
  instagram: "https://www.instagram.com/j._chrisk/",
  instagramHandle: "@j._chrisk",
  formspreeEndpoint: "https://formspree.io/f/xpwzgkvo"
};
