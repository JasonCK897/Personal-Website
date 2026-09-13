/**
 * Data Portfolio & Engineering Blog - Jason Christov Kesuma
 * Versi ringkas, padat, dan fokus pada visual serta interaksi langsung.
 */

export const personalData = {
  name: "Jason Christov Kesuma",
  role: "Mahasiswa Teknik Informatika",
  tagline: "Embedded Systems • Firmware Engineering • Web3",
  bio: "Mahasiswa S1 Teknik Informatika di Universitas Ma Chung (Malang). Berfokus pada rekayasa firmware mikrokontroler STM32 & ESP32, mitigasi noise sinyal, serta smart contract di ekosistem Sui.",
  location: "Malang, Indonesia",
  avatar: "/avatar.svg",
  cvUrl: "/cv-jason-christov-kesuma.pdf",
  
  social: {
    email: "mailto:jasonchristov@gmail.com",
    linkedin: "https://www.linkedin.com/in/jason-christov-kesuma-a2a19a36b/",
    github: "https://github.com/JasonCK897",
    instagram: "https://www.instagram.com/j._chrisk/",
  }
};

export const educationData = {
  institution: "Universitas Ma Chung",
  location: "Malang, Indonesia",
  degree: "S1 Teknik Informatika",
  period: "2023 - 2027 (Expected)",
  gpa: "3.49 / 4.00",
  highlights: [
    "Fokus: Arsitektur Komputer, Pemrograman Sistem Rendah, dan Analisis Algoritma.",
    "Riset mandiri: Noise immunity mikrokontroler & telemetri nirkabel IoT.",
    "Aktif dalam riset Human-Machine Interaction (HMI) Ma Chung."
  ]
};

export const skillsData = {
  programming: [
    { name: "C/C++", level: "Lanjutan", icon: "SiCplusplus", category: "Embedded" },
    { name: "Python", level: "Menengah", icon: "SiPython", category: "Data / Tools" },
    { name: "Java", level: "Menengah", icon: "FaJava", category: "OOP" },
    { name: "C#", level: "Menengah", icon: "TbBrandCSharp", category: "Systems" },
    { name: "HTML", level: "Lanjutan", icon: "FaHtml5", category: "Web" },
    { name: "CSS", level: "Menengah", icon: "FaCss3Alt", category: "Styling" },
    { name: "JavaScript", level: "Menengah", icon: "SiJavascript", category: "Web / dApp" },
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
    location: "Malang",
    period: "Feb 2026 - Jul 2026",
    description: "Riset kampus untuk teknologi inklusif: Mouse Difabel, Sarung Tangan Bahasa Isyarat, dan pengujian sinyal sensor.",
  },
  {
    id: "exp-2",
    role: "Ketua Program Kerja IF-JOURNEY",
    organization: "Himpunan Teknik Informatika",
    location: "Surabaya",
    period: "Jun 2026",
    description: "Memimpin 12 anggota tim dalam studi banding ke Universitas Surabaya yang diikuti 50 peserta gabungan.",
  },
  {
    id: "exp-3",
    role: "Panitia Ma Chung Festival 2025",
    organization: "Universitas Ma Chung",
    location: "Malang",
    period: "Agu 2025 - Feb 2026",
    description: "Mengelola operasional teknis dan koordinasi antar-divisi kepanitiaan penerimaan mahasiswa baru.",
  }
];

// 3 Proyek Utama (Ringkas, Padat, Visual-First)
export const projectsData = [
  {
    id: "proj-firmware",
    title: "Project Shasta: Touch Controller Firmware",
    role: "Firmware Developer",
    period: "Sep 2026",
    category: "firmware",
    // 1 kalimat padat:
    description: "Suite pengujian noise immunity sensor sentuh menggunakan STM32 DAC waveform synthesizer dan ESP32 wireless telemetry relay.",
    tags: ["STM32", "ESP32", "Embedded C++", "DSP"],
    metrics: "12-bit DAC • Noise Immunity • Wireless Telemetry",
    demoUrl: "",
    repoUrl: "https://github.com/JasonCK897/ProjectShasta-Firmware",
    isPrivate: true,
    image: "/projects/firmware-shasta.svg"
  },
  {
    id: "proj-sui",
    title: "Sui Blockchain: Library dApp",
    role: "Move & Web3 Developer",
    period: "Nov 2025",
    category: "web3",
    // 1 kalimat padat:
    description: "Sistem perpustakaan terdesentralisasi on-chain berbasis model objek bahasa Move pada blockchain Sui dengan integrasi React & Sui Wallet.",
    tags: ["Sui Move", "Blockchain", "React", "TypeScript"],
    metrics: "Sui Testnet • Sub-second Finality • Web3 Wallet",
    demoUrl: "https://github.com/JasonCK897/SuiProjekD3-Kel4",
    repoUrl: "https://github.com/JasonCK897/SuiProjekD3-Kel4",
    isPrivate: false,
    image: "/projects/sui-library.svg"
  },
  {
    id: "proj-aiditech",
    title: "AiDiTech: Research Portal & CMS",
    role: "Web Developer",
    period: "Apr 2026 - Jun 2026",
    category: "web",
    // 1 kalimat padat:
    description: "Portal resmi pusat studi riset Universitas Ma Chung untuk repositori jurnal ilmiah dan manajemen konten landing page.",
    tags: ["PHP", "MySQL", "PHPMyAdmin", "CMS"],
    metrics: "Ma Chung Research • Database Relasional • Dashboard Admin",
    demoUrl: "",
    repoUrl: "https://github.com/JasonCK897",
    isPrivate: false,
    image: "/projects/aiditech.svg"
  }
];

