import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Download, Mail, MapPin, Phone, Globe, ExternalLink } from "lucide-react";
import { personalData, educationData } from "../data/portfolioData";
import { useToast } from "../context/ToastContext";

export default function ResumeModal({ isOpen, onClose }) {
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    toast.info("Membuka Dokumen CV", "Membuka halaman cetak CV format A4...");
    window.open("/cv.html", "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl clay-modal overflow-hidden max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-white/80 dark:border-slate-700"
          >
            {/* Modal Header Controls */}
            <div className="px-5 sm:px-8 py-4 border-b border-slate-200/80 dark:border-slate-700/70 flex items-center justify-between gap-4 bg-slate-50/80 dark:bg-slate-900/80">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
                  Curriculum Vitae Preview
                </p>
                <h3
                  id="resume-modal-title"
                  className="font-heading text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  {personalData.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/CV-Rafi-Diandra-Ardi-Agusta.pdf"
                  download="CV. RAFI DIANDRA ARDI AGUSTA.pdf"
                  className="inline-flex items-center gap-1.5 px-4 min-h-[38px] rounded-full clay-btn-primary text-xs font-bold cursor-pointer"
                  title="Unduh file PDF resmi"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Unduh PDF</span>
                </a>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3.5 min-h-[38px] rounded-full clay-btn-secondary text-xs font-bold cursor-pointer"
                  title="Buka / Cetak format A4"
                >
                  <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Cetak</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Tutup pratinjau CV"
                  className="w-9 h-9 rounded-full clay-btn-secondary flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Modal Body: 2-Column CV Layout */}
            <div className="overflow-y-auto p-4 sm:p-6 bg-slate-100/60 dark:bg-slate-950/60">
              <div className="max-w-[850px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 text-slate-800 border border-slate-200">
                
                {/* Left Dark Sidebar */}
                <aside className="md:col-span-5 bg-[#0B1936] text-white p-6 sm:p-7 flex flex-col">
                  {/* Avatar */}
                  <div className="flex justify-center mb-5">
                    <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-400 shadow-[0_0_16px_rgba(56,189,248,0.5)] overflow-hidden">
                      <img
                        src={personalData.avatarUrl}
                        alt={personalData.name}
                        className="w-full h-full rounded-full object-cover object-[center_15%] scale-150 origin-[center_18%]"
                      />
                    </div>
                  </div>

                  {/* KONTAK */}
                  <div className="mb-5">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b-2 border-white pb-1 mb-2.5">
                      KONTAK
                    </h4>
                    <div className="space-y-1.5 text-[11px] text-slate-200">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="truncate">{personalData.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 text-center font-bold text-sky-400">@</span>
                        <span>@rafi.diandraa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 text-center font-mono text-sky-400">&lt;/&gt;</span>
                        <span className="truncate">github.com/rafidiandra57-cmd</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="truncate">rafi-diandra-ardi-agusta.vercel.app</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>+62 821-7788-9900</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Lampung, Indonesia</span>
                      </div>
                    </div>
                  </div>

                  {/* PENDIDIKAN */}
                  <div className="mb-5">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b-2 border-white pb-1 mb-2.5">
                      PENDIDIKAN
                    </h4>
                    <div className="space-y-2.5">
                      {educationData.map((edu) => (
                        <div key={edu.institution}>
                          <p className="text-[12px] font-medium text-white">{edu.institution}</p>
                          <p className="text-[11px] font-bold text-sky-300">{edu.degree}</p>
                          <p className="text-[10px] text-slate-300">{edu.period} • {edu.gpa}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KEMAMPUAN */}
                  <div className="mb-5">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b-2 border-white pb-1 mb-2.5">
                      KEMAMPUAN
                    </h4>
                    <ul className="space-y-1 text-[11px] text-slate-200">
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> Frontend Web Development</li>
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> React &amp; Modern JavaScript</li>
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> Tailwind CSS &amp; Responsive UI</li>
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> TypeScript &amp; Clean Architecture</li>
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> AI Integration &amp; Prompt Engineering</li>
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> Git &amp; GitHub Version Control</li>
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> Web Deployment &amp; Cloud Hosting</li>
                    </ul>
                  </div>

                  {/* PENGALAMAN ORGANISASI */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b-2 border-white pb-1 mb-2.5">
                      PENGALAMAN ORGANISASI
                    </h4>
                    <p className="text-[11px] font-bold uppercase text-white mb-1">
                      ANGGOTA - HMJ TI POLINELA
                    </p>
                    <ul className="space-y-1 text-[10.5px] text-slate-300">
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> Aktif berpartisipasi dalam diskusi dan pengembangan teknologi informasi jurusan.</li>
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> Mampu bekerja sama dengan tim dalam melaksanakan tugas terstruktur.</li>
                      <li className="flex items-start gap-1.5"><span className="text-sky-400">•</span> Menyelesaikan sertifikasi resmi IBM SkillsBuild (Granite Code Optimization &amp; Data).</li>
                    </ul>
                  </div>
                </aside>

                {/* Right Main White Column */}
                <main className="md:col-span-7 bg-white p-6 sm:p-8 flex flex-col">
                  {/* Header */}
                  <div className="mb-5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      Rafi Diandra<br />Ardi Agusta
                    </h1>
                    <p className="text-sm font-semibold text-slate-600 mt-1">
                      Mahasiswa D3 Manajemen Informatika
                    </p>
                  </div>

                  {/* TENTANG SAYA */}
                  <div className="mb-5">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
                      TENTANG SAYA
                    </h4>
                    <p className="text-[11.5px] text-slate-700 leading-relaxed text-justify">
                      Mahasiswa D3 Manajemen Informatika di Politeknik Negeri Lampung yang memiliki ketertarikan pada bidang teknologi informasi, khususnya pengembangan website dan aplikasi. Memiliki pengalaman dalam mengembangkan beberapa proyek berbasis web responsif, seperti AI Vault, Space Portfolio, dan implementasi optimasi kode dengan model AI. Terbiasa mengerjakan proyek secara individu maupun kelompok serta memiliki pengalaman dalam organisasi HMJ TI. Memiliki semangat belajar yang tinggi, mampu bekerja sama dalam tim, dan siap mengembangkan kemampuan melalui kesempatan magang.
                    </p>
                  </div>

                  {/* PENGALAMAN PROYEK */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1 mb-3">
                      PENGALAMAN PROYEK
                    </h4>

                    {/* Proyek 1 */}
                    <div className="mb-3.5">
                      <h5 className="text-[12px] font-bold text-slate-900">
                        1. AI Vault – Website Manajemen Prompt &amp; Aset AI
                      </h5>
                      <ul className="space-y-0.5 text-[11px] text-slate-700 mt-1 pl-1">
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Mengembangkan platform website manajemen aset digital dan kurasi prompt kecerdasan buatan (AI).</li>
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Menyediakan fitur pencarian instan, filter kategori cerdas, dan navigasi penyimpanan prompt online.</li>
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Membangun antarmuka modern dengan arsitektur kode modular berbasis React dan Tailwind CSS.</li>
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Website: <a href="https://github.com/rafidiandra57-cmd/ai-vault" target="_blank" rel="noreferrer" className="text-sky-600 underline">https://github.com/rafidiandra57-cmd/ai-vault</a></li>
                      </ul>
                    </div>

                    {/* Proyek 2 */}
                    <div className="mb-3.5">
                      <h5 className="text-[12px] font-bold text-slate-900">
                        2. Space Portfolio – Website Portofolio Personal
                      </h5>
                      <ul className="space-y-0.5 text-[11px] text-slate-700 mt-1 pl-1">
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Mengembangkan website portofolio interaktif dengan sistem desain Liquid Glass dan tema kosmik futuristik.</li>
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Mengintegrasikan visualisasi procedural rotating galaxy, animasi ThreeUI Constellation Field, dan transisi fluid.</li>
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Menerapkan tata letak responsif, dukungan tema gelap/terang adaptif, serta standar aksesibilitas WCAG.</li>
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Website: <a href="https://github.com/rafidiandra57-cmd/PORTOFOLIO" target="_blank" rel="noreferrer" className="text-sky-600 underline">https://github.com/rafidiandra57-cmd/PORTOFOLIO</a></li>
                      </ul>
                    </div>

                    {/* Proyek 3 */}
                    <div>
                      <h5 className="text-[12px] font-bold text-slate-900">
                        3. Granite Code Optimizer – Optimasi Kode Berbasis AI
                      </h5>
                      <ul className="space-y-0.5 text-[11px] text-slate-700 mt-1 pl-1">
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Mengeksplorasi model IBM Granite untuk otomatisasi pembuatan kode dan refactoring algoritma.</li>
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Melakukan analisis efisiensi struktur data dan pembersihan code smells untuk arsitektur aplikasi scalable.</li>
                        <li className="flex items-start gap-1.5"><span className="text-slate-900">•</span> Kredensial: <a href="https://www.credly.com" target="_blank" rel="noreferrer" className="text-sky-600 underline">IBM SkillsBuild Credly Verified Credential</a></li>
                      </ul>
                    </div>
                  </div>
                </main>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
