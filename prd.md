# Product Requirements Document (PRD) - Rajawali Tour Travel

**Version:** 3.0 (Comprehensive Detail)
**Platform:** Web (Mobile-First SPA + Static Blog)
**Tech Stack:** Next.js 14+ (App Router), Tailwind CSS, Framer Motion (Opsional)
**Database/Backend:** N/A (Fully Static / Hardcoded via TypeScript data files)

---

## 1. Executive Summary & Business Strategy
Website ini dirancang bukan sebagai platform e-commerce, melainkan sebagai **Lead Generation Machine** untuk Rajawali Travel. Karena klien tidak menggunakan CMS dan Payment Gateway, konversi diukur dari jumlah pengunjung yang menekan tombol *submit* form dan terlempar ke WhatsApp.

**Core Strategy:**
* **No CMS:** Menghindari kerumitan sistem untuk klien dan mengunci klien dalam *maintenance contract* dengan developer.
* **Flexible Pricing & Schedule:** Mengubah ketiadaan harga dan jadwal tetap menjadi nilai jual eksklusivitas. *Copywriting* yang digunakan: "Layanan Eksklusif 24/7 Menyesuaikan Jadwal Anda".
* **Qualified Leads:** Memaksa pengunjung mengisi form statis terstruktur sebelum di-redirect ke WhatsApp, sehingga Admin tidak perlu lagi melakukan *briefing* awal ke pelanggan.

---

## 2. Technical Architecture & File Structure
Menggunakan Next.js App Router dengan arsitektur berbasis fitur (Feature-Sliced Design ringan).
```text
/src
  /app
    layout.tsx           # Global layout (Navbar, Footer, SEO meta global)
    page.tsx             # Homepage (Hero, Layanan, Rute, Armada, Booking, FAQ)
    /artikel
      page.tsx           # Listing semua artikel blog
      /[slug]/page.tsx   # Detail artikel (SSG - Static Site Generation)
  /components
    /ui                  # Reusable stateless UI (Button, Input, Select, Card)
    /sections            # Homepage sections (HeroSection, BookingForm, FleetCarousel)
    /layout              # Navbar, Footer
  /data
    content.ts           # MASTER DATA HARCODED (Rute, FAQ, Armada, Artikel)
  /utils
    wa-generator.ts      # Parser untuk konversi data form ke URL WA
    formatters.ts        # Helper untuk format tanggal, dll.
```

---

## 3. Core Feature Specifications (Deep Dive)
### A. Lead Generation Flow (The Booking Form)
Ini adalah komponen paling kritikal (<BookingForm />). Jangan gunakan tombol WA standar, gunakan form agar admin menerima data matang.

1. Form State & Fields:
   •	fullName (String): Wajib diisi.
   •	phoneNumber (String): Wajib diisi. Validasi: Hanya menerima angka, minimal 10 digit, maksimal 14 digit.
   •	pickupPoint (Select): Wajib. Opsi: Sukabumi, Cianjur, Bandung, Lainnya.
   •	dropoffPoint (Select): Wajib. Opsi: Bandara Soetta, Jakarta, Bogor, Depok, Tangerang, Bekasi.
   •	departureDate (Date): Wajib. Batasi agar tidak bisa memilih tanggal di masa lalu (disable past dates).
   •	fleetChoice (Select): Opsional. Opsi di-map dari data armada.

2. Form Behavior & Validation:
   •	Gunakan react-hook-form untuk manajemen state agar performa re-render terjaga.
   •	Tampilkan error text warna merah (misal: "Nomor WhatsApp tidak valid") jika validasi gagal saat disubmit.

3. WhatsApp URL Generator Logic (utils/wa-generator.ts): Fungsi ini dipanggil saat form valid dan di-submit.
```typescript
// Draft Logic
const generateWaLink = (data) => {
  const adminPhone = "6281399923755";
  const text = `Halo Admin Rajawali Travel, saya ingin memesan travel dengan detail:
  
- Nama: ${data.fullName}
- No. HP/WA: ${data.phoneNumber}
- Titik Jemput: ${data.pickupPoint}
- Titik Tujuan: ${data.dropoffPoint}
- Tanggal Berangkat: ${formatDate(data.departureDate)}
- Pilihan Armada: ${data.fleetChoice || 'Bebas'}

Mohon informasi ketersediaan armada dan harganya. Terima kasih.`;

  return `https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`;
}
```

### B. Static Content Management (Data Layer)
Semua konten dinamis disimpan dalam src/data/content.ts.

