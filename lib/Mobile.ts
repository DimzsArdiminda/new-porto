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
    type: "mobile",
    url: "/foto/android/Mitra Panen.png",
    title: "Pencatatan Panen",
    description:
      "Pencatatan Panen adalah sebuah aplikasi berbasis mobile yang dirancang untuk membantu petani dalam mengelola dan memantau proses panen/budidaya mereka. Aplikasi ini menyediakan fitur untuk mencatat jadwal panen, memantau kondisi tanaman/budidaya, serta memberikan informasi dan tips seputar pertanian. Dengan antarmuka yang user-friendly, Mitra Panen memudahkan petani dalam mengoptimalkan hasil panen mereka dan meningkatkan produktivitas pertanian secara keseluruhan.",
    tags: ["flutter", "FIGMA"],
  },
  {
    type: "mobile",
    url: "/foto/android/juangapp.png",
    title: "Juang App",
    description:
      "Juang App adalah sebuah aplikasi yang dikembangkan untuk memonitor dan mengelola perkembangan kesehatan anak usia 3-5 tahun. Aplikasi ini menyediakan fitur untuk mencatat pertumbuhan fisik, evaluasi stunting, serta memberikan informasi dan tips seputar kesehatan anak. Dengan antarmuka yang user-friendly, Juang App memudahkan orang tua dan pengasuh dalam memantau dan mendukung perkembangan anak mereka dengan lebih efektif.",
    tags: ["flutter", "LARAVEL"],
  },
  {
    type: "mobile",
    url: "/foto/android/x_apps.png",
    title: "Pemodalan",
    description:
      "Pemodalan adalah sebuah aplikasi mobile yang dirancang untuk membantu seseorang untuk mengembangkan bisis. Aplikasi ini menyediakan fitur peminjaman modal, pencatatan transaksi dan lain sebagainya. Dengan antarmuka yang user-friendly, Pemodalan memudahkan pengguna untuk mengelola keuangan bisnis mereka dengan lebih efektif dan efisien.",
    tags: ["flutter", "API CONSUMER"],
  },
  {
    type: "mobile",
    url: "/foto/android/medhub.png",
    title: "Medhub",
    description:
      "Medihub adalah sebuah aplikasi (slicing design) yang ditujukan untuk mengasah skill dalam mengembangkan aplikasi mobile. Pada dasarnya aplikasi ini memiliki fitur pembelian obat, pengantara dan lain sebagainya selayaknya aplikasi e-commerce. Dengan antarmuka yang intuitif, Medihub membantu pengguna untuk belajar dan berlatih dalam menciptakan aplikasi mobile yang berkualitas tinggi.",
    tags: ["flutter", "FIGMA"],
  },
  {
    type: "mobile",
    url: "/foto/android/pummping.png",
    title: "Pumping Bottols",
    description:
      "Pumping Bottols adalah sebuah aplikasi mobile yang dikembangakan untuk membantu ibu menyusui dalam menjadwalkan waktu memompa ASI. Selain itu aplikasi ini menyediakan fitur untuk mencatat perkembangan bayi seperti berat badan. Dengan antarmuka yang user-friendly, Pumping Bottols memudahkan ibu menyusui dalam mengelola waktu memompa mereka dengan lebih efektif dan mendukung proses menyusui yang sehat.",
    tags: ["FLUTTER", "API CONSUMER"],
  },
  {
    type: "mobile",
    url: "/foto/android/sali.png",
    title: "Sali (Nusantara Online): Peran Inovasi Digital dan AI dalam Revitalisasi Transportasi Tradisional",
    description:
      "Sali (Nusantara Online) adalah sebuah aplikasi mobile yang dirancang untuk merevitalisasi transportasi tradisional di Indonesia melalui inovasi digital. Aplikasi ini menyediakan platform yang menghubungkan pengemudi transportasi tradisional dengan penumpang, serta menawarkan fitur-fitur inovatif seperti pemesanan online, pelacakan kendaraan secara real-time, dan sistem pembayaran digital. Sali bertujuan untuk meningkatkan efisiensi operasional, memberikan pengalaman pengguna yang lebih baik, dan mendukung keberlanjutan transportasi tradisional di era digital.",
    tags: ["flutter"],
  },
  {
    type: "mobile",
    url: "/foto/android/weather_loc.jpg",
    title: "Weather Loc",
    description:
      "Weather Loc adalah sebuah aplikasi berbasis mobile yang dirancang untuk memberikan informasi cuaca secara akurat dan real-time kepada pengguna. Aplikasi ini menggunakan data dari berbagai sumber terpercaya untuk memberikan perkiraan cuaca, suhu, kelembapan, dan kondisi atmosfer lainnya di lokasi pengguna. Dengan antarmuka yang intuitif dan fitur yang mudah digunakan, Weather Loc membantu pengguna untuk merencanakan aktivitas mereka dengan lebih baik berdasarkan kondisi cuaca saat ini.",
    tags: ["FLUTTER", "API CONSUMER"],
  },
  {
    type: "mobile",
    url: "/foto/android/diego.jpg",
    title: "Diego - Diet On The Go",
    description:
      "Diego - Diet On The Go adalah sebuah aplikasi berbasis mobile yang dirancang untuk membantu pengguna dalam mengelola pola makan mereka. Aplikasi ini menyediakan fitur untuk mencatat asupan makanan, menghitung kalori, dan memberikan rekomendasi diet yang sesuai dengan kebutuhan pengguna. Dengan antarmuka yang user-friendly, Diego memudahkan pengguna untuk mencapai tujuan kesehatan mereka dengan lebih efektif.",
    tags: ["flutter"],
  },
  {
    type: "mobile",
    url: "/foto/android/digiboard.jpg",
    title: "Digiboard Math Game",
    description:
      "Digiboard Math Game adalah sebuah aplikasi berbasis mobile yang dirancang untuk membantu anak-anak belajar matematika dengan cara yang menyenangkan dan interaktif. Aplikasi ini menawarkan berbagai permainan matematika yang dirancang untuk meningkatkan keterampilan berhitung, pemecahan masalah, dan logika anak-anak. Dengan antarmuka yang menarik dan fitur edukatif, Digiboard Math Game membuat proses belajar matematika menjadi lebih menyenangkan bagi anak-anak.",
    tags: ["flutter"],
  },
];