export const blogPostsData = [
  {
    id: "post-1",
    title: "Merancang Touch Controller Tahan Noise dengan STM32 & ESP32",
    date: "10 Sep 2026",
    readTime: "5 mnt",
    category: "Firmware & Embedded",
    summary: "Catatan mengenai mitigasi noise EMI pada capacitive touch sensor melalui injeksi frekuensi variabel dan digital filtering.",
    content: `Dalam pengembangan perangkat embedded modern, sensor sentuh kapasitif (capacitive touch) seringkali mengalami pembacaan palsu (*false trigger*) akibat noise dari catu daya switching atau radiasi elektromagnetik di sekitar sirkuit.

### 1. Arsitektur Project Shasta
Pada Project Shasta, kami membagi arsitektur pengujian menjadi dua mikrokontroler:
- **STM32 Precision Waveform Synthesizer**: Menghasilkan injeksi sinyal noise melalui DAC internal berkecepatan tinggi dengan berbagai frekuensi (10 kHz - 500 kHz).
- **ESP32 Wireless Relay**: Membaca respons controller, menghitung Signal-to-Noise Ratio (SNR), dan mengirimkan log telemetri nirkabel secara real-time.

### 2. Teknik Filtering Digital
Implementasi **Moving Median Filter** dikombinasikan dengan **Exponential Moving Average (EMA)** pada firmware:
\`\`\`cpp
float filteredValue = (alpha * rawReading) + ((1.0f - alpha) * previousFilteredValue);
if (abs(filteredValue - baseline) > TOUCH_THRESHOLD) {
    registerValidTouch();
}
\`\`\`
Pendekatan ini berhasil meredam lonjakan noise hingga 78% tanpa menambah latensi respons sentuh yang berarti.`
  },
  {
    id: "post-2",
    title: "Memahami Model Objek Sui Move vs Model Akun EVM",
    date: "22 Nov 2025",
    readTime: "6 mnt",
    category: "Blockchain & Web3",
    summary: "Analisis komparatif mengapa model pemrograman berbasis objek pada bahasa Move di Sui memberikan keamanan dan skalabilitas tinggi.",
    content: `Sebagian besar pengembang terbiasa dengan model akun pada EVM (Ethereum Virtual Machine), di mana saldo dan status tersimpan dalam storage kontrak pintar itu sendiri. Namun, Sui Blockchain mengadopsi paradigma baru: **Object-Centric Model**.

### Semantik Objek di Sui Move
Di Sui, setiap entitas (seperti buku dalam dApp perpustakaan kami) adalah objek unik yang memiliki UID (*Globally Unique Identifier*) dan status kepemilikan (*Ownership*):
\`\`\`move
struct Book has key, store {
    id: UID,
    title: String,
    borrower: Option<address>,
    is_available: bool,
}
\`\`\`
Karena transaksi di Sui mengeksekusi objek secara eksplisit, transaksi yang memodifikasi objek berbeda dapat diproses secara **paralel tanpa antrean global**.`
  },
  {
    id: "post-3",
    title: "Arsitektur IoT ESP32: Telemetri Sensor Real-Time ke Web Dashboard",
    date: "15 Jun 2026",
    readTime: "4 mnt",
    category: "IoT & Fullstack",
    summary: "Praktik pembacaan sensor simultan pada ESP32 dan pengiriman data ke dashboard web pemantauan air.",
    content: `Membangun perangkat telemetri membutuhkan pembacaan sensor yang stabil dari multi-parameter.

### Poin Kunci Keberhasilan:
1. **Kalibrasi Non-linear ADC**: ESP32 ADC memerlukan kalibrasi kurva polinomial agar pembacaan tegangan analog akurat.
2. **Buffer Telemetri & Non-blocking I/O**: Hindari penggunaan \`delay()\`. Gunakan timer interupsi atau FreeRTOS task scheduler agar ESP32 tetap responsif melayani koneksi jaringan.`
  }
];

// Kontak dengan Direct Link langsung ke platform (tanpa menampilkan URL mentah)
export const contactData = {
  email: "jasonchristov@gmail.com",
  channels: [
    {
      id: "email",
      label: "Email",
      subtitle: "Kirim pesan langsung",
      url: "mailto:jasonchristov@gmail.com",
      icon: "Mail",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      subtitle: "Terhubung secara profesional",
      url: "https://www.linkedin.com/in/jason-christov-kesuma-a2a19a36b/",
      icon: "Linkedin",
    },
    {
      id: "github",
      label: "GitHub",
      subtitle: "Lihat repositori & kode sumber",
      url: "https://github.com/JasonCK897",
      icon: "Github",
    },
    {
      id: "instagram",
      label: "Instagram",
      subtitle: "Aktivitas & dokumentasi sosial",
      url: "https://www.instagram.com/j._chrisk/",
      icon: "Instagram",
    }
  ],
  formspreeEndpoint: "https://formspree.io/f/xpwzgkvo"
};
