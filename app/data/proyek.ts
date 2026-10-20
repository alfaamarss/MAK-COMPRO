export interface ProjectSeo {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Project {
  id: string | number;
  slug: string; // Ditambahkan untuk URL dinamis yang SEO-friendly
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
  seo?: ProjectSeo; // Ditambahkan untuk Metadata Head
}

export const projects: Project[] = [
  // ================= AREA FILTERS =================

  // --- LANTAI PRODUKSI (3 Foto) ---
  {
    id: 1,
    slug: "lantai-epoxy-basement-polyurethane",
    title: "Lantai Epoxy Basement",
    desc: "Aplikasi Polyurethane Concrete kelas industri untuk lantai basement. Aman untuk standar food grade, anti-slip, serta sangat tahan terhadap suhu panas dan paparan bahan kimia ringan.",
    image: "/images/proyek/lantaiProduksi/lantaiProduksi1.PNG",
    status: "Selesai",
    tags: ["Lantai Produksi"],
    hasFooter: true,
    seo: {
      metaTitle: "Proyek Lantai Epoxy Basement & Polyurethane Food Grade",
      metaDescription:
        "Portofolio pengerjaan lantai epoxy basement dan Polyurethane Concrete food grade. Tahan suhu panas, bahan kimia, dan anti-slip.",
      keywords: ["lantai epoxy basement", "polyurethane concrete", "epoxy food grade", "cat lantai anti panas"],
    },
  },
  {
    id: 2,
    slug: "epoxy-area-produksi-farmasi",
    title: "Epoxy Area Produksi Farmasi",
    desc: "Aplikasi epoxy lantai higienis berstandar kesehatan tinggi (GMP/CPKB) untuk area produksi obat-obatan. Bebas bakteri, mudah dibersihkan, dan tahan lama.",
    image: "/images/proyek/lantaiProduksi/lantaiProduksi2.jpeg",
    status: "Selesai",
    tags: ["Lantai Produksi"],
    hasFooter: true,
    footerLeft: "PT Kalbe Farma",
    footerRight: "1.500 m²",
    seo: {
      metaTitle: "Proyek Epoxy Lantai Farmasi & Area Produksi Medis | Kalbe Farma",
      metaDescription:
        "Hasil pengerjaan epoxy lantai higienis bebas bakteri untuk area produksi farmasi berstandar GMP. Solusi lantai rumah sakit dan pabrik obat.",
      keywords: ["epoxy lantai farmasi", "standar lantai GMP", "epoxy pabrik obat", "lantai higienis anti bakteri"],
    },
  },
  {
    id: 3,
    slug: "self-leveling-epoxy-elektronik",
    title: "Self Leveling Epoxy Elektronik",
    desc: "Pemasangan lantai produksi anti-statis (ESD/Anti-Static Epoxy) untuk pabrik perakitan komponen elektronik guna mencegah kerusakan komponen akibat pelepasan elektrostatik.",
    image: "/images/proyek/lantaiProduksi/lantaiProduksi3.jpeg",
    status: "Selesai",
    tags: ["Lantai Produksi"],
    hasFooter: true,
    footerLeft: "PT Panasonic",
    footerRight: "2.000 m²",
    seo: {
      metaTitle: "Proyek Self Leveling Epoxy Anti-Statis (ESD) Komponen Elektronik",
      metaDescription:
        "Pengerjaan lantai epoxy anti-statis (ESD flooring) self-leveling untuk pabrik perakitan elektronik. Melindungi komponen presisi dari kerusakan statis.",
      keywords: [
        "epoxy lantai anti statis",
        "ESD flooring indonesia",
        "self leveling epoxy pabrik",
        "epoxy pabrik elektronik",
      ],
    },
  },

  // --- GUDANG & LOGISTIK (1 Foto) ---
  {
    id: 4,
    slug: "epoxy-coating-gudang-sparepart",
    title: "Epoxy Coating Gudang Sparepart",
    desc: "Aplikasi epoxy lantai heavy-duty dengan ketebalan 2000 micron untuk menahan beban berat aktivitas forklift, hand pallet, dan lalu lintas logistik yang padat.",
    image: "/images/proyek/gudang/gudang1.jpg",
    status: "Selesai",
    tags: ["Gudang & Logistik"],
    hasFooter: true,
    footerLeft: "PT Astra Otoparts",
    footerRight: "2.500 m²",
    seo: {
      metaTitle: "Proyek Epoxy Coating Gudang Logistik & Sparepart Heavy Duty",
      metaDescription:
        "Pengecatan epoxy lantai gudang logistik dengan ketebalan 2000 micron. Tahan gesekan beban berat forklift dan hand pallet setiap hari.",
      keywords: [
        "epoxy lantai gudang",
        "cat lantai heavy duty",
        "epoxy forklift tahan berat",
        "coating gudang logistik",
      ],
    },
  },

  // --- FASILITAS OLAHRAGA (3 Foto) ---
  {
    id: 6,
    slug: "pengecatan-lapangan-basket-outdoor",
    title: "Pengecatan Lapangan Basket 1",
    desc: "Aplikasi cat lapangan olahraga berbahan dasar acrylic khusus standar FIBA. Permukaan anti selip, tahan cuaca ekstrim, dan daya pantul bola yang presisi.",
    image: "/images/proyek/olahraga/olahraga1.jpg",
    status: "Selesai",
    tags: ["Fasilitas Olahraga"],
    hasFooter: true,
    footerLeft: "Gelora Bung Karno",
    footerRight: "Standard FIBA",
    seo: {
      metaTitle: "Proyek Pengecatan Lapangan Basket Standar FIBA | Gelora Bung Karno",
      metaDescription:
        "Hasil aplikasi pengecatan lapangan basket outdoor dengan cat acrylic tahan cuaca ekstrim dan anti-slip berstandar FIBA.",
      keywords: [
        "pengecatan lapangan basket",
        "cat lapangan acrylic",
        "sport flooring outdoor",
        "standar lapangan FIBA",
      ],
    },
  },
  {
    id: 7,
    slug: "pengecatan-lapangan-indoor-gor",
    title: "Pengecatan Lapangan Basket 2",
    desc: "Restorasi dan pengecatan ulang area lapangan basket indoor GOR dengan material pelapis sport flooring tingkat keawetan tinggi dan tahan gesekan sepatu.",
    image: "/images/proyek/olahraga/olahraga2.PNG",
    status: "Selesai",
    tags: ["Fasilitas Olahraga"],
    hasFooter: true,
    footerLeft: "GOR Jayabaya",
    footerRight: "1.200 m²",
    seo: {
      metaTitle: "Proyek Pengecatan Ulang Lapangan Indoor GOR Jayabaya",
      metaDescription:
        "Portofolio restorasi dan pengecatan sport flooring lapangan basket indoor. Tahan gesekan dengan grip optimal untuk kenyamanan atlet.",
      keywords: [
        "cat lapangan indoor",
        "perbaikan lapangan gor",
        "sport flooring indoor",
        "pengecatan lapangan futsal",
      ],
    },
  },
  {
    id: 8,
    slug: "pengecatan-lapangan-sport-center",
    title: "Pengecatan Lapangan Basket 3",
    desc: "Pelapisan area lapangan outdoor multi-fungsi terintegrasi dengan proteksi UV agar warna cat tidak mudah pudar walau terpapar sinar matahari secara terus-menerus.",
    image: "/images/proyek/olahraga/olahraga3.jpeg",
    status: "Selesai",
    tags: ["Fasilitas Olahraga"],
    hasFooter: true,
    footerLeft: "Sport Center",
    footerRight: "850 m²",
    seo: {
      metaTitle: "Proyek Pengecatan Lapangan Outdoor Proteksi UV | Sport Center",
      metaDescription:
        "Aplikasi cat lapangan multifungsi outdoor dengan lapisan anti-UV. Warna cerah awet jangka panjang, tidak mudah pudar dan anti genangan air.",
      keywords: [
        "cat lapangan anti UV",
        "pengecatan lapangan outdoor",
        "pembuatan lapangan basket",
        "cat lapangan sport center",
      ],
    },
  },

  // ================= MARKET FILTERS =================

  // --- MANUFAKTUR (2 Foto) ---
  {
    id: 9,
    slug: "epoxy-self-leveling-pabrik-manufaktur",
    title: "Sistem Pelapisan Lantai Pabrik 1",
    desc: "Pengecatan epoxy self-leveling berpresisi tinggi untuk mengoptimalkan pergerakan produksi di area perakitan kendaraan bermotor roda dua.",
    image: "/images/proyek/manufaktur/manufaktur1.jpeg",
    status: "Selesai",
    tags: ["Manufaktur"],
    hasFooter: true,
    footerLeft: "PT Yamaha Motor",
    footerRight: "4.000 m²",
    seo: {
      metaTitle: "Proyek Epoxy Self-Leveling Lantai Pabrik Manufaktur Motor",
      metaDescription:
        "Instalasi lantai epoxy self-leveling pabrik perakitan otomotif. Menciptakan area kerja mulus, presisi tinggi, dan mudah dirawat.",
      keywords: [
        "epoxy self leveling pabrik",
        "lantai pabrik otomotif",
        "jasa epoxy pabrik",
        "epoxy lantai manufaktur",
      ],
    },
  },
  {
    id: 10,
    slug: "coating-anti-gores-jalur-agv",
    title: "Sistem Pelapisan Lantai Pabrik 2",
    desc: "Aplikasi coating lantai industri anti-gores dan anti selip yang dirancang khusus untuk memfasilitasi jalur pelintasan robot AGV (Automated Guided Vehicle).",
    image: "/images/proyek/manufaktur/manufaktur2.jpeg",
    status: "Selesai", // Diseragamkan huruf kapital
    tags: ["Manufaktur"],
    hasFooter: true,
    footerLeft: "PT Toyota Motor",
    footerRight: "5.500 m²",
    seo: {
      metaTitle: "Proyek Pelapisan Lantai Pabrik & Jalur Robot AGV (Otomotif)",
      metaDescription:
        "Pengerjaan coating anti-gores khusus jalur AGV (Automated Guided Vehicle) pada lantai pabrik untuk mencegah selip dan memastikan operasi otomatis yang mulus.",
      keywords: ["coating lantai AGV", "epoxy jalur robotik", "lantai pabrik mobil", "cat lantai anti gores"],
    },
  },

  // --- OIL & CHEMICAL (3 Foto) ---
  {
    id: 11,
    slug: "chemical-resistant-floor-tingkat-tinggi",
    title: "Chemical Resistant Floor 1",
    desc: "Sistem pelapisan epoxy lantai khusus (Chemical Resistant Floor) yang kebal terhadap tumpahan bahan kimia keras korosif seperti asam pekat dan zat pelarut (solvent).",
    image: "/images/proyek/oil/oil1.jpeg",
    status: "Selesai", // Diseragamkan huruf kapital
    tags: ["Oil & Chemical"],
    hasFooter: true,
    footerLeft: "PT Chandra Asri",
    footerRight: "1.200 m²",
    seo: {
      metaTitle: "Proyek Epoxy Chemical Resistant Floor Pabrik Petrokimia",
      metaDescription:
        "Aplikasi lantai epoxy tahan bahan kimia keras (chemical resistant) pada fasilitas industri petrokimia. Melindungi beton dari korosi zat asam pekat.",
      keywords: [
        "chemical resistant floor",
        "epoxy lantai tahan kimia",
        "coating lantai asam",
        "lantai pabrik petrokimia",
      ],
    },
  },
  {
    id: 12,
    slug: "pelapisan-penyimpanan-drum-kimia",
    title: "Chemical Resistant Floor 2",
    desc: "Pelapisan area containment sekunder penyimpanan drum bahan kimia dan kilang minyak untuk mengisolasi rembesan zat berbahaya ke dalam tanah.",
    image: "/images/proyek/oil/oil2.jpeg",
    status: "Selesai",
    tags: ["Oil & Chemical"],
    hasFooter: true,
    footerLeft: "PT Pertamina",
    footerRight: "2.100 m²",
    seo: {
      metaTitle: "Proyek Pelapisan Area Containment Drum Bahan Kimia",
      metaDescription:
        "Instalasi lapisan protektif pada area penyimpanan drum kimia & kilang sekunder untuk menahan rembesan bocoran zat berbahaya.",
      keywords: [
        "epoxy secondary containment",
        "lantai gudang kimia",
        "pelapis tangki kimia",
        "protective coating kilang",
      ],
    },
  },
  {
    id: 13,
    slug: "epoxy-anti-korosi-loading-dock",
    title: "Chemical Resistant Floor 3",
    desc: "Pengecatan lantai epoxy jenis Novolac pelindung anti-korosi pada area loading dock fasilitas bongkar muat bahan bakar cair dan cairan kimia.",
    image: "/images/proyek/oil/oil3.jpeg",
    status: "Selesai",
    tags: ["Oil & Chemical"],
    hasFooter: true,
    footerLeft: "Chevron",
    footerRight: "900 m²",
    seo: {
      metaTitle: "Proyek Epoxy Novolac Anti-Korosi Area Loading Dock Kimia",
      metaDescription:
        "Pengerjaan epoxy Novolac dengan ketahanan kimia ekstra tinggi untuk area loading dock operasional bahan bakar minyak (BBM) dan cairan kimia.",
      keywords: ["epoxy novolac", "epoxy loading dock", "cat lantai tahan minyak", "lantai anti korosi"],
    },
  },

  // --- KONSTRUKSI BAJA (2 Foto) ---
  {
    id: 14,
    slug: "coating-anti-karat-struktur-baja",
    title: "Coating Struktur Baja Konstruksi 1",
    desc: "Sistem pengecatan protective coating anti-karat (anti-corrosion) berstandar maritim dan industri pada struktur baja untuk ketahanan struktural jangka panjang.",
    image: "/images/proyek/kontruksiBaja/kontruksiBaja1.jpg",
    status: "Selesai",
    tags: ["Konstruksi Baja"],
    hasFooter: true,
    footerLeft: "PT Krakatau Steel",
    footerRight: "5.000 m²",
    seo: {
      metaTitle: "Proyek Protective Coating Anti-Karat Struktur Baja Konstruksi",
      metaDescription:
        "Pengecatan struktur rangka baja menggunakan cat anti-korosi industri heavy duty. Memberikan proteksi maksimal terhadap oksidasi karat lingkungan ekstrem.",
      keywords: [
        "coating struktur baja",
        "cat anti karat besi",
        "protective coating baja",
        "pengecatan konstruksi baja",
      ],
    },
  },
  {
    id: 15,
    slug: "fireproofing-rangka-baja-bangunan",
    title: "Coating Struktur Baja Konstruksi 2",
    desc: "Aplikasi lapisan proteksi penahan panas api (fireproofing intumescent coating) pada rangka baja struktural bangunan untuk mencegah runtuhnya struktur saat terjadi kebakaran.",
    image: "/images/proyek/kontruksiBaja/kontruksiBaja2.jpg",
    status: "Selesai",
    tags: ["Konstruksi Baja"],
    hasFooter: true,
    footerLeft: "PT Gunung Raja Paksi",
    footerRight: "3.500 m²",
    seo: {
      metaTitle: "Proyek Aplikasi Fireproofing Intumescent Coating Rangka Baja",
      metaDescription:
        "Pengerjaan fireproofing (pelapis anti api) intumescent pada baja struktur konstruksi. Standar keselamatan tinggi untuk menahan runtuh karena kebakaran.",
      keywords: ["fireproofing baja", "intumescent coating", "cat penahan api", "proteksi baja kebakaran"],
    },
  },

  // --- FASILITAS INDUSTRI (2 Foto) ---
  {
    id: 16,
    slug: "waterproofing-coating-fasilitas-industri",
    title: "Pengecatan Fasilitas Produksi 1",
    desc: "Instalasi membran waterproofing berlapis dan coating industrial pada area atap serta lantai fasilitas produksi untuk mencegah kebocoran skala besar.",
    image: "/images/proyek/fasilitasProduksi/fasilitiasProduksi1.jpeg",
    status: "Selesai",
    tags: ["Fasilitas Industri"],
    hasFooter: true,
    footerLeft: "Kawasan Industri MM2100",
    footerRight: "1.500 m²",
    seo: {
      metaTitle: "Proyek Waterproofing & Coating Fasilitas Industri Kawasan MM2100",
      metaDescription:
        "Instalasi waterproofing bocor dan industrial coating pada bangunan pabrik kawasan industri. Cepat, tepat, dan tahan lama.",
      keywords: ["waterproofing pabrik", "industrial coating", "cat lantai mm2100", "pengecatan gedung industri"],
    },
  },
  {
    id: 17,
    slug: "pengecatan-area-operasional-alat-berat",
    title: "Pengecatan Fasilitas Produksi 2",
    desc: "Pengecatan lantai polyurethane yang sangat tahan terhadap beban dan gesekan pada area operasional parkir dan manuver alat berat (excavator/loader) pabrik.",
    image: "/images/proyek/fasilitasProduksi/fasilitasProduksi2.jpg",
    status: "Selesai", // Diseragamkan huruf kapital
    tags: ["Fasilitas Industri"],
    hasFooter: true,
    footerLeft: "Kawasan Industri KIIC",
    footerRight: "2.000 m²",
    seo: {
      metaTitle: "Proyek Pengecatan Lantai Operasional Alat Berat Industri",
      metaDescription:
        "Pengecatan lantai polyurethane ekstra tangguh (heavy duty) di zona pergerakan alat berat industri untuk meminimalisir kerusakan struktur beton.",
      keywords: [
        "pengecatan lantai alat berat",
        "polyurethane lantai pabrik",
        "epoxy lantai heavy duty",
        "cat lantai beton industri",
      ],
    },
  },
];
