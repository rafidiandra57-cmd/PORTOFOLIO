const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const profilePicPath = path.join(rootDir, 'public', 'profile.jpg');
const profilePicBase64 = fs.readFileSync(profilePicPath).toString('base64');
const profilePicDataUri = `data:image/jpeg;base64,${profilePicBase64}`;

const cvHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV - Rafi Diandra Ardi Agusta</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', Arial, Helvetica, sans-serif;
      background: #FFFFFF;
      color: #1E293B;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .cv-container {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      display: flex;
      margin: 0 auto;
      background: #FFFFFF;
      overflow: hidden;
    }
    
    /* Left Sidebar */
    .sidebar {
      width: 73mm;
      background: #0B1936;
      color: #FFFFFF;
      padding: 26px 20px 22px 22px;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
    }

    .avatar-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 22px;
    }
    .avatar-ring {
      width: 126px;
      height: 126px;
      border-radius: 50%;
      padding: 4px;
      background: linear-gradient(135deg, #1D4ED8 0%, #38BDF8 50%, #818CF8 100%);
      box-shadow: 0 0 18px rgba(56, 189, 248, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .avatar-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center 15%;
      transform: scale(1.6);
      transform-origin: center 18%;
      background: #1E293B;
      display: block;
    }

    .side-section {
      margin-bottom: 19px;
    }
    .side-section:last-child {
      margin-bottom: 0;
    }
    .side-title {
      font-size: 13.5pt;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #FFFFFF;
      padding-bottom: 3px;
      border-bottom: 2px solid #FFFFFF;
      margin-bottom: 10px;
    }

    /* Contact items */
    .contact-list {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 9px;
      font-size: 8.4pt;
      color: #F1F5F9;
      text-decoration: none;
      word-break: break-all;
    }
    .contact-icon {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: #FFFFFF;
      fill: currentColor;
    }

    /* Education items */
    .edu-item {
      margin-bottom: 10px;
    }
    .edu-item:last-child {
      margin-bottom: 0;
    }
    .edu-inst {
      font-size: 9.6pt;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 1.25;
    }
    .edu-degree {
      font-size: 9pt;
      font-weight: 700;
      color: #FFFFFF;
      margin-top: 1px;
      line-height: 1.25;
    }
    .edu-meta {
      font-size: 8pt;
      color: #CBD5E1;
      margin-top: 2px;
      line-height: 1.2;
    }

    /* Skills list */
    .skills-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 5.5px;
    }
    .skill-item {
      font-size: 8.5pt;
      color: #F1F5F9;
      position: relative;
      padding-left: 12px;
      line-height: 1.25;
    }
    .skill-item::before {
      content: "•";
      position: absolute;
      left: 0;
      top: -1px;
      font-size: 10pt;
      color: #FFFFFF;
    }

    /* Organization list */
    .org-header {
      font-size: 8.6pt;
      font-weight: 700;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 4px;
      line-height: 1.25;
    }
    .org-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4.5px;
    }
    .org-bullet {
      font-size: 7.9pt;
      color: #E2E8F0;
      position: relative;
      padding-left: 12px;
      line-height: 1.32;
    }
    .org-bullet::before {
      content: "•";
      position: absolute;
      left: 0;
      top: -1px;
      font-size: 9pt;
      color: #CBD5E1;
    }

    /* Right Main Content */
    .main-content {
      width: 137mm;
      padding: 32px 28px 24px 28px;
      display: flex;
      flex-direction: column;
    }

    .hero-header {
      margin-bottom: 20px;
    }
    .hero-name {
      font-size: 32pt;
      font-weight: 800;
      line-height: 1.05;
      color: #1E293B;
      letter-spacing: -0.03em;
    }
    .hero-subtitle {
      font-size: 13pt;
      font-weight: 500;
      color: #334155;
      margin-top: 8px;
      letter-spacing: -0.01em;
    }

    .main-section {
      margin-bottom: 18px;
    }
    .main-section:last-child {
      margin-bottom: 0;
    }
    .main-title {
      font-size: 13pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #0F172A;
      padding-bottom: 3px;
      border-bottom: 2px solid #0F172A;
      margin-bottom: 10px;
    }

    .about-text {
      font-size: 8.9pt;
      color: #334155;
      line-height: 1.55;
      text-align: justify;
    }

    /* Projects */
    .project-item {
      margin-bottom: 12px;
    }
    .project-item:last-child {
      margin-bottom: 0;
    }
    .project-title {
      font-size: 9.7pt;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 3.5px;
      line-height: 1.25;
    }
    .project-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 3.5px;
    }
    .project-bullet {
      font-size: 8.4pt;
      color: #334155;
      position: relative;
      padding-left: 14px;
      line-height: 1.35;
    }
    .project-bullet::before {
      content: "•";
      position: absolute;
      left: 2px;
      top: -1px;
      font-size: 9pt;
      color: #0F172A;
    }
    .project-link {
      font-size: 8.2pt;
      color: #0F172A;
      word-break: break-all;
    }
    .project-link span {
      font-weight: 600;
    }
    .project-link a {
      color: #0F172A;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="cv-container">
    <!-- Left Column (Dark Sidebar) -->
    <aside class="sidebar">
      <div class="avatar-wrapper">
        <div class="avatar-ring">
          <img class="avatar-img" src="${profilePicDataUri}" alt="Rafi Diandra Ardi Agusta">
        </div>
      </div>

      <!-- KONTAK -->
      <section class="side-section">
        <h2 class="side-title">KONTAK</h2>
        <div class="contact-list">
          <div class="contact-item">
            <svg class="contact-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>rafidiandra57@gmail.com</span>
          </div>
          <div class="contact-item">
            <svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span>@rafi.diandraa</span>
          </div>
          <div class="contact-item">
            <svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>github.com/rafidiandra57-cmd</span>
          </div>
          <div class="contact-item">
            <svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <span>rafi-diandra-ardi-agusta.vercel.app</span>
          </div>
          <div class="contact-item">
            <svg class="contact-icon" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>+62 821-7788-9900</span>
          </div>
          <div class="contact-item">
            <svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Lampung, Indonesia</span>
          </div>
        </div>
      </section>

      <!-- PENDIDIKAN -->
      <section class="side-section">
        <h2 class="side-title">PENDIDIKAN</h2>
        <div class="edu-item">
          <div class="edu-inst">Politeknik Negeri Lampung</div>
          <div class="edu-degree">D3 Manajemen Informatika</div>
          <div class="edu-meta">2024 - Sekarang</div>
          <div class="edu-meta">Mahasiswa Aktif</div>
        </div>
        <div class="edu-item">
          <div class="edu-inst">SMA Muhammadiyah Gisting</div>
          <div class="edu-degree">Sekolah Menengah Atas (IPS)</div>
          <div class="edu-meta">2021 - 2024</div>
        </div>
      </section>

      <!-- KEMAMPUAN -->
      <section class="side-section">
        <h2 class="side-title">KEMAMPUAN</h2>
        <ul class="skills-list">
          <li class="skill-item">Frontend Web (React.js, Next.js)</li>
          <li class="skill-item">Tailwind CSS &amp; Responsive UI</li>
          <li class="skill-item">JavaScript (ES6+) &amp; TypeScript</li>
          <li class="skill-item">RESTful APIs, Node.js &amp; Supabase</li>
          <li class="skill-item">AI Integration &amp; IBM Granite</li>
          <li class="skill-item">Git, GitHub &amp; Vercel Deployment</li>
          <li class="skill-item">Figma to Code &amp; Glassmorphism</li>
        </ul>
      </section>

      <!-- PENGALAMAN ORGANISASI -->
      <section class="side-section">
        <h2 class="side-title">PENGALAMAN ORGANISASI</h2>
        <div class="org-header">ANGGOTA - HMJ TI POLINELA</div>
        <ul class="org-bullets">
          <li class="org-bullet">Aktif berpartisipasi dalam diskusi dan kegiatan pengembangan teknologi informasi jurusan.</li>
          <li class="org-bullet">Mampu bekerja sama dengan tim dalam melaksanakan tugas terstruktur dan penugasan proyek.</li>
          <li class="org-bullet">Memiliki kemampuan komunikasi dan koordinasi yang baik dalam lingkungan organisasi.</li>
          <li class="org-bullet">Menyelesaikan 4 sertifikasi resmi IBM SkillsBuild (Granite AI Models &amp; Data).</li>
        </ul>
      </section>
    </aside>

    <!-- Right Column (Main White Content) -->
    <main class="main-content">
      <!-- Header -->
      <header class="hero-header">
        <h1 class="hero-name">Rafi Diandra<br>Ardi Agusta</h1>
        <p class="hero-subtitle">Mahasiswa D3 Manajemen Informatika</p>
      </header>

      <!-- TENTANG SAYA -->
      <section class="main-section">
        <h2 class="main-title">TENTANG SAYA</h2>
        <p class="about-text">
          Mahasiswa D3 Manajemen Informatika di Politeknik Negeri Lampung yang memiliki ketertarikan tinggi pada bidang teknologi informasi, khususnya pengembangan website modern, arsitektur frontend, dan integrasi kecerdasan buatan. Memiliki pengalaman dalam mengembangkan beberapa proyek berbasis web responsif, seperti AI Vault, SIAKAD Cakrawala, dan Space Portfolio. Terbiasa membangun antarmuka terstruktur menggunakan React, Tailwind CSS, dan TypeScript, serta telah menyelesaikan sertifikasi resmi IBM SkillsBuild. Memiliki semangat belajar yang tinggi, berorientasi pada clean architecture, mampu bekerja sama dalam tim, dan siap mengembangkan kemampuan melalui kesempatan magang.
        </p>
      </section>

      <!-- PENGALAMAN PROYEK -->
      <section class="main-section">
        <h2 class="main-title">PENGALAMAN PROYEK</h2>

        <!-- Proyek 1: AI Vault -->
        <article class="project-item">
          <h3 class="project-title">1. AI Vault – Platform Manajemen Prompt &amp; Aset AI</h3>
          <ul class="project-bullets">
            <li class="project-bullet">Mengembangkan platform brankas digital cerdas untuk mengarsipkan, mengorganisir, dan mengelola aset kecerdasan buatan (AI) serta repositori prompt engineering.</li>
            <li class="project-bullet">Menyediakan fitur pencarian semantik cerdas berbasis Vector Embeddings untuk temu kembali data secara instan dan efisien.</li>
            <li class="project-bullet">Membangun antarmuka sci-fi dark-mode modern dan modular berbasis React, TypeScript, Tailwind CSS, dan Framer Motion.</li>
            <li class="project-bullet">Menerapkan sistem penyimpanan terenkripsi untuk manajemen basis pengetahuan model AI.</li>
            <li class="project-bullet project-link"><span>Website:</span> <a href="https://github.com/rafidiandra57-cmd/ai-vault" target="_blank">https://github.com/rafidiandra57-cmd/ai-vault</a></li>
          </ul>
        </article>

        <!-- Proyek 2: SIAKAD Cakrawala -->
        <article class="project-item">
          <h3 class="project-title">2. SIAKAD Cakrawala – Portal Akademik Terpadu</h3>
          <ul class="project-bullets">
            <li class="project-bullet">Mengembangkan portal akademik terpadu dengan simulasi alur kerja 3 peran terintegrasi (Mahasiswa, Dosen Pengampu, dan Administrator) serta fitur Ganti Peran instan.</li>
            <li class="project-bullet">Mengimplementasikan modul KHS &amp; transkrip nilai otomatis secara real-time yang tersinkronisasi langsung dari penilaian dosen pengampu.</li>
            <li class="project-bullet">Menyediakan manajemen akun CRUD lengkap, pengumpulan tugas kuliah, ekspor JSON, forum diskusi kampus, dan tema Light/Dark berbasis Glassmorphism.</li>
            <li class="project-bullet project-link"><span>Live Demo:</span> <a href="https://rafi-diandra-ardi-agusta.vercel.app" target="_blank">https://rafi-diandra-ardi-agusta.vercel.app</a></li>
          </ul>
        </article>

        <!-- Proyek 3: Space Portfolio -->
        <article class="project-item">
          <h3 class="project-title">3. Space Portfolio – Website Portofolio Personal</h3>
          <ul class="project-bullets">
            <li class="project-bullet">Mengembangkan website portofolio interaktif dengan sistem desain Liquid Glass dan tema kosmik futuristik yang dinamis.</li>
            <li class="project-bullet">Mengintegrasikan visualisasi procedural rotating galaxy, ThreeUI Constellation Field, dan transisi fluid performa tinggi.</li>
            <li class="project-bullet">Menerapkan tata letak responsif, dukungan tema gelap/terang adaptif, serta standar aksesibilitas WCAG 2.2 AA.</li>
            <li class="project-bullet">Menyediakan modal interaktif untuk preview proyek, verifikasi 4 kredensial resmi IBM SkillsBuild, dan formulir kontak.</li>
            <li class="project-bullet project-link"><span>Website:</span> <a href="https://rafi-diandra-ardi-agusta.vercel.app" target="_blank">https://rafi-diandra-ardi-agusta.vercel.app</a></li>
          </ul>
        </article>
      </section>
    </main>
  </div>
</body>
</html>`;

const cvHtmlPath = path.join(rootDir, 'public', 'cv.html');
fs.writeFileSync(cvHtmlPath, cvHtml, 'utf8');
console.log('Written cv.html to:', cvHtmlPath);

// Target PDF outputs
const outputPdfUserPath = 'c:\\Users\\acer\\Downloads\\CV. RAFI DIANDRA ARDI AGUSTA.pdf';
const outputPdfPublicPath = path.join(rootDir, 'public', 'CV-Rafi-Diandra-Ardi-Agusta.pdf');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chromeCmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${outputPdfUserPath}" "file:///${cvHtmlPath.replace(/\\\\/g, '/')}"`;

console.log('Running Chrome to generate PDF...');
try {
  execSync(chromeCmd, { stdio: 'inherit' });
  console.log('Successfully generated PDF at:', outputPdfUserPath);

  // Also copy to public folder for website download
  fs.copyFileSync(outputPdfUserPath, outputPdfPublicPath);
  console.log('Copied PDF to public folder:', outputPdfPublicPath);
} catch (err) {
  console.error('Error generating PDF with Chrome:', err);
}
