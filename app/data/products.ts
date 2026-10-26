export interface ProductFeature {
  title: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

// Tambahan interface untuk struktur Varian/Ukuran
export interface ProductVariant {
  label: string;
  weight: string;
  image: string;
}

// Tambahan interface untuk Metadata SEO
export interface ProductSeo {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Product {
  id: string;
  slug: string; // Harus format URL-friendly (tanpa spasi)
  tag: string;
  tagColor: string;
  weight: string;
  image: string;
  images: string[];
  title: string;
  description: string;
  features: string[];
  specifications: ProductSpecification[];
  tds: string | null;
  variants?: ProductVariant[];
  seo?: ProductSeo; // Properti SEO
}

export const products: Product[] = [
  {
    id: "aypg3z",
    slug: "mpp-851-2k-primer-sl",
    tag: "EPOXY PRIMER SL 2K",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg Set",
    image: "/images/produk/produk1.png",
    images: ["/images/produk/produk2.png", "/images/produk/produk3.png"],
    title: "MPP-851 2K PRIMER SL",
    description:
      "Multi Paint Primer (MPP-851) adalah cat dasar epoxy lantai (primer) 2 komponen berkualitas tinggi yang dirancang untuk memberikan perlindungan maksimal pada permukaan beton. Memiliki daya rekat (bonding) ekstra kuat, mencegah cat mengelupas, serta tahan terhadap bahan kimia industri, sangat cocok sebagai pondasi lapisan lantai gudang dan pabrik.",
    features: [
      "Daya Rekat yang Luar Biasa pada Beton (Excellent Bonding Strength)",
      "Ketahanan Kimia yang Sangat Baik",
      "Sangat Kuat dan Tahan Beban Berat (Heavy Duty)",
      "Permukaan Halus dan Tanpa Sambungan (Smooth and Seamless)",
      "Mudah Dibersihkan dan Dirawat",
      "Aman dan Ramah Lingkungan",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Epoxy Primer (Cat Dasar)" },
      { label: "Tipe Produk", value: "2K (2 Komponen)" },
      { label: "Kemasan", value: "5 kg & 20 kg Set" },
      { label: "Penggunaan", value: "Lapisan dasar coating lantai beton" },
    ],
    tds: "/Documents/TDS%20MPP-851%20PRIMER.pdf",
    variants: [
      { label: "5 kg Set", weight: "5 kg Set", image: "/images/produk/produk2.png" },
      { label: "20 kg Set", weight: "20 kg Set", image: "/images/produk/produk3.png" },
    ],
    seo: {
      metaTitle: "Jual Cat Dasar Epoxy Lantai MPP-851 2K Primer SL",
      metaDescription:
        "Cat dasar epoxy lantai (primer) 2 komponen MPP-851. Daya rekat ekstra kuat pada beton, anti ngelupas, dan tahan bahan kimia untuk lantai industri.",
      keywords: ["cat dasar epoxy lantai", "epoxy primer beton", "cat lantai 2k", "MPP-851", "cat epoxy primer"],
    },
  },
  {
    id: "bodycoat852",
    slug: "mpb-852-2k-bodycoat-sl",
    tag: "EPOXY BODYCOAT SL 2K",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg Set",
    image: "/images/produk/produk1.png",
    images: ["/images/produk/produk2.png", "/images/produk/produk3.png"],
    title: "MPB-852 2K BODYCOAT SL",
    description:
      "Multi Paint Bodycoat (MPB-852) adalah cat epoxy lapisan tengah (bodycoat) berjenis self-leveling. Berfungsi krusial untuk menutup pori-pori beton, meratakan permukaan bergelombang, serta memberikan ketahanan mekanis tingkat tinggi terhadap lalu lintas alat berat (heavy duty) di area industri.",
    features: [
      "Daya Rekat yang Luar Biasa (Excellent Bonding Strength)",
      "Ketahanan Kimia yang Sangat Baik",
      "Sangat Kuat dan Tahan Beban Berat (Heavy Duty)",
      "Permukaan Halus dan Tanpa Sambungan (Smooth and Seamless)",
      "Mudah Dibersihkan dan Dirawat",
      "Aman dan Ramah Lingkungan",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Epoxy Bodycoat" },
      { label: "Tipe Produk", value: "2K (2 Komponen)" },
      { label: "Kemasan", value: "5 kg & 20 kg Set" },
      { label: "Penggunaan", value: "Lapisan tengah (perata) coating" },
    ],
    tds: "/Documents/TDS%20MPB-852%20BODY%20COAT%20.pdf",
    variants: [
      { label: "5 kg Set", weight: "5 kg Set", image: "/images/produk/produk2.png" },
      { label: "20 kg Set (Pail)", weight: "20 kg Set", image: "/images/produk/produk3.png" },
    ],
    seo: {
      metaTitle: "Cat Epoxy Bodycoat MPB-852 2K SL | Lapisan Tengah Epoxy",
      metaDescription:
        "Cat epoxy bodycoat self-leveling untuk lantai pabrik & gudang. Menutup pori beton dengan sempurna, meratakan lantai, dan tahan beban heavy duty.",
      keywords: [
        "epoxy bodycoat",
        "cat lantai self leveling",
        "lapisan tengah epoxy lantai",
        "cat epoxy heavy duty",
        "MPB-852",
      ],
    },
  },
  {
    id: "topcoat870",
    slug: "mpt-870-2k-sl-finish-topcoat",
    tag: "EPOXY TOPCOAT SL 2K",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg Set",
    image: "/images/produk/produk1.png",
    images: ["/images/produk/produk3.png"],
    title: "MPT-870 2K SL FINISH TOPCOAT",
    description:
      "MULTI PAINT Topcoat Finish (MPT-870) merupakan cat lapisan akhir epoxy (topcoat) berkualitas premium. Diformulasikan khusus untuk menghasilkan permukaan lantai beton yang mengkilap, tahan goresan (abrasion resistant), serta mudah dibersihkan dari tumpahan oli dan bahan kimia pabrik.",
    features: [
      "Daya Rekat yang Luar Biasa (Excellent Bonding Strength)",
      "Ketahanan Kimia yang Sangat Baik",
      "Sangat Kuat dan Tahan Beban Berat (Heavy Duty)",
      "Permukaan Halus dan Tanpa Sambungan (Smooth and Seamless)",
      "Mudah Dibersihkan dan Dirawat",
      "Aman dan Ramah Lingkungan",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Epoxy Topcoat" },
      { label: "Tipe Produk", value: "2K (2 Komponen)" },
      { label: "Kemasan", value: "20 kg Set" },
      { label: "Penggunaan", value: "Lapisan finishing (teratas)" },
    ],
    variants: [
      { label: "5 kg Set", weight: "5 kg Set", image: "/images/produk/produk2.png" },
      { label: "20 kg Set (Pail)", weight: "20 kg Set", image: "/images/produk/produk3.png" },
    ],
    tds: "/Documents/TDS%20MPT-870%20TOP%20COAT.pdf",
    seo: {
      metaTitle: "Cat Epoxy Topcoat Finish MPT-870 2K SL | Cat Lantai Pabrik",
      metaDescription:
        "Lapisan akhir (topcoat) cat epoxy lantai industri. Menghasilkan permukaan glossy, seamless, tahan goresan ban forklift, dan anti bahan kimia.",
      keywords: ["epoxy topcoat", "finishing epoxy lantai", "cat lantai industri", "cat epoxy tahan gores", "MPT-870"],
    },
  },
  {
    id: "topcoat871",
    slug: "mpt-871-2k-sl-finish-topcoat-coating",
    tag: "EPOXY TOPCOAT SL 2K",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg Set",
    image: "/images/produk/produk1.png",
    images: ["/images/produk/produk3.png"],
    title: "MPT-871 2K SL FINISH TOPCOAT COATING",
    description:
      "Multi Paint Topcoat Coating (MPT-871) adalah lapisan akhir epoxy khusus industrial coating. Memberikan perlindungan maksimal berpadu dengan estetika permukaan yang rapi, halus, dan seamless. Produk ini merupakan investasi jangka panjang untuk area workshop, laboratorium, maupun showroom yang butuh kebersihan tinggi.",
    features: [
      "Daya Rekat Tinggi (Excellent Adhesion)",
      "Ketahanan Kimia Sangat Baik (Excellent Chemical Resistance)",
      "Tahan Abrasi dan Beban Berat (Heavy Duty & Abrasion Resistant)",
      "Permukaan Halus, Rapi & Tanpa Sambungan (Smooth & Seamless Finish)",
      "Mudah Dibersihkan dan Dirawat",
      "Memberikan Tampilan Finishing yang Elegan dan Profesional",
      "Tahan Lama untuk Penggunaan Area Industri & Komersial",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Epoxy Topcoat Coating" },
      { label: "Tipe Produk", value: "2K (2 Komponen)" },
      { label: "Kemasan", value: "20 kg Set" },
      { label: "Penggunaan", value: "Lapisan finishing coating" },
    ],
    variants: [
      { label: "5 kg Set", weight: "5 kg Set", image: "/images/produk/produk2.png" },
      { label: "20 kg Set (Pail)", weight: "20 kg Set", image: "/images/produk/produk3.png" },
    ],
    tds: "/Documents/TDS%20MPT-871%20COATING%20FINISH%20.pdf",
    seo: {
      metaTitle: "Epoxy Topcoat Coating MPT-871 2K SL | Finishing Seamless",
      metaDescription:
        "Cat finishing epoxy topcoat coating MPT-871 untuk lantai gudang & showroom. Permukaan rapi, seamless, mudah dibersihkan, dan tahan abrasi ekstrim.",
      keywords: [
        "epoxy topcoat coating",
        "cat lantai seamless",
        "epoxy lantai showroom",
        "cat finishing pabrik",
        "MPT-871",
      ],
    },
  },
  {
    id: "polyurethane2k",
    slug: "polyurethane-2k",
    tag: "POLYURETHANE 2K",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg Set",
    image: "/images/produk/produk1.png",
    images: ["/images/produk/produk3.png"],
    title: "POLYURETHANE 2K",
    description:
      "Cat Polyurethane (PU) 2 komponen berkualitas industri. Berfungsi sebagai lapisan pelindung ekstra (topcoat) yang sangat tahan terhadap paparan sinar UV matahari, perubahan suhu cuaca, dan bahan kimia. Sangat cocok digunakan untuk lantai maupun struktur baja di area eksterior (outdoor).",
    features: [
      "Tahan Paparan Sinar UV (Tidak Mudah Pudar/Menguning)",
      "Perlindungan Ekstra terhadap Cuaca Ekstrim",
      "Finishing Rapi dan Tahan Gores",
      "Cocok untuk Kebutuhan Industrial dan Outdoor",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Polyurethane (PU) Coating" },
      { label: "Tipe Produk", value: "2K (2 Komponen)" },
      { label: "Kemasan", value: "20 kg Set" },
      { label: "Penggunaan", value: "Perlindungan & finishing eksterior" },
    ],
    tds: null,
    seo: {
      metaTitle: "Cat Polyurethane 2K (PU Coating) | Tahan Cuaca & Sinar UV",
      metaDescription:
        "Cat Polyurethane (PU) 2 komponen untuk lantai dan struktur baja industri. Pelapis anti pudar, tahan sinar UV, sangat ideal untuk area outdoor.",
      keywords: ["cat polyurethane", "PU coating", "cat lantai outdoor", "cat pelapis anti UV", "polyurethane 2k"],
    },
  },
  {
    id: "zinchromate1k",
    slug: "multizinc-zincromate", // Diperbaiki agar tidak ada spasi
    tag: "MULTIZINC ZINCROMATE",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg",
    image: "/images/produk/produk3.png",
    images: ["/images/produk/produk3.png"],
    title: "MULTIZINC ZINCROMATE", // Diperbaiki agar tidak ada spasi trailing
    description:
      "Multizinc Zincromate merupakan cat dasar (primer) anti-karat satu komponen yang secara efektif mengisolasi struktur besi dan baja dari proses korosi/oksidasi. Membantu memperpanjang usia pakai konstruksi bangunan, pagar, dan pipa industri Anda.",
    features: [
      "Perlindungan Ekstra terhadap Karat & Korosi",
      "Lapisan Dasar Pengecatan Besi & Baja",
      "Aplikasi Praktis dan Cepat Kering",
      "Cocok untuk Kebutuhan Coating Konstruksi",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Anti-Corrosion Primer" },
      { label: "Tipe Produk", value: "1K (1 Komponen)" },
      { label: "Kemasan", value: "20 kg" },
      { label: "Penggunaan", value: "Lapisan dasar struktur besi & baja" },
    ],
    tds: null,
    seo: {
      metaTitle: "Cat Dasar Anti Karat Multizinc Zincromate | Primer Besi Baja",
      metaDescription:
        "Cat dasar besi anti karat (primer zincromate) 1 komponen. Solusi jitu melindungi struktur konstruksi baja industri dari korosi secara optimal.",
      keywords: [
        "cat anti karat besi",
        "zincromate primer",
        "cat dasar baja",
        "pencegah korosi besi",
        "multizinc zincromate",
      ],
    },
  },
  {
    id: "syntheticcatminyak",
    slug: "synthetic-cat-minyak", // Diperbaiki format slug nya
    tag: "SYNTHETIC CAT MINYAK",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg",
    image: "/images/produk/produk3.png",
    images: ["/images/produk/produk3.png"],
    title: "SYNTHETIC CAT MINYAK",
    description:
      "Cat minyak berbahan dasar resin synthetic (alkyd) premium. Digunakan khusus untuk mengecat permukaan kayu dan besi, memberikan lapisan warna cerah yang tajam, sangat mengkilap (high-gloss), awet, dan tahan terhadap cuaca di dalam maupun luar ruangan.",
    features: [
      "Daya Tutup Sangat Baik & Cepat Kering",
      "Hasil Pengecatan Super Mengkilap (Glossy)",
      "Tahan Cuaca (Cocok untuk Interior & Eksterior)",
      "Pilihan Warna Beragam untuk Berbagai Kebutuhan",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Synthetic Alkyd Enamel" },
      { label: "Tipe Produk", value: "1K (1 Komponen)" },
      { label: "Kemasan", value: "20 kg" },
      { label: "Penggunaan", value: "Pengecatan dan finishing kayu & besi" },
    ],
    tds: null,
    seo: {
      metaTitle: "Synthetic Cat Minyak Premium | Cat Kayu & Besi Mengkilap",
      metaDescription:
        "Cat minyak sintetik (synthetic paint) berkualitas untuk permukaan kayu dan besi. Tampilan akhir high gloss, cepat kering, awet untuk interior & eksterior.",
      keywords: [
        "cat minyak kayu",
        "cat besi synthetic",
        "cat kayu mengkilap",
        "synthetic alkyd enamel",
        "cat besi premium",
      ],
    },
  },
  {
    id: "meniprimer",
    slug: "meni-primer",
    tag: "MENI PRIMER",
    tagColor: "bg-[#cfa426]",
    weight: "25 kg",
    image: "/images/produk/produk3.png",
    images: ["/images/produk/produk3.png"],
    title: "MENI PRIMER",
    description:
      "Cat dasar (wood/metal primer) ekonomis yang digunakan untuk mempersiapkan permukaan substrat kayu dan besi sebelum dilakukan pengecatan akhir. Meni primer sangat ampuh menutup pori-pori kayu dan memaksimalkan daya sebar cat finish.",
    features: [
      "Sempurna Menutup Pori-Pori Permukaan Kayu",
      "Mencegah Timbulnya Karat Ringan pada Besi",
      "Meningkatkan Daya Lekat Cat Sintetik di Atasnya",
      "Mendukung Proses Pengecatan Akhir agar Lebih Hemat",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Meni Primer (Cat Dasar)" },
      { label: "Tipe Produk", value: "1K (1 Komponen)" },
      { label: "Kemasan", value: "25 kg" },
      { label: "Penggunaan", value: "Lapisan dasar sebelum pengecatan akhir" },
    ],
    tds: null,
    seo: {
      metaTitle: "Cat Dasar Meni Primer | Penutup Pori Kayu & Pencegah Karat",
      metaDescription:
        "Cat dasar meni primer untuk substrat kayu dan besi. Secara ampuh menutup pori kayu, menghemat cat akhir, dan mendukung daya rekat cat yang maksimal.",
      keywords: ["cat meni primer", "cat dasar kayu", "meni besi", "wood primer indonesia", "cat penutup pori kayu"],
    },
  },
  {
    id: "cat marka jalan",
    slug: "cat-marka-jalan", // Diperbaiki dari format yang pakai spasi
    tag: "CAT MARKA JALAN",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg",
    image: "/images/produk/produk3.png",
    images: ["/images/produk/produk3.png"],
    title: "CAT MARKA JALAN",
    description:
      "Road Line Marking Paint adalah cat khusus untuk pembuatan marka jalan, garis pembatas area parkir, zebra cross, dan zona operasional pabrik. Diformulasikan dengan tingkat reflektansi tinggi (visibilitas cerah) dan ketahanan ekstra terhadap abrasi gesekan ban.",
    features: [
      "Warna Sangat Cerah (Visibilitas Tinggi Siang & Malam)",
      "Ketahanan Ekstra terhadap Gesekan Roda Kendaraan",
      "Cepat Kering & Pengaplikasian Mudah",
      "Ideal untuk Area Lalu Lintas, Gudang, & Parkiran",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Road Line Paint" },
      { label: "Tipe Produk", value: "1K" },
      { label: "Kemasan", value: "20 kg" },
      { label: "Penggunaan", value: "Pembuatan garis marka jalan & parkir" },
    ],
    tds: null,
    seo: {
      metaTitle: "Cat Marka Jalan & Garis Parkir (Road Line Marking Paint)",
      metaDescription:
        "Jual cat khusus marka jalan, garis parkiran gedung, dan pembatas zona pabrik. Warna cerah, sangat awet, cepat kering, dan tahan gesekan ban kendaraan.",
      keywords: [
        "cat marka jalan",
        "road line paint",
        "cat garis parkir",
        "cat marka lalu lintas",
        "cat pembatas zona pabrik",
      ],
    },
  },
];
