import CardFitur from "../CardFitur";

export default function Website() {
  return (
    <div>
      <div className="projects-grid">
        <CardFitur
          type="website"
          url="/foto/sitavo.png"
          title="Sitavo - Sistem Tugas Akhir Fakultas Vokasi"
          description="Sitavo adalah sistem yang memfasilitasi manajemen tugas akhir mahasiswa
    Fakultas Vokasi. Sistem ini memungkinkan mahasiswa untuk mengajukan
    proposal, dosen untuk memberikan bimbingan, serta admin untuk
    mengelola data tugas akhir secara efisien. Webiste dapat di akases di https://sitavo.vokasium.app"
          tags={["WEBSITE", "LARAVEL 10", "BOOTSTRAP", "MYSQL"]}
          UrlApps="https://sitavo.vokasium.app"
        />
        <CardFitur
          type="website"
          url="/foto/sidoc.png"
          title="SIMADUN - Sistem Informasi Doctoral "
          description="Simadun adalah sebuah website yang bertujuan untuk menghandle adminstrasi mahasiswa doktoral di Universitas Negeri Malang Khususnya Departemen Teknik Elektro dan Infromatika. Website ini dirancang untuk memberikan kemudahan bagi mahasiswa doktoral dalam mengelola data akademik, jadwal bimbingan, dan administrasi lainnya yang terkait dengan program doktoral."
          tags={["LARAVEL", "MYSQL", "BOOTSTRAP"]}
          UrlApps="https://tei.um.ac.id/simadun"
        />
        <CardFitur
          type="website"
          url="/foto/do-dhikir.png"
          title="Do-Dhikir - Aplikasi Pengingat Dzikir dan Doa Harian"
          description="Do-Dhikir adalah sistem berbasis wesbite yang dirancang untuk membantu
              pengguna dalam dzikir serta doa harian.
              Aplikasi ini menyediakan fitur pengingat otomatis, koleksi doa dan
              dzikir lengkap, serta statistik harian untuk memantau konsistensi
              ibadah pengguna. Website dapat di akses di https://do-dzikir.vercel.app/. Website ini masih dalam proses pengembangan yang berbasis opensource."
          tags={["WEBSITE", "NEXT JS", "TAILWIND", "MYSQL"]}
          UrlApps="https://do-dzikir.vercel.app/"
        />
        <CardFitur
          type="website"
          url="/foto/eduvoka.png"
          title="Eduvoka - Adaptive E-Learning Platform Learning Analytics & AI"
          description="Eduvoka adalah sebuah platform e-learning adaptif yang dirancang untuk memberikan pengalaman belajar yang personal dan efektif bagi pengguna khusus UTBK.
          Platform ini menggunakan teknologi Learning Analytics dan Kecerdasan Buatan (AI) untuk menganalisis perilaku belajar pengguna, mengidentifikasi kebutuhan pembelajaran, dan memberikan rekomendasi materi yang sesuai dengan gaya belajar individu.
           Dengan fitur-fitur inovatif seperti pelacakan kemajuan, analisis performa, dan rekomendasi konten yang disesuaikan, Eduvoka bertujuan untuk meningkatkan hasil pembelajaran dan membantu pengguna mencapai tujuan pendidikan mereka dengan lebih efisien."
          tags={["NEXT JS", "MySql", "TAILWIND"]}
          UrlApps="https://eduvoka.com/"
        />
        <CardFitur
          type="website"
          url="/foto/sinusi.png"
          title="Sinusi - NU"
          description="Sinusi adalah sebuah website yang dihasilkan antara kerjasama UM dengan LP MA'ARIF NU.
    Website ini dirancang untuk memberikan informasi Bimbingan karir, Konsultasi Psikolog, Penasihat Pernikahan, Konsultasi Parenting, dan Konsutlasi kesehatan."
          tags={["LARAVEL", "MYSQL", "BOOTSTRAP"]}
          UrlApps="https://sinusi-nu.com/"
        />
        <CardFitur
          type="website"
          url="/foto/zada.png"
          title="Apotek Zada (Bug Fixing)"
          description="Apotek Zada adalah sebuah website e-commerce yang dirancang untuk memfasilitasi management obat obatan di Apotek Zada. 
    Website ini menyediakan fitur seperti manajemen produk, manajemen pesanan, dan lain sebagaianya. Pada portfolio ini saya menampilkan hasil bug fixing untuk website tersebut, dengan fokus pada perbaikan masalah yang terkait dengan performa, keamanan, dan pengalaman pengguna untuk memastikan bahwa website berjalan dengan lancar dan memberikan layanan yang optimal kepada pelanggan."
          tags={["VUE", "LARAVEL LUMEN", "DOCKER", "MYSQL"]}
          UrlApps="https://apotek-zada.com/"
        />
        <CardFitur
          type="website"
          url="/foto/etno.png"
          title="SIPRO - Inovasi Media Pembelajaran Digital pada Materi Kombinatorika"
          description="SIPRO adalah sebuah website yang dirancang untuk memberikan media pembelajaran digital yang inovatif pada materi kombinatorika. Website ini menyediakan berbagai fitur interaktif seperti  latihan soal dengan AI , Penjelasan materi dengan personalisasi 3 kepribadian (VIRTUAL, KINESTETIK dan AUDIOTORY), dan penjelasan mendalam untuk membantu siswa memahami materi kombinatorika dengan lebih baik. Dengan pendekatan yang menarik dan mudah dipahami, SIPRO bertujuan untuk meningkatkan pemahaman siswa terhadap konsep kombinatorika dan memfasilitasi proses pembelajaran yang lebih efektif."
          tags={["Laravel", "MySql", "TAILWIND"]}
          // UrlApps="https://teman-cemas.vercel.app/"
        />
        <CardFitur
          type="website"
          url="/foto/Siepam.png"
          title="Siepam - Sistem Informasi Ahmad Masfi"
          description="Siepam adalah sebuah website yang dirancang untuk mengelola informasi terkait Pembelajaran, baik dari sisi mahasiswa dan dosen. Website ini menyediakan fitur seperti Tugas dan Penyesuaian CPL, CPMK dan Sub CPMK untuk memfasilitasi proses pembelajaran yang lebih terstruktur dan interaktif."
          tags={["Laravel", "MySql", "Bootstrap"]}
          // UrlApps="https://teman-cemas.vercel.app/"
        />
        <CardFitur
          type="website"
          url="/foto/gdgoc.png"
          title="GDGGOC - Google Developer On Campus UM "
          description="GDGGOC adalah sebuah website yang dirancang untuk memberikan informasi terkait kegiatan dan program yang diselenggarakan oleh Google Developer On Campus UM. 
            Website ini menyediakan fitur seperti jadwal acara, pendaftaran, dan Quiz untuk membantu mahasiswa dalam mengembangkan keterampilan mereka di bidang teknologi."
          tags={["NEXT JS", "TAILWIND", "MYSQL"]}
          // UrlApps="https://dimzsardiminda.github.io/digiBoard/"
        />
      </div>
      <div className="w-full size-8 text-end mt-10">
        <a href="/website" className="text-end ">
          <h1>
            More
          </h1>
        </a>
      </div>
    </div>
  );
}
