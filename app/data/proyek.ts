export interface Project {
  id: string | number;
  title: string;
  desc?: string;
  image: string;
  status: string;
  isFeaturedBadge?: boolean;
  featured?: boolean;
  tags: string[];
  hasFooter?: boolean;
  footerLeft?: string;
  footerRight?: string;
}

export const projects: Project[] = [
  // ================= AREA FILTERS =================

  // --- LANTAI PRODUKSI (3 Foto) ---
  {
    id: 1,
    title: "LANTAI PRODUKSI FOOD GRADE",
    desc: "Polyurethane Concrete yang aman untuk standar food grade, tahan panas dan bahan kimia ringan.",
    image: "/images/proyek/lantaiProduksi/lantaiProduksi1.PNG",
    status: "Selesai",
    tags: ["Lantai Produksi"],
    hasFooter: true,
    footerLeft: "PT Indofood CBP",
    footerRight: "3.200 m²",
  },
  {
    id: 2,
    title: "Epoxy Area Produksi Farmasi",
    desc: "Aplikasi epoxy lantai standar kesehatan untuk area produksi obat-obatan.",
    image: "/images/proyek/lantaiProduksi/lantaiProduksi2.jpeg",
    status: "Selesai",
    tags: ["Lantai Produksi"],
    hasFooter: true,
    footerLeft: "PT Kalbe Farma",
    footerRight: "1.500 m²",
  },
  {
    id: 3,
    title: "Self Leveling Epoxy Elektronik",
    desc: "Lantai produksi anti-statis untuk pabrik perakitan komponen elektronik.",
    image: "/images/proyek/lantaiProduksi/lantaiProduksi3.jpeg",
    status: "Berjalan",
    tags: ["Lantai Produksi"],
    hasFooter: true,
    footerLeft: "PT Panasonic",
    footerRight: "2.000 m²",
  },

  // --- GUDANG & LOGISTIK (1 Foto) ---
  {
    id: 4,
    title: "Epoxy Coating Gudang Sparepart",
    desc: "Aplikasi epoxy lantai dengan ketebalan 2000 micron untuk menahan beban berat forklift dan palet.",
    image: "/images/proyek/gudang/gudang1.jpg",
    status: "Selesai",
    tags: ["Gudang & Logistik"],
    hasFooter: true,
    footerLeft: "PT Astra Otoparts",
    footerRight: "2.500 m²",
  },

  // --- BANGUNAN KOMERSIAL (Karena tidak ada folder khusus, saya pakai foto unsplash sementara) ---
  //   {
  //     id: 5,
  //     title: "Waterproofing Rooftop Gedung",
  //     desc: "Injeksi beton dan pelapisan membran bakar waterproofing untuk mencegah kebocoran pada area atap.",
  //     image: "https://images.unsplash.com/photo-1541888062973-509ce1ca0d53?q=80&w=800",
  //     status: "Berjalan",
  //     tags: ["Bangunan Komersial"],
  //     hasFooter: true,
  //     footerLeft: "Sudirman Grand Tower",
  //     footerRight: "800 m²",
  //   },

  // --- FASILITAS OLAHRAGA (3 Foto) ---
  {
    id: 6,
    title: "Pengecatan Lapangan Basket 1",
    desc: "Aplikasi cat lapangan olahraga berbahan dasar acrylic yang anti selip dan tahan cuaca ekstrim.",
    image: "/images/proyek/olahraga/olahraga1.jpg",
    status: "Selesai",
    tags: ["Fasilitas Olahraga"],
    hasFooter: true,
    footerLeft: "Gelora Bung Karno",
    footerRight: "Standard FIBA",
  },
  {
    id: 7,
    title: "Pengecatan Lapangan Basket 2",
    desc: "Pengecatan ulang area lapangan indoor dengan material tahan gesekan.",
    image: "/images/proyek/olahraga/olahraga2.PNG",
    status: "Selesai",
    tags: ["Fasilitas Olahraga"],
    hasFooter: true,
    footerLeft: "GOR Jayabaya",
    footerRight: "1.200 m²",
  },
  {
    id: 8,
    title: "Pengecatan Lapangan Basket 3",
    desc: "Pelapisan area lapangan outdoor dengan proteksi UV.",
    image: "/images/proyek/olahraga/olahraga3.jpeg",
    status: "Selesai",
    tags: ["Fasilitas Olahraga"],
    hasFooter: true,
    footerLeft: "Sport Center",
    footerRight: "850 m²",
  },

  // ================= MARKET FILTERS =================

  // --- MANUFAKTUR (2 Foto) ---
  {
    id: 9,
    title: "Sistem Pelapisan Lantai Pabrik 1",
    desc: "Pengecatan epoxy self-leveling untuk area perakitan kendaraan roda dua.",
    image: "/images/proyek/manufaktur/manufaktur1.jpeg",
    status: "Selesai",
    tags: ["Manufaktur"],
    hasFooter: true,
    footerLeft: "PT Yamaha Motor",
    footerRight: "4.000 m²",
  },
  {
    id: 10,
    title: "Sistem Pelapisan Lantai Pabrik 2",
    desc: "Coating anti gores untuk jalur lintasan AGV (Automated Guided Vehicle).",
    image: "/images/proyek/manufaktur/manufaktur2.jpeg",
    status: "Berjalan",
    tags: ["Manufaktur"],
    hasFooter: true,
    footerLeft: "PT Toyota Motor",
    footerRight: "5.500 m²",
  },

  // --- OIL & CHEMICAL (3 Foto) ---
  {
    id: 11,
    title: "Chemical Resistant Floor 1",
    desc: "Sistem pelapisan lantai khusus yang tahan terhadap tumpahan bahan kimia keras tingkat tinggi.",
    image: "/images/proyek/oil/oil1.jpeg",
    status: "Berjalan",
    tags: ["Oil & Chemical"],
    hasFooter: true,
    footerLeft: "PT Chandra Asri",
    footerRight: "1.200 m²",
  },
  {
    id: 12,
    title: "Chemical Resistant Floor 2",
    desc: "Pelapisan area penyimpanan drum bahan kimia sekunder.",
    image: "/images/proyek/oil/oil2.jpeg",
    status: "Selesai",
    tags: ["Oil & Chemical"],
    hasFooter: true,
    footerLeft: "PT Pertamina",
    footerRight: "2.100 m²",
  },
  {
    id: 13,
    title: "Chemical Resistant Floor 3",
    desc: "Pengecatan epoxy anti-korosi pada area loading dock bahan cair.",
    image: "/images/proyek/oil/oil3.jpeg",
    status: "Selesai",
    tags: ["Oil & Chemical"],
    hasFooter: true,
    footerLeft: "Chevron",
    footerRight: "900 m²",
  },

  // --- KONSTRUKSI BAJA (2 Foto) ---
  {
    id: 14,
    title: "Coating Struktur Baja Konstruksi 1",
    desc: "Pengecatan anti-karat (anti-corrosion) pada struktur baja untuk ketahanan jangka panjang.",
    image: "/images/proyek/kontruksiBaja/kontruksiBaja1.jpg",
    status: "Selesai",
    tags: ["Konstruksi Baja"],
    hasFooter: true,
    footerLeft: "PT Krakatau Steel",
    footerRight: "5.000 m²",
  },
  {
    id: 15,
    title: "Coating Struktur Baja Konstruksi 2",
    desc: "Proteksi fireproofing pada rangka baja bangunan.",
    image: "/images/proyek/kontruksiBaja/kontruksiBaja2.jpg",
    status: "Selesai",
    tags: ["Konstruksi Baja"],
    hasFooter: true,
    footerLeft: "PT Gunung Raja Paksi",
    footerRight: "3.500 m²",
  },

  // --- FASILITAS INDUSTRI (2 Foto, diambil dari folder fasilitasProduksi) ---
  {
    id: 16,
    title: "Pengecatan Fasilitas Produksi 1",
    desc: "Waterproofing dan coating pada lantai fasilitas industri.",
    // Menggunakan ejaan persis sesuai list yang kamu berikan (fasilitiasProduksi1)
    image: "/images/proyek/fasilitasProduksi/fasilitiasProduksi1.jpeg",
    status: "Selesai",
    tags: ["Fasilitas Industri"],
    hasFooter: true,
    footerLeft: "Kawasan Industri MM2100",
    footerRight: "1.500 m²",
  },
  {
    id: 17,
    title: "Pengecatan Fasilitas Produksi 2",
    desc: "Pengecatan area operasional alat berat di fasilitas produksi.",
    image: "/images/proyek/fasilitasProduksi/fasilitasProduksi2.jpg",
    status: "Berjalan",
    tags: ["Fasilitas Industri"],
    hasFooter: true,
    footerLeft: "Kawasan Industri KIIC",
    footerRight: "2.000 m²",
  },
];
