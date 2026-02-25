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
          url="/foto/sidoc.png"
          title="SIMADUN - Sistem Informasi Doctoral "
          description="Simadun adalah sebuah website yang bertujuan untuk menghandle adminstrasi mahasiswa doktoral di Universitas Negeri Malang Khususnya Departemen Teknik Elektro dan Infromatika. Website ini dirancang untuk memberikan kemudahan bagi mahasiswa doktoral dalam mengelola data akademik, jadwal bimbingan, dan administrasi lainnya yang terkait dengan program doktoral."
          tags={["LARAVEL", "MYSQL", "BOOTSTRAP"]}
          UrlApps="https://tei.um.ac.id/simadun"
        />
        <CardFitur
          type="website"
          url="/foto/ruang-konseling.png"
          title="Ruang Konseling - Website untuk Kesehatan Mental"
          description="Ruang Konseling adalah sebuah website yang dirancang untuk memberikan pelayanan kepada mahasiswa UM yang mengalami masalah kesehatan mental. Website ini menyediakan fitur seperti Konsultasi Online, Artikel Kesehatan Mental, Jadwal Konsultasi dan lain sebagainya untuk membantu mahasiswa dalam mengelola kesehatan mental mereka dengan lebih baik."
          tags={["LARAVEL", "MYSQL", "BOOTSTRAP"]}
          // UrlApps="https://tei.um.ac.id/simadun"
        />
        <CardFitur
          type="website"
          url="/foto/digiboard.png"
          title="Digiboard Math Game - Landing Page "
          description="Digiboard Math Game adalah sebuah game board berbasis android. Pada portfolio ini saya menampilkan landing page untuk game tersebut. Game ini dirancang untuk memberikan pengalaman belajar matematika untuk anak-anak penyandang disabilitas yang menyenangkan dan interaktif .
            Dengan berbagai tantangan dan level yang menarik, Digiboard Math Game membantu meningkatkan keterampilan matematika sambil menjaga kesenangan bermain."
          tags={["html", "css", "js"]}
          UrlApps="https://dimzsardiminda.github.io/digiBoard/"
        />
      </div>
    </section>
  );
}