export const DataPorto: PortoProps[] = [
  {
    type: "mobile",
    url: "/foto/android/buku tabungan.png",
    title: "Buku Tabungan Digital",
    description:
      "Buku Tabungan Digital adalah sebuah aplikasi berbasis mobile yang dirancang untuk membantu pengguna dalam mengelola keuangan mereka dengan lebih efisien. Aplikasi ini menyediakan fitur untuk mencatat pemasukan dan pengeluaran, membuat anggaran, serta memberikan laporan keuangan secara visual. Dengan antarmuka yang user-friendly, Buku Tabungan Digital memudahkan pengguna untuk memantau dan mengatur keuangan mereka dengan lebih baik, sehingga dapat mencapai tujuan keuangan mereka dengan lebih efektif.",
    tags: ["flutter"],
  },
  {
    type: "mobile",
    url: "/foto/android/publicchat.jpg",
    title: "Public Chat Realtime",
    description:
      "Public Chat Realtime adalah sebuah aplikasi berbasis mobile yang memungkinkan pengguna untuk berkomunikasi secara real-time melalui fitur chat publik. Aplikasi ini dirancang untuk memfasilitasi interaksi sosial di antara pengguna dengan menyediakan ruang obrolan yang dapat diakses oleh semua orang. Dengan antarmuka yang sederhana dan responsif, Public Chat Realtime memungkinkan pengguna untuk berbagi pesan dan informasi secara instan, menciptakan pengalaman komunikasi yang menyenangkan dan efisien.",
    tags: ["FLUTTER", "FIREBASE"],
    // UrlApps: "https://sitavo.vokasium.app",
  },
];