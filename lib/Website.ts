interface PortoProps {
  url: string;
  title: string;
  description: string;
  tags?: string[];
  type: "website" | "mobile" | "iot" | "mlai";
  UrlApps?: string;
}

export const DataPortoDisplay: PortoProps[] = [
  {
    type: "website",
    url: "/foto/web/sitavo.png",
    title: "Sitavo - Sistem Tugas Akhir Fakultas Vokasi",
    description:
      "Sitavo adalah sistem yang memfasilitasi manajemen tugas akhir mahasiswa Fakultas Vokasi. Sistem ini memungkinkan mahasiswa untuk mengajukan proposal, dosen untuk memberikan bimbingan, serta admin untuk     mengelola data tugas akhir secara efisien. Webiste dapat di akases di https://sitavo.vokasium.app",
    tags: ["WEBSITE", "LARAVEL 10", "BOOTSTRAP", "MYSQL"],
    UrlApps: "https://sitavo.vokasium.app",
  },
  {
    type: "website",
    url: "/foto/web/sidoc.png",
    title: "SIMADUN - Sistem Informasi Doctoral ",
    description:
      "Simadun adalah sebuah website yang bertujuan untuk menghandle adminstrasi mahasiswa doktoral di Universitas Negeri Malang Khususnya Departemen Teknik Elektro dan Infromatika. Website ini dirancang untuk memberikan kemudahan bagi mahasiswa doktoral dalam mengelola data akademik, jadwal bimbingan, dan administrasi lainnya yang terkait dengan program doktoral.",
    tags: ["LARAVEL", "MYSQL", "BOOTSTRAP"],
    UrlApps: "https://tei.um.ac.id/simadun",
  },
  {
    type: "website",
    url: "/foto/web/do-dhikir.png",
    title: "Do-Dhikir - Aplikasi Pengingat Dzikir dan Doa Harian",
    description:
      "Do-Dhikir adalah sistem berbasis wesbite yang dirancang untuk membantu pengguna dalam dzikir serta doa harian. Aplikasi ini menyediakan fitur pengingat otomatis, koleksi doa dan dzikir lengkap, serta statistik harian untuk memantau konsistensi ibadah pengguna. Website dapat di akses di https://do-dzikir.vercel.app/. Website ini masih dalam proses pengembangan yang berbasis opensource.",
    tags: ["WEBSITE", "NEXT JS", "TAILWIND", "MYSQL"],
    UrlApps: "https://do-dzikir.vercel.app/",
  },
  {
    type: "website",
    url: "/foto/web/eduvoka.png",
    title: "Eduvoka - Adaptive E-Learning Platform Learning Analytics & AI",
    description:
      "Eduvoka adalah sebuah platform e-learning adaptif yang dirancang untuk memberikan pengalaman belajar yang personal dan efektif bagi pengguna khusus UTBK. Platform ini menggunakan teknologi Learning Analytics dan Kecerdasan Buatan (AI) untuk menganalisis perilaku belajar pengguna, mengidentifikasi kebutuhan pembelajaran, dan memberikan rekomendasi materi yang sesuai dengan gaya belajar individu. Dengan fitur-fitur inovatif seperti pelacakan kemajuan, analisis performa, dan rekomendasi konten yang disesuaikan, Eduvoka bertujuan untuk meningkatkan hasil pembelajaran dan membantu pengguna mencapai tujuan pendidikan mereka dengan lebih efisien.",
    tags: ["NEXT JS", "MySql", "TAILWIND"],
    UrlApps: "https://eduvoka.com/",
  },
  {
    type: "website",
    url: "/foto/web/sinusi.png",
    title: "Sinusi - NU",
    description:
      "Sinusi adalah sebuah website yang dihasilkan antara kerjasama UM dengan LP MA'ARIF NU. Website ini dirancang untuk memberikan informasi Bimbingan karir, Konsultasi Psikolog, Penasihat Pernikahan, Konsultasi Parenting, dan Konsutlasi kesehatan.",
    tags: ["LARAVEL", "MYSQL", "BOOTSTRAP"],
    UrlApps: "https://sinusi-nu.com/",
  },
  // {
  //   type: "website",
  //   url: "/foto/web/zada.png",
  //   title: "Apotek Zada (Bug Fixing)",
  //   description:
  //     "Apotek Zada adalah sebuah website e-commerce yang dirancang untuk memfasilitasi management obat obatan di Apotek Zada. Website ini menyediakan fitur seperti manajemen produk, manajemen pesanan, dan lain sebagaianya. Pada portfolio ini saya menampilkan hasil bug fixing untuk website tersebut, dengan fokus pada perbaikan masalah yang terkait dengan performa, keamanan, dan pengalaman pengguna untuk memastikan bahwa website berjalan dengan lancar dan memberikan layanan yang optimal kepada pelanggan.",
  //   tags: ["VUE", "LARAVEL LUMEN", "DOCKER", "MYSQL"],
  //   UrlApps: "https://apotek-zada.com/",
  // },
  {
    type: "website",
    url: "/foto/web/zeatis.png",
    title: "Zeatis - Landing Page ",
    description: " Zeatis adalah sebuah website yang dirancang untuk menampilkan landing Program PKM Zeatis UM. Website ini bertujuan untuk memberikan informasi tentang Produk, manfaat, dan keunggulan Zeatis kepada Consumer. Dengan desain yang menarik dan informatif, landing page ini diharapkan dapat meningkatkan minat pengguna potensial untuk produk Zeatis.",
    tags: ["HTML", "CSS", "JS"],
    UrlApps: "https://zeatis-um.vercel.app/",
  },
  {
    type: "website",
    url: "/foto/web/curio.png",
    title: "CURIO - Sistem Cek Kurasi Terpersonalisasi",
    description:
      "CURIO adalah sebuah website yang dirancang untuk memberikan layanan cek kurasi terpersonalisasi kepada pengguna. Website ini menggunakan teknologi kecerdasan buatan untuk menganalisis preferensi dan kebutuhan pengguna, serta memberikan rekomendasi kurasi yang sesuai dengan minat dan tujuan mereka. Dengan fitur-fitur inovatif seperti analisis perilaku pengguna, rekomendasi konten yang disesuaikan, dan antarmuka yang user-friendly, CURIO bertujuan untuk meningkatkan pengalaman pengguna dalam menemukan konten yang relevan dan bermanfaat sesuai dengan minat mereka.",
    tags: ["LARAVEL", "BOOTSTRAP", "MYSQL"],
    UrlApps: "https://mycurio.id/",
  },
  {
    type: "website",
    url: "/foto/web/etno.png",
    title:
      "SIPRO - Inovasi Media Pembelajaran Digital pada Materi Kombinatorika",
    description:
      "SIPRO adalah sebuah website yang dirancang untuk memberikan media pembelajaran digital yang inovatif pada materi kombinatorika. Website ini menyediakan berbagai fitur interaktif seperti  latihan soal dengan AI , Penjelasan materi dengan personalisasi 3 kepribadian (VIRTUAL, KINESTETIK dan AUDIOTORY), dan penjelasan mendalam untuk membantu siswa memahami materi kombinatorika dengan lebih baik. Dengan pendekatan yang menarik dan mudah dipahami, SIPRO bertujuan untuk meningkatkan pemahaman siswa terhadap konsep kombinatorika dan memfasilitasi proses pembelajaran yang lebih efektif.",
    tags: ["Laravel", "MySql", "TAILWIND"],
  },
  {
    type: "website",
    url: "/foto/web/gdgoc.png",
    title: "GDGGOC - Google Developer On Campus UM ",
    description:
      "GDGGOC adalah sebuah website yang dirancang untuk memberikan informasi terkait kegiatan dan program yang diselenggarakan oleh Google Developer On Campus UM. Website ini menyediakan fitur seperti jadwal acara, pendaftaran, dan Quiz untuk membantu mahasiswa dalam mengembangkan keterampilan mereka di bidang teknologi.",
    tags: ["NEXT JS", "TAILWIND", "MYSQL"],
  },
];


export const DataPorto: PortoProps[] = [
  {
    type: "website",
    url: "/foto/web/digiboard.png",
    title: "Digiboard Math Game - Landing Page",
    description:
      "Digiboard Math Game adalah sebuah game board berbasis android. Pada portfolio ini saya menampilkan landing page untuk game tersebut. Game ini dirancang untuk memberikan pengalaman belajar matematika untuk anak-anak penyandang disabilitas yang menyenangkan dan interaktif. Dengan berbagai tantangan dan level yang menarik, Digiboard Math Game membantu meningkatkan keterampilan matematika sambil menjaga kesenangan bermain.",
    tags: ["html", "css", "js"],
    UrlApps: "https://dimzsardiminda.github.io/digiBoard/",
  },
  {
    type: "website",
    url: "/foto/web/sijuang.png",
    title:
      "SIJUANG - MEDIA MONITORING & EVALUASI STUNTING SEBAGAI SUPPORT TERHADAP PERKEMBANGAN DAN DERAJAT KESEHATAN ANAK USIA 3-5 TAHUN",
    description:
      "Sijuang adalah sebuah website yang dirancang untuk managament data terhadap perkembangan dan derajat kesehatan anak usia 3-5 tahun. Website ini menyediakan fitur seperti manajemen data, monitoring perkembangan anak, dan evaluasi stunting untuk membantu orang tua dan tenaga kesehatan dalam memantau kesehatan anak dengan lebih efektif. Dengan pendekatan yang inovatif dan mudah digunakan, Sijuang bertujuan untuk meningkatkan kesadaran dan penanganan stunting pada anak usia dini, serta memberikan dukungan yang optimal bagi pertumbuhan dan perkembangan anak. selain website ini juga memiliki aplikasi mobile yang dapat diakses dengan nama Sijuang.",
    tags: ["Laravel", "MySql", "Bootstrap"],
  },
  {
    type: "website",
    url: "/foto/web/teman-cemas.png",
    title: "Teman Cemas - Website untuk Kesehatan Mental",
    description:
      "Teman Cemas adalah website yang dirancang untuk memberikan dukungan dan sumber daya bagi individu yang mengalami kecemasan. Website ini menyediakan artikel informatif, pengecekan Anxiety menggunakan teknik DASS42, Tracking Habits, Tempat Cerita, dan Unkown Text.",
    tags: ["Laravel", "MySql", "Bootstrap"],
  },
  {
    type: "website",
    url: "/foto/web/Siepam.png",
    title: "Siepam - Sistem Informasi Ahmad Masfi",
    description:
      "Siepam adalah sebuah website yang dirancang untuk mengelola informasi terkait Pembelajaran, baik dari sisi mahasiswa dan dosen. Website ini menyediakan fitur seperti Tugas dan Penyesuaian CPL, CPMK dan Sub CPMK untuk memfasilitasi proses pembelajaran yang lebih terstruktur dan interaktif.",
    tags: ["Laravel", "MySql", "Bootstrap"],
  },
  {
    type: "website",
    url: "/foto/web/dfriends.png",
    title: "D'friends.site - Website untuk Kesehatan Mental",
    description:
      "dfriends.site adalah pengembangan lanjutan dari Teman Cemas, sebuah website yang dirancang untuk memberikan dukungan dan sumber daya bagi individu yang mengalami kecemasan. selain fitur yang sudah ada di Teman Cemas, dfriends.site juga menyediakan fitur tambahan seperti Chat AI, Deprision Test, dan Test Stress Interaktif untuk membantu pengguna dalam mengelola kecemasan mereka dengan lebih efektif. Serta pada website ini juga memiliki pembaruan pada tampilan yang lebih modern dan user-friendly.",
    tags: ["Laravel", "MySql", "Bootstrap", "AI"],
  },
  {
    type: "website",
    url: "/foto/web/old-porto.png",
    title: "Old Portfolio - Personal Portfolio Website",
    description:
      "Old Portfolio adalah website portofolio pribadi yang menampilkan proyek-proyek, pengalaman, dan keterampilan saya. Website ini dirancang untuk memberikan gambaran lengkap tentang perjalanan karier saya, dengan fokus pada teknologi yang saya kuasai dan proyek-proyek yang telah saya kerjakan.",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    type: "website",
    url: "/foto/web/ruang-konseling.png",
    title: "Ruang Konseling - Website untuk Kesehatan Mental",
    description:
      "Ruang Konseling adalah sebuah website yang dirancang untuk memberikan pelayanan kepada mahasiswa UM yang mengalami masalah kesehatan mental. Website ini menyediakan fitur seperti Konsultasi Online, Artikel Kesehatan Mental, Jadwal Konsultasi dan lain sebagainya untuk membantu mahasiswa dalam mengelola kesehatan mental mereka dengan lebih baik.",
    tags: ["LARAVEL", "MYSQL", "BOOTSTRAP", "ai"],
  },
  {
    type: "website",
    url: "/foto/web/inv.png",
    title: "Inventory Management Custom Craft",
    description:
      "Inventory Management Custom Craft adalah sebuah website yang dirancang untuk memfasilitasi manajemen inventaris pada bisnis Custom Craft. Website ini menyediakan fitur seperti manajemen produk, manajemen pesanan, dan lain sebagaianya untuk membantu pemilik bisnis dalam mengelola inventaris mereka dengan lebih efektif.",
    tags: ["LARAVEL", "MYSQL", "BOOTSTRAP"],
  },
];

// console.log(DataPorto.length);