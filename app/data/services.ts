export interface ServiceSpecification {
  label: string;
  value: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  badge?: string;
  tagColor?: string;
  image: string;
  images?: string[];
  description: string;
  highlights: string[];
  features: string[];
  specifications: ServiceSpecification[];
}

export const services: ServiceItem[] = [
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring",
    badge: "BEST SELLER",
    tagColor: "bg-red-700",
    image: "/images/Services/epoxy/EpoxyFlooring1.jpg",
    images: [
      "/images/Services/epoxy/EpoxyFlooring1.jpg",
      "/images/Services/epoxy/EpoxyFlooring2.jpeg",
      "/images/Services/epoxy/EpoxyFlooring3.jpeg",
    ],
    description:
      "Pengecatan lantai berbasis resin epoxy dan polimer yang melekat kuat pada lapisan beton. Melindungi lantai dari goresan, benturan, dan tumpahan bahan kimia dengan ketebalan 300 - 2000 micron.",
    highlights: [
      "Tahan goresan & benturan berat",
      "Lantai higienis & tanpa sambungan",
      "Tahan bahan kimia & mudah dibersihkan",
    ],
    features: [
      "Permukaan seamless tanpa sambungan nat (bebas bakteri)",
      "Ketahanan abrasi tinggi terhadap traffic forklift & alat berat",
      "Proteksi total terhadap tumpahan oli, solvent, dan zat asam ringan",
      "Tampilan akhir high gloss / reflektif elegan",
    ],
    specifications: [
      { label: "Tipe Sistem", value: "2-Component Epoxy Resin" },
      { label: "Metode Aplikasi", value: "Trowel, Roller & Self-Leveling" },
      { label: "Ketebalan (DFT)", value: "300 – 2000 Micron" },
      { label: "Rekomendasi Area", value: "Pabrik, Gudang, Warehouse & Lab" },
    ],
  },

  {
    slug: "road-line-marking",
    title: "Road Line Marking",
    image: "/images/Services/linemarking/linemarking1.jpeg",
    images: ["/images/Services/linemarking/linemarking1.jpeg"],
    description:
      "Pemasangan marka dan garis batas presisi untuk jalan, gudang, pabrik, serta showroom. Berfungsi mengarahkan alur lalu lintas internal dan membatasi area kerja secara aman.",
    highlights: [
      "Memenuhi standar K3 & lalu lintas",
      "Warna cerah & high-visibility",
      "Tahan gesekan roda kendaraan / forklift",
    ],
    features: [
      "Garis batas lurus, rapi, dan presisi tinggi sesuai standar K3 pabrik",
      "Cat thermoplastik atau epoxy khusus dengan visibilitas tinggi",
      "Cepat kering dan tahan terhadap abrasi ban forklift harian",
    ],
    specifications: [
      { label: "Jenis Cat", value: "Thermoplastic / Epoxy Marking Paint" },
      { label: "Reflektivitas", value: "High Visibility Reflektif" },
      { label: "Ketahanan", value: "Heavy Duty Traffic" },
      {
        label: "Penggunaan",
        value: "Zoning Pabrik, Jalur Forklift & Parkiran",
      },
    ],
  },
  {
    slug: "protective-coating",
    title: "Protective Coating",
    image: "/images/Services/Protective.jpeg",
    images: ["/images/Services/Protective.jpeg"],
    description:
      "Pelapisan khusus permukaan logam maupun non-logam untuk mencegah korosi dan karat akibat cuaca ekstrem atau lingkungan kimia. Cocok untuk pipa, tangki, dan struktur baja.",
    highlights: [
      "Perlindungan anti-korosi jangka panjang",
      "Metode aplikasi yang fleksibel",
      "Ideal untuk area industri & pipa tangki",
    ],
    features: [
      "Proteksi maksimal terhadap oksidasi, karat, dan uap kimia agresif",
      "Meningkatkan usia pakai struktur baja dan tangki penyimpanan",
      "Formula khusus tahan suhu tinggi dan cuaca maritim",
    ],
    specifications: [
      {
        label: "Sistem Cat",
        value: "Zinc Rich Primer + Epoxy/Polyurethane Finish",
      },
      { label: "Fungsi Utama", value: "Anti-Corrosion & Chemical Resistant" },
      {
        label: "Media Aplikasi",
        value: "Struktur Baja, Pipa & Tangki Industri",
      },
    ],
  },
  {
    slug: "sport-flooring",
    title: "Sport Flooring",
    image: "/images/Services/sport/sportflooring1.jpg",
    images: [
      "/images/Services/sport/sportflooring1.jpg",
      "/images/Services/sport/sportflooring2.PNG",
      "/images/Services/sport/sportflooring3.jpeg",
    ],
    description:
      "Pengecatan khusus lapangan olahraga outdoor dan indoor (badminton, basket, dll) menggunakan metode Plexipave berkualitas tinggi yang terjamin anti-retak dan bebas genangan air.",
    highlights: ["Metode aplikasi Plexipave", "Anti-retak & ramah cuaca", "Permukaan presisi bebas genangan"],
    features: [
      "Tekstur permukaan dengan tingkat cengkeraman (friction) optimal untuk atlet",
      "Sistem akrilik khusus yang tahan terhadap perubahan cuaca ekstrem",
      "Pilihan warna cerah yang tidak mudah pudar",
    ],
    specifications: [
      { label: "Sistem Material", value: "Plexipave / Acrylic Sport System" },
      { label: "Karakteristik", value: "Anti-Slip & UV Resistant" },
      { label: "Area Lapangan", value: "Basket, Tenis, Badminton & Futsal" },
    ],
  },
  {
    slug: "decorative-flooring",
    title: "Decorative Flooring",
    image: "/images/Services/Decorative.jpeg",
    images: ["/images/Services/Decorative.jpeg"],
    description:
      "Solusi pelapisan lantai dekoratif berestetika tinggi seperti Flakes system, Metallic epoxy, atau Quartz sand untuk showroom, kantor, hotel, dan area komersial.",
    highlights: ["Estetika mewah & eksklusif", "Pilihan motif flakes & metallic unik", "Mudah dibersihkan & berkilau"],
    features: [
      "Desain visual custom yang elegan untuk meningkatkan prestise interior",
      "Kombinasi warna dan tekstur yang dapat disesuaikan tema ruangan",
      "Permukaan kokoh berpadu dengan keindahan artistik",
    ],
    specifications: [
      { label: "Variasi Motif", value: "Metallic, Flakes & Quartz System" },
      { label: "Finishing", value: "Crystal Clear Gloss / Matte" },
      { label: "Aplikasi Komersial", value: "Showroom, Lobby, Cafe & Kantor" },
    ],
  },

  {
    slug: "membran-bakar-waterproofing",
    title: "Membran Bakar Waterproofing",
    image: "/images/Services/Membran.png",
    images: ["/images/Services/Membran.png", "/images/Services/WaterProof.png"],
    description:
      "Metode pelapisan kedap air menggunakan lembaran bitumen dan polimer yang diaplikasikan dengan cara dibakar. Memberikan perlindungan total dari risiko kebocoran air.",
    highlights: [
      "Bahan Bitumen & Polimer berkualitas",
      "Tahan cuaca ekstrem & genangan",
      "Untuk atap, dak beton, & pondasi",
    ],
    features: [
      "Struktur lembaran diperkuat polimer fleksibel yang tahan robek",
      "Penyambungan sistem torching (bakar) melekat sempurna tanpa celah pori",
      "Sangat handal untuk area dak beton luas",
    ],
    specifications: [
      { label: "Ketebalan Lembaran", value: "3 mm & 4 mm" },
      { label: "Finish Permukaan", value: "Sand Finish / Mineral Slate" },
      { label: "Metode Pasang", value: "Torch-on System (Pemanasan Gas)" },
    ],
  },
];
