export interface ProductFeature {
  title: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

// 1. Tambahkan interface untuk struktur Varian/Ukuran
export interface ProductVariant {
  label: string;
  weight: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
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
      "Multi Paint Primer adalah cat lantai epoxy berkualitas tinggi yang dirancang untuk memberikan perlindungan maksimal pada permukaan lantai beton. Memiliki daya rekat kuat, tahan abrasi, serta ketahanan yang baik terhadap bahan kimia dan beban lalu lintas, sehingga cocok untuk area industri dan komersial.",
    features: [
      "Daya Rekat yang Luar Biasa (Excellent Bonding Strength)",
      "Ketahanan Kimia yang Sangat Baik",
      "Sangat Kuat dan Tahan Beban Berat (Heavy Duty)",
      "Permukaan Halus dan Tanpa Sambungan (Smooth and Seamless)",
      "Mudah Dibersihkan dan Dirawat",
      "Aman dan Ramah Lingkungan",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Epoxy Primer" },
      { label: "Tipe Produk", value: "2K" },
      { label: "Kemasan", value: "5 kg & 20 kg Set" },
      { label: "Penggunaan", value: "Lapisan dasar coating" },
    ],
    tds: null,
    variants: [
      {
        label: "5 kg Set",
        weight: "5 kg Set",
        image: "/images/produk/produk2.png",
      },
      {
        label: "20 kg Set",
        weight: "20 kg Set",
        image: "/images/produk/produk3.png",
      },
    ],
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
      "Multi Paint Bodycoat adalah cat lantai epoxy berkualitas tinggi yang dirancang untuk memberikan perlindungan maksimal pada permukaan lantai beton. Memiliki daya rekat kuat, tahan abrasi, serta ketahanan yang baik terhadap bahan kimia dan beban lalu lintas, sehingga cocok untuk area industri dan komersial.",
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
      { label: "Tipe Produk", value: "2K" },
      { label: "Kemasan", value: "5 kg & 20 kg Set" },
      { label: "Penggunaan", value: "Lapisan coating" },
    ],
    tds: null,
    variants: [
      {
        label: "5 kg Set",
        weight: "5 kg Set",
        image: "/images/produk/produk2.png",
      },
      {
        label: "20 kg Set (Pail)",
        weight: "20 kg Set",
        image: "/images/produk/produk3.png",
      },
    ],
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
      "MULTI PAINT Topcoat coating adalah cat lantai epoxy berkualitas tinggi yang dirancang untuk memberikan perlindungan maksimal pada permukaan lantai beton. Memiliki daya rekat kuat, tahan abrasi, serta ketahanan yang baik terhadap bahan kimia dan beban lalu lintas, sehingga cocok untuk area industri dan komersial.",
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
      { label: "Tipe Produk", value: "2K" },
      { label: "Kemasan", value: "20 kg Set" },
      { label: "Penggunaan", value: "Lapisan finishing" },
    ],
    variants: [
      {
        label: "5 kg Set",
        weight: "5 kg Set",
        image: "/images/produk/produk2.png",
      },
      {
        label: "20 kg Set (Pail)",
        weight: "20 kg Set",
        image: "/images/produk/produk3.png",
      },
    ],
    tds: null,
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
      "Multi Paint Topcoat Coating adalah lapisan akhir epoxy berkualitas tinggi yang dirancang untuk memberikan perlindungan maksimal sekaligus menghasilkan permukaan lantai yang kuat, halus, rapi, dan tahan lama. Formulanya memberikan ketahanan yang baik terhadap abrasi, bahan kimia, serta beban lalu lintas, sehingga sangat cocok digunakan sebagai lapisan finishing pada area industri, gudang, pabrik, workshop, dan area komersial.",
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
      { label: "Tipe Produk", value: "2K" },
      { label: "Kemasan", value: "20 kg Set" },
      { label: "Penggunaan", value: "Lapisan finishing coating" },
    ],
    variants: [
      {
        label: "5 kg Set",
        weight: "5 kg Set",
        image: "/images/produk/produk2.png",
      },
      {
        label: "20 kg Set (Pail)",
        weight: "20 kg Set",
        image: "/images/produk/produk3.png",
      },
    ],
    tds: null,
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
      "Produk polyurethane dua komponen yang digunakan sebagai bagian dari sistem perlindungan dan finishing permukaan sesuai dengan kebutuhan aplikasi.",
    features: ["Ketahanan Permukaan", "Perlindungan Tambahan", "Finishing Rapi", "Cocok untuk Kebutuhan Industrial"],
    specifications: [
      { label: "Kategori Produk", value: "Polyurethane" },
      { label: "Tipe Produk", value: "2K" },
      { label: "Kemasan", value: "20 kg Set" },
      { label: "Penggunaan", value: "Perlindungan dan finishing" },
    ],
    tds: null,
  },
  {
    id: "zinchromate1k",
    slug: "zinchromate-1k",
    tag: "MULTIZINC ZINCROMATE ",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg",
    image: "/images/produk/produk3.png",
    images: ["/images/produk/produk3.png"],
    title: "MULTIZINC ZINCROMATE ",
    description:
      "Produk primer satu komponen yang digunakan sebagai lapisan dasar untuk membantu memberikan perlindungan pada permukaan sebelum aplikasi lapisan berikutnya.",
    features: ["Lapisan Dasar", "Perlindungan Permukaan", "Aplikasi Praktis", "Cocok untuk Kebutuhan Coating"],
    specifications: [
      { label: "Kategori Produk", value: "Primer" },
      { label: "Tipe Produk", value: "1K" },
      { label: "Kemasan", value: "20 kg" },
      { label: "Penggunaan", value: "Lapisan dasar coating" },
    ],
    tds: null,
  },
  {
    id: "syntheticcatminyak",
    slug: "syntheticminyak ",
    tag: "SYNTHETIC CAT MINYAK ",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg",
    image: "/images/produk/produk3.png",
    images: ["/images/produk/produk3.png"],
    title: "SYNTHETIC CAT MINYAK",
    description:
      "Cat minyak berbasis synthetic yang digunakan untuk pengecatan dan finishing permukaan, memberikan lapisan warna sekaligus membantu melindungi permukaan sesuai kebutuhan aplikasi.",
    features: [
      "Mudah Diaplikasikan",
      "Hasil Pengecatan Rapi",
      "Pilihan Warna untuk Berbagai Kebutuhan",
      "Cocok untuk Finishing Permukaan",
    ],

    specifications: [
      { label: "Kategori Produk", value: "Synthetic cat minyak" },
      { label: "Tipe Produk", value: "1K" },
      { label: "Kemasan", value: "20 kg" },
      { label: "Penggunaan", value: "Pengecatan dan finishing permukaan" },
    ],
    tds: null,
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
      "Cat dasar yang digunakan untuk membantu mempersiapkan permukaan sebelum pengecatan akhir, mendukung daya lekat lapisan cat serta membantu melindungi permukaan.",
    features: [
      "Membantu Persiapan Permukaan",
      "Mendukung Daya Lekat Cat",
      "Digunakan sebagai Lapisan Dasar",
      "Mendukung Proses Pengecatan Akhir",
    ],
    specifications: [
      { label: "Kategori Produk", value: "meni primer" },
      { label: "Tipe Produk", value: "1K" },
      { label: "Kemasan", value: "25 kg" },
      { label: "Penggunaan", value: "Lapisan dasar sebelum pengecatan akhir" },
    ],
    tds: null,
  },
  {
    id: "cat marka jalan",
    slug: "cat marka jalan",
    tag: "CAT MARKA JALAN",
    tagColor: "bg-[#cfa426]",
    weight: "20 kg",
    image: "/images/produk/produk3.png",
    images: ["/images/produk/produk3.png"],
    title: "CAT MARKA JALAN",
    description:
      "Cat khusus untuk pembuatan marka jalan yang digunakan untuk memberikan garis pembatas, tanda, dan petunjuk visual pada jalan maupun area parkir agar lebih mudah terlihat.",
    features: [
      "Untuk Marka Jalan dan Area Parkir",
      "Membantu Memperjelas Garis Marka",
      "Mendukung Visibilitas Penandaan",
      "Untuk Penandaan Area Lalu Lintas",
    ],
    specifications: [
      { label: "Kategori Produk", value: "Cat Marka Jalan" },
      { label: "Tipe Produk", value: "1K" },
      { label: "Kemasan", value: "20 kg" },
      { label: "Penggunaan", value: "Pembuatan marka jalan" },
    ],
    tds: null,
  },
];
