import CardFitur from '@/components/ui/CardFitur'
import Link from 'next/link';
import React from 'react'

export default function page() {
  return (
    <section
      className="section"
      id="projects"
      style={{ background: "var(--bg-secondary)" }}
    >
      <h2 className="section-title fade-in">
        <Link href="/">
          <span className="section-title-highlight">⬅️</span>
        </Link>
        [ Featured Projects - Website ]
      </h2>
      <div className="projects-grid">
        <CardFitur
          type="website"
          url="/foto/digiboard.png"
          title="Digiboard Math Game - Landing Page "
          description="Digiboard Math Game adalah sebuah game board berbasis android. Pada portfolio ini saya menampilkan landing page untuk game tersebut. Game ini dirancang untuk memberikan pengalaman belajar matematika untuk anak-anak penyandang disabilitas yang menyenangkan dan interaktif .
            Dengan berbagai tantangan dan level yang menarik, Digiboard Math Game membantu meningkatkan keterampilan matematika sambil menjaga kesenangan bermain."
          tags={["html", "css", "js"]}
          UrlApps="https://dimzsardiminda.github.io/digiBoard/"
        />
        <CardFitur
          type="website"
          url="/foto/sijuang.png"
          title="SIJUANG - MEDIA MONITORING & EVALUASI STUNTING SEBAGAI SUPPORT TERHADAP PERKEMBANGAN DAN DERAJAT KESEHATAN ANAK USIA 3-5 TAHUN"
          description="Sijuang adalah sebuah website yang dirancang untuk managament data terhadap perkembangan dan derajat kesehatan anak usia 3-5 tahun.
           Website ini menyediakan fitur seperti manajemen data, monitoring perkembangan anak, dan evaluasi stunting untuk membantu orang tua dan tenaga kesehatan dalam memantau kesehatan anak dengan lebih efektif. 
           Dengan pendekatan yang inovatif dan mudah digunakan, Sijuang bertujuan untuk meningkatkan kesadaran dan penanganan stunting pada anak usia dini, serta memberikan dukungan yang optimal bagi pertumbuhan dan perkembangan anak. 
           selain website ini juga memiliki aplikasi mobile yang dapat diakses dengan nama Sijuang."
          tags={["Laravel", "MySql", "Bootstrap"]}
          // UrlApps="https://teman-cemas.vercel.app/"
        />
        <CardFitur
          type="website"
          url="/foto/teman-cemas.png"
          title="Teman Cemas - Website untuk Kesehatan Mental"
          description="Teman Cemas adalah website yang dirancang untuk memberikan dukungan dan sumber daya bagi individu yang mengalami kecemasan.
              Website ini menyediakan artikel informatif, pengecekan Anxiety menggunakan teknik DASS42, Tracking Habits, Tempat Cerita, dan Unkown Text."
          tags={["Laravel", "MySql", "Bootstrap"]}
          // UrlApps="https://teman-cemas.vercel.app/"
        />
        <CardFitur
          type="website"
          url="/foto/dfriends.png"
          title="D'friends.site - Website untuk Kesehatan Mental"
          description="dfriends.site adalah pengembangan lanjutan dari Teman Cemas, sebuah website yang dirancang untuk memberikan dukungan dan sumber daya bagi individu yang mengalami kecemasan.
      selain fitur yang sudah ada di Teman Cemas, dfriends.site juga menyediakan fitur tambahan seperti Chat AI, Deprision Test, dan Test Stress Interaktif untuk membantu pengguna dalam mengelola kecemasan mereka dengan lebih efektif. Serta pada website ini 
      juga memiliki pembaruan pada tampilan yang lebih modern dan user-friendly."
          tags={["Laravel", "MySql", "Bootstrap", "AI "]}
          // UrlApps="https://teman-cemas.vercel.app/"
        />
        <CardFitur
          type="website"
          url="/foto/old-porto.png"
          title="Old Portfolio - Personal Portfolio Website"
          description="Old Portfolio adalah website portofolio pribadi yang menampilkan proyek-proyek, pengalaman, dan keterampilan saya. 
      Website ini dirancang untuk memberikan gambaran lengkap tentang perjalanan karier saya, dengan fokus pada teknologi yang saya kuasai dan proyek-proyek yang telah saya kerjakan."
          tags={["HTML", "CSS", "JS"]}
        />
        <CardFitur
          type="website"
          url="/foto/ruang-konseling.png"
          title="Ruang Konseling - Website untuk Kesehatan Mental"
          description="Ruang Konseling adalah sebuah website yang dirancang untuk memberikan pelayanan kepada mahasiswa UM yang mengalami masalah kesehatan mental. Website ini menyediakan fitur seperti Konsultasi Online, Artikel Kesehatan Mental, Jadwal Konsultasi dan lain sebagainya untuk membantu mahasiswa dalam mengelola kesehatan mental mereka dengan lebih baik."
          tags={["LARAVEL", "MYSQL", "BOOTSTRAP", "ai"]}
          // UrlApps="https://tei.um.ac.id/simadun"
        />
        <CardFitur
          type="website"
          url="/foto/inv.png"
          title="Inventory Management Custom Craft"
          description="Inventory Management Custom Craft adalah sebuah website yang dirancang untuk memfasilitasi manajemen inventaris pada bisnis Custom Craft. Website ini menyediakan fitur seperti manajemen produk, manajemen pesanan, dan lain sebagaianya untuk membantu pemilik bisnis dalam mengelola inventaris mereka dengan lebih efektif."
          tags={["LARAVEL", "MYSQL", "BOOTSTRAP"]}
          // UrlApps="https://tei.um.ac.id/simadun"
        />
      </div>
    </section>
  );
}
