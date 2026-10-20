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
  // Tambahan Properti SEO
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
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
      "Jasa pengecatan lantai epoxy profesional berbasis resin dan polimer berkualitas tinggi. Melindungi lantai beton pabrik, gudang, dan laboratorium dari goresan, benturan berat, serta tumpahan bahan kimia dengan ketebalan presisi 300 - 2000 micron.",
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
    seo: {
      metaTitle: "Jasa Epoxy Flooring Profesional & Tahan Lama | Kontraktor Lantai Terbaik",
      metaDescription:
        "Layanan jasa pengecatan epoxy lantai berkualitas tinggi untuk pabrik, gudang, dan laboratorium. Tahan beban berat, kimia, dan anti-bakteri. Hubungi kami sekarang!",
      keywords: [
        "jasa epoxy lantai",
        "epoxy flooring contractor",
        "cat lantai epoxy pabrik",
        "harga epoxy lantai per m2",
        "jasa pengecatan epoxy",
      ],
    },
  },

  {
    slug: "road-line-marking",
    title: "Road Line Marking",
    image: "/images/Services/linemarking/linemarking1.jpeg",
    images: ["/images/Services/linemarking/linemarking1.jpeg"],
    description:
      "Kontraktor pemasangan marka jalan dan garis batas garis pabrik (line painting) berpresisi tinggi. Efektif untuk mengatur alur lalu lintas internal, jalur forklift, area parkir, dan zona keselamatan kerja sesuai standar K3.",
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
    seo: {
      metaTitle: "Jasa Road Line Marking & Garis Parkir Pabrik Terbaik",
      metaDescription:
        "Layanan jasa pengecatan marka jalan, garis jalur forklift, dan line marking gudang profesional berstandar K3. Warna cerah, awet, dan tahan abrasi.",
      keywords: [
        "jasa road line marking",
        "line painting gudang",
        "cat marka jalan pabrik",
        "jasa garis parkir",
        "thermal line marking",
      ],
    },
  },
  {
    slug: "protective-coating",
    title: "Protective Coating",
    image: "/images/Services/Protective.jpeg",
    images: ["/images/Services/Protective.jpeg"],
    description:
      "Layanan protective coating dan cat anti-korosi terbaik untuk permukaan logam serta non-logam. Melindungi struktur baja, pipa industri, dan tangki penyimpanan dari karat akibat cuaca ekstrem maupun zat kimia agresif.",
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
    seo: {
      metaTitle: "Jasa Protective Coating & Anti-Korosi Struktur Baja Industri",
      metaDescription:
        "Spesialis protective coating untuk tangki, pipa, dan struktur baja industri. Berikan perlindungan maksimal terhadap karat dan bahan kimia agresif.",
      keywords: [
        "protective coating indonesia",
        "jasa cat anti korosi",
        "coating struktur baja",
        "cat pipa industri",
        "epoxy anti corrosion",
      ],
    },
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
      "Jasa pengecatan lapangan olahraga indoor dan outdoor (basket, badminton, tenis, futsal) menggunakan sistem akrilik Plexipave berkualitas tinggi. Menghasilkan permukaan yang anti-retak, tahan cuaca, dan bebas genangan air.",
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
    seo: {
      metaTitle: "Jasa Pengecatan & Pembuatan Sport Flooring Lapangan Olahraga",
      metaDescription:
        "Kontraktor spesialis pembuatan dan pengecatan lapangan basket, tenis, dan badminton menggunakan sistem Plexipave anti-slip tahan cuaca.",
      keywords: [
        "jasa cat lapangan olahraga",
        "sport flooring contractor",
        "pengecatan lapangan badminton",
        "plexipave indonesia",
        "cat lapangan basket",
      ],
    },
  },
  {
    slug: "decorative-flooring",
    title: "Decorative Flooring",
    image: "/images/Services/Decorative.jpeg",
    images: ["/images/Services/Decorative.jpeg"],
    description:
      "Solusi pelapisan lantai dekoratif estetis tinggi seperti Metallic epoxy, Flakes system, dan Quartz sand. Sempurna untuk mempercantik interior showroom, kantor mewah, hotel, kafe, dan area komersial lainnya.",
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
    seo: {
      metaTitle: "Jasa Decorative Flooring & Metallic Epoxy Showroom Mewah",
      metaDescription:
        "Percantik lantai kantor, kafe, dan showroom Anda dengan decorative flooring, metallic epoxy, dan flakes system berestetika tinggi.",
      keywords: [
        "decorative flooring",
        "metallic epoxy lantai",
        "jasa epoxy dekoratif",
        "flakes epoxy floor",
        "lantai showroom aesthetic",
      ],
    },
  },

  {
    slug: "membran-bakar-waterproofing",
    title: "Membran Bakar Waterproofing",
    image: "/images/Services/Membran.png",
    images: ["/images/Services/Membran.png", "/images/Services/WaterProof.png"],
    description:
      "Jasa pemasangan waterproofing membran bakar berkualitas tinggi menggunakan lembaran bitumen dan polimer sistem torch-on. Memberikan proteksi kedap air maksimal dan menyeluruh untuk dak beton atap, basement, serta pondasi bangunan.",
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
    seo: {
      metaTitle: "Jasa Waterproofing Membran Bakar Dak Beton Anti Bocor",
      metaDescription:
        "Kontraktor waterproofing membran bakar profesional untuk atap dak beton, basemen, dan gedung. Solusi permanen bebas bocor dengan sistem torch-on.",
      keywords: [
        "jasa waterproofing membran bakar",
        "kontraktor waterproofing dak beton",
        "membran bakar 3mm 4mm",
        "jasa anti bocor atap",
        "waterproofing torch on",
      ],
    },
  },
];