1. Struktur Data Armada (fleets):
```typescript
export const fleets = [
  { 
    id: "f1", 
    name: "Toyota Hiace", 
    capacity: 14, 
    features: ["Full AC", "USB Port", "Reclining Seat"], 
    imageUrl: "/images/fleets/hiace.webp" // Wajib WebP
  },
  // ... Avanza, Innova, Elf, Calya, Xpander, XL7
];
```

2. Struktur Data Layanan (services):
```typescript
export const services = [
  { id: "s1", title: "Door to Door Service", desc: "Jemput di rumah, antar sampai tujuan." },
  { id: "s2", title: "Carter & Drop", desc: "Sewa satu mobil full untuk privasi lebih." },
  { id: "s3", title: "Pengiriman Paket Kilat", desc: "Kirim barang 1 hari sampai." }
];
```

3. Struktur Data Blog (articles): Gunakan pendekatan objek statis, atau Markdown file dengan gray-matter jika ingin lebih terstruktur.
```typescript
export const articles = [
  {
    slug: "keuntungan-travel-door-to-door-sukabumi-bandara",
    title: "5 Keuntungan Pakai Travel Door to Door dari Sukabumi ke Bandara",
    date: "2024-05-20",
    excerpt: "Nggak perlu repot ke terminal, ini alasan kenapa door-to-door lebih hemat waktu...",
    content: "<p>Paragraf 1...</p><h3>Subjudul</h3><p>Paragraf 2...</p>", 
    coverImage: "/images/blog/door-to-door.webp"
  }
];
```

---

## 4. UI/UX & Design Guidelines
•	Pendekatan: Mobile-First Design. Area touch pada HP harus diperhatikan.
•	Warna Tema:
  o	Primary: Navy Blue / Deep Blue (#1e3a8a atau Tailwind blue-900) - Melambangkan kepercayaan.
  o	Accent: Kuning / Emas (#fbbf24 atau Tailwind amber-400) - Untuk tombol CTA (Call to Action).
  o	Success: WA Green (#25D366).
•	Tipografi: Inter (Utama) dan Poppins (Untuk Heading).
•	Komponen Interaktif:
  o	Gunakan Accordion untuk section FAQ agar menghemat ruang scroll vertikal di HP.
  o	Navigasi mobile WAJIB menggunakan Hamburger Menu dengan slide-over drawer.
  o	Tombol (Button) harus memiliki ukuran tap target minimal 48x48px sesuai standar aksesibilitas web.

---

## 5. SEO & Web Vitals (NFR - Non Functional Requirements)
Karena mengandalkan organik tanpa iklan, optimasi ini hukumnya wajib:

1. Meta & OpenGraph:
   •	Gunakan fitur generateMetadata bawaan Next.js 14.
   •	Title: Rajawali Travel | Travel Sukabumi, Cianjur, Bandung - Bandara Soetta & Jabodetabek
   •	Description: Layanan travel door-to-door 24 jam. Rute Sukabumi, Cianjur, Bandung menuju Bandara Soetta, Jakarta, Bogor, Depok, Tangerang, Bekasi. Pesan sekarang!

2. Image Optimization:
   •	Tidak boleh menggunakan tag <img> biasa. Wajib menggunakan komponen <Image /> dari next/image dengan properti priority pada gambar Hero Section agar LCP (Largest Contentful Paint) cepat.

3. Schema Markup (JSON-LD): Tambahkan skema LocalBusiness atau TravelAgency di layout.tsx agar Google memahami konteks website.
```json
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Rajawali Tour Travel",
  "image": "URL_LOGO",
  "telephone": "+6281399923755",
  "priceRange": "$$",
  "areaServed": ["Sukabumi", "Cianjur", "Bandung", "Jakarta", "Bandara Soekarno-Hatta"]
}
```

---

## 6. Development Phases & Milestones
•	Phase 1: Setup & Core Layouting (Days 1-2)
  o	Inisialisasi Next.js, Tailwind, Fonts.
  o	Slicing Navbar (Desktop & Mobile) dan Footer.
•	Phase 2: Static Data & UI Components (Days 3-5)
  o	Membuat file content.ts.
  o	Slicing section Homepage (Hero, Layanan, Armada, FAQ).
•	Phase 3: The Booking Engine (Days 6-7)
  o	Membangun <BookingForm />.
  o	Implementasi validasi dan fungsi WhatsApp URL Generator.
•	Phase 4: Static Blog & Polishing (Days 8-10)
  o	Slicing halaman /artikel dan detail artikel.
  o	Implementasi SEO Meta dan Schema Markup.
  o	Testing di berbagai viewport (Mobile, Tablet, Desktop).
•	Phase 5: Deployment (Day 11)
  o	Deploy ke Vercel.
  o	Uji coba langsung form booking di perangkat seluler.