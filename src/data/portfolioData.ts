export type Language = "en" | "id";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: {
    en: string;
    id: string;
  };
}

export interface StarMethod {
  situation: { en: string; id: string };
  task: { en: string; id: string };
  action: { en: string; id: string };
  result: { en: string; id: string };
}

export interface Project {
  id: string;
  title: string;
  category: "ai" | "fullstack" | "realtime" | "mobile";
  badge: { en: string; id: string };
  tagline: { en: string; id: string };
  description: { en: string; id: string };
  starMethod: StarMethod;
  architectureHighlights: {
    en: string[];
    id: string[];
  };
  stack: string[];
  featured: boolean;
  isMasterpiece?: boolean;
  hidden?: boolean;
  live?: string;
  liveLabel?: { en: string; id: string };
  github?: string;
  githubBe?: string;
  apiDocs?: string;
  role: { en: string; id: string };
  screenshots: ProjectScreenshot[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: "Engineering" | "Security" | "Data";
  issueDate: string;
  credentialUrl?: string;
  preview: string;
  pdf: string;
  skills: string[];
  description: {
    en: string;
    id: string;
  };
}

export const siteConfig = {
  name: "M. Althaf Kiram",
  shortName: "Althaf",
  role: {
    en: "Fullstack Software Engineer",
    id: "Fullstack Software Engineer",
  },
  status: {
    en: "Available for hire · remote or relocate",
    id: "Siap dihubungi · remote atau relokasi",
  },
  location: {
    en: "Indonesia · open to remote or relocate",
    id: "Indonesia · terbuka untuk remote atau relokasi",
  },
  email: "malthafkiram@gmail.com",
  phone: "+62 851-5771-5522",
  phoneHref: "tel:+6285157715522",
  whatsappHref:
    "https://wa.me/6285157715522?text=Halo%20Althaf,%20saya%20tertarik%20dengan%20profil%20dan%20portofolio%20Anda.",
  github: "https://github.com/malthafkiram",
  linkedin: "https://www.linkedin.com/in/malthafkiram",
  siteUrl: "https://m-althaf-kiram-portfolio.vercel.app",
  cvPdf: "/cv/CV_M_Althaf_Kiram_Fullstack.pdf",
  stats: [
    { label: { en: "Live products", id: "Produk live" }, value: "6+" },
    { label: { en: "Bootcamp", id: "Bootcamp" }, value: "Hacktiv8" },
    { label: { en: "CS GPA", id: "IPK S1" }, value: "3.66" },
    { label: { en: "Certificates", id: "Sertifikat" }, value: "8" },
  ],
};

export const projectsData: Project[] = [
  {
    id: "autodrive-rac",
    title: "RAC (Recommendation Auto Car)",
    category: "ai",
    badge: {
      en: "Automotive AI · LangChain + RAG",
      id: "AI otomotif · LangChain + RAG",
    },
    isMasterpiece: true,
    featured: true,
    tagline: {
      en: "Car advisor that answers from a live MongoDB catalog, then continues to 360 inspection, credit simulation, and nearby dealers.",
      id: "Advisor mobil yang menjawab dari katalog MongoDB live, lalu lanjut ke inspeksi 360, simulasi kredit, dan dealer terdekat.",
    },
    description: {
      en: "Recommendation Auto Car grounds every reply on real OTR specs in MongoDB before Groq answers, so the chatbot cannot invent prices or unavailable units. Buyers also get 360 inspection, AI credit insight, Google Places dealer search, and Midtrans Snap for premium access.",
      id: "Recommendation Auto Car menambatkan setiap jawaban ke spek OTR di MongoDB sebelum Groq menjawab, sehingga chatbot tidak mengarang harga atau unit. Pembeli juga mendapat inspeksi 360, insight kredit AI, pencarian dealer Google Places, dan akses premium lewat Midtrans Snap.",
    },
    starMethod: {
      situation: {
        en: "Car buyers in Indonesia compare OTR prices, color stock, and loan math across scattered catalogs, while generic chatbots often invent specs that are not in inventory.",
        id: "Calon pembeli mobil di Indonesia membandingkan harga OTR, stok warna, dan cicilan dari katalog yang terpecah, sementara chatbot generik sering mengarang spek yang tidak ada di stok.",
      },
      task: {
        en: "Build a live automotive advisor that answers only from the catalog, then connects recommendation, 360 inspection, credit simulation, and dealer search in one product.",
        id: "Membangun advisor otomotif yang hanya menjawab dari katalog, lalu menghubungkan rekomendasi, inspeksi 360, simulasi kredit, dan pencarian dealer dalam satu produk.",
      },
      action: {
        en: "Built an Express and MongoDB backend with a LangChain RAG pipeline: retrieve active cars, attach ground-truth context, then generate with Groq LLaMA 3.3. Added a 360 showcase, Midtrans token gate, and Google Places session cache.",
        id: "Membangun backend Express dan MongoDB dengan pipeline LangChain RAG: ambil mobil aktif, sisipkan konteks katalog, lalu generate dengan Groq LLaMA 3.3. Menambah showcase 360, gerbang token Midtrans, dan cache sesi Google Places.",
      },
      result: {
        en: "Live at rac.kabanroom.web.id with catalog-grounded answers, interactive 360 inspection, and a freemium AI quota that upgrades through Midtrans Snap.",
        id: "Live di rac.kabanroom.web.id dengan jawaban yang terikat ke katalog, inspeksi 360 interaktif, dan kuota AI freemium yang bisa di-upgrade lewat Midtrans Snap.",
      },
    },
    architectureHighlights: {
      en: [
        "LangChain RAG pipeline: retrieve live MongoDB cars, augment the system prompt, then generate with Groq LLaMA 3.3",
        "Answers only from active catalog units, Indonesian OTR prices, and in-stock colors",
        "360 showcase plus dynamic color swap with Available, Limited, and Out of stock states",
        "Freemium SaaS with 5 free AI tokens, Midtrans Snap premium, and Google Places session caching",
      ],
      id: [
        "Pipeline LangChain RAG: ambil mobil live dari MongoDB, augment system prompt, lalu generate dengan Groq LLaMA 3.3",
        "Guardrail anti-halusinasi: hanya unit aktif di katalog, harga OTR Indonesia, dan varian warna yang tersedia",
        "Showcase 360 plus color swap dinamis dengan status Available, Limited, dan Out of stock",
        "SaaS freemium dengan 5 token AI gratis, premium Midtrans Snap, dan session cache Google Places",
      ],
    },
    stack: [
      "LangChain",
      "RAG",
      "Groq AI",
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "Midtrans",
    ],
    live: "https://rac.kabanroom.web.id/",
    liveLabel: { en: "View live", id: "Lihat live" },
    github: "https://github.com/malthafkiram/Recommendation-Auto-Car",
    role: { en: "Fullstack & AI Engineer", id: "Engineer Fullstack & AI" },
    screenshots: [
      {
        src: "/projects/autodrive/home.png",
        alt: "RAC home and showroom",
        caption: {
          en: "Home showroom and vehicle entry",
          id: "Beranda showroom dan masuk ke katalog mobil",
        },
      },
      {
        src: "/projects/autodrive/catalog.png",
        alt: "RAC vehicle catalog",
        caption: {
          en: "Live catalog with OTR prices and stock status",
          id: "Katalog live dengan harga OTR dan status stok",
        },
      },
      {
        src: "/projects/autodrive/ai-rekomendasi.png",
        alt: "RAC AI recommendation chat",
        caption: {
          en: "LangChain RAG advisor grounded on the MongoDB catalog",
          id: "Advisor LangChain RAG yang terikat ke katalog MongoDB",
        },
      },
      {
        src: "/projects/autodrive/credit-plan.png",
        alt: "RAC credit plan simulation",
        caption: {
          en: "Credit simulation and installment plan",
          id: "Simulasi kredit dan rencana cicilan",
        },
      },
    ],
  },
  {
    id: "lamarkerja-ai",
    title: "LamarKerja AI",
    category: "ai",
    badge: { en: "Career automation", id: "Otomasi karir" },
    isMasterpiece: true,
    featured: true,
    tagline: {
      en: "Job application suite: OCR flyer scanner, multi-portal search, AI cover letters, and a live coding arena.",
      id: "Suite lamaran kerja: pemindai pamflet OCR, pencarian multi-portal, draf cover letter AI, dan arena live coding.",
    },
    description: {
      en: "Self-hosted career platform that aggregates 12 job portals. Drop & Send uses Tesseract OCR and Groq to pull HR contacts from flyers and send a draft through Gmail SMTP. Also includes ATS CV audit, voice mock interview, and an anti-scam check.",
      id: "Platform karir mandiri yang menghimpun 12 portal loker. Drop & Send memakai Tesseract OCR dan Groq untuk mengambil kontak HRD dari pamflet lalu mengirim draf lewat Gmail SMTP. Ada juga audit CV ATS, simulasi wawancara suara, dan pemeriksaan loker mencurigakan.",
    },
    starMethod: {
      situation: {
        en: "Job seekers jump across many portals, rewrite the same email, and still risk fake paid listings.",
        id: "Pencari kerja berpindah antar portal, menulis ulang email yang sama, dan tetap rentan terhadap loker berbayar palsu.",
      },
      task: {
        en: "Build one fullstack flow that unifies job sources, drafts applications with AI and OCR, and adds anti-scam checks plus mock interviews.",
        id: "Membangun satu alur fullstack yang menyatukan sumber loker, menyusun draf lamaran dengan AI dan OCR, serta menambah pemeriksaan anti-scam dan simulasi wawancara.",
      },
      action: {
        en: "Built Express and PostgreSQL with Sequelize. Wired Tesseract OCR and Groq LLaMA 3.3 for flyer parsing, token-based Gmail SMTP, Web Speech STT for interviews, and a Three.js globe for remote roles.",
        id: "Membangun Express dan PostgreSQL dengan Sequelize. Menghubungkan Tesseract OCR dan Groq LLaMA 3.3 untuk membaca pamflet, Gmail SMTP berbasis token, Web Speech STT untuk wawancara, dan globe Three.js untuk loker remote.",
      },
      result: {
        en: "Live product with job search, OCR dispatch, CV tools, interview practice, and application tracking in one place.",
        id: "Produk live dengan pencarian loker, pengiriman OCR, alat CV, latihan wawancara, dan pelacakan lamaran dalam satu tempat.",
      },
    },
    architectureHighlights: {
      en: [
        "OCR plus LLM pipeline: Tesseract and Groq LLaMA 3.3 for flyer extraction",
        "Job feed aggregation across 12 portals with an 8-day window",
        "PostgreSQL schema for application tracking",
        "Local storage for Gmail app passwords, kept off the public client",
      ],
      id: [
        "Pipeline OCR dan LLM: Tesseract dan Groq LLaMA 3.3 untuk membaca pamflet",
        "Agregasi loker dari 12 portal dengan jendela 8 hari",
        "Skema PostgreSQL untuk pelacakan lamaran",
        "Penyimpanan lokal untuk Gmail app password, tidak diekspos ke klien publik",
      ],
    },
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Groq AI",
      "Tesseract OCR",
      "React",
      "Tailwind CSS",
      "Three.js",
      "PWA",
    ],
    live: "https://lamarkerja.kabanroom.web.id",
    liveLabel: { en: "View live", id: "Lihat live" },
    github: "https://github.com/malthafkiram/LamarKerja-AI",
    role: { en: "Fullstack Engineer", id: "Engineer Fullstack" },
    screenshots: [
      {
        src: "/projects/lamarkerja/JelajahLoker.png",
        alt: "LamarKerja AI - Multi-portal Job Explorer",
        caption: {
          en: "12-portal job aggregator with search & filters",
          id: "Eksplorasi loker dari 12 portal dengan filter pintar",
        },
      },
      {
        src: "/projects/lamarkerja/Drop.png",
        alt: "LamarKerja AI - Drop & Send OCR",
        caption: {
          en: "Drop & Send: OCR pamphlet scanner to 1-click email dispatch",
          id: "Drop & Send: Scan pamflet loker via OCR & kirim email 1-klik",
        },
      },
      {
        src: "/projects/lamarkerja/AuditCv.png",
        alt: "LamarKerja AI - ATS CV Audit",
        caption: {
          en: "AI ATS CV audit & scoring against job specs",
          id: "Audit skor ATS CV & kesesuaian profil kandidat",
        },
      },
      {
        src: "/projects/lamarkerja/BuatCV.png",
        alt: "LamarKerja AI - AI CV Builder",
        caption: {
          en: "AI CV builder tailored to the target job posting",
          id: "Pembuat CV AI yang disesuaikan dengan lowongan tujuan",
        },
      },
    ],
  },
  {
    id: "dialektika",
    title: "Dialektika",
    category: "fullstack",
    badge: { en: "Next.js commerce", id: "Commerce Next.js" },
    featured: true,
    tagline: {
      en: "Bookstore for critical literature with catalog search, wishlist, cart, and a full checkout flow.",
      id: "Toko buku literatur kritis dengan pencarian katalog, wishlist, keranjang, dan alur checkout lengkap.",
    },
    description: {
      en: "Fullstack bookstore on Next.js App Router, MongoDB, and Tailwind CSS. HttpOnly JWT auth, Zod validation, infinite-scroll catalog, wishlist and cart sync, plus a mock payment flow.",
      id: "Toko buku fullstack di Next.js App Router, MongoDB, dan Tailwind CSS. Autentikasi JWT HttpOnly, validasi Zod, katalog infinite scroll, sinkronisasi wishlist dan keranjang, plus simulasi pembayaran.",
    },
    starMethod: {
      situation: {
        en: "Independent publishers needed a storefront that is fast to browse and clear to buy from.",
        id: "Penerbit independen membutuhkan etalase yang cepat dibuka dan jelas alur belinya.",
      },
      task: {
        en: "Build a Next.js store with secure cookies, search and filters, and stock-aware checkout.",
        id: "Membangun toko Next.js dengan cookie aman, pencarian dan filter, serta checkout yang memperhatikan stok.",
      },
      action: {
        en: "Used App Router Server Components for SEO, MongoDB aggregation for search, JWT plus Zod on API routes, and a responsive checkout UI.",
        id: "Memakai App Router Server Components untuk SEO, aggregation MongoDB untuk pencarian, JWT plus Zod di API, dan UI checkout yang nyaman di ponsel.",
      },
      result: {
        en: "Live storefront with catalog search, wishlist, cart, and checkout that stays readable on mobile.",
        id: "Etalase live dengan pencarian katalog, wishlist, keranjang, dan checkout yang tetap nyaman di ponsel.",
      },
    },
    architectureHighlights: {
      en: [
        "Next.js App Router architecture blending Server Components (SSR) and Client Components (CSR)",
        "Secure HttpOnly Cookie Authentication with JWT and defensive Zod input sanitization",
        "MongoDB Atlas native driver queries with optimized indexation for full-text book search",
        "Semantic SEO optimization with dynamic OpenGraph tags and structured metadata",
      ],
      id: [
        "Arsitektur Next.js App Router memadukan Server Components (SSR) dan Client Components (CSR)",
        "Autentikasi HttpOnly Cookie dengan JWT dan sanitasi data ketat menggunakan Zod",
        "Query native MongoDB Atlas dengan indexing optimal untuk pencarian cepat judul/penulis",
        "Optimasi SEO semantik dengan OpenGraph dinamis dan metadata terstruktur",
      ],
    },
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "JWT",
      "Zod",
      "Tailwind CSS",
      "Vercel",
    ],
    live: "https://dialektikaa.vercel.app/",
    liveLabel: { en: "View store", id: "Lihat toko" },
    github: "https://github.com/malthafkiram/Dialektika",
    role: { en: "Fullstack Engineer", id: "Engineer Fullstack" },
    screenshots: [
      {
        src: "/projects/dialektika/01.jpg",
        alt: "Dialektika Homepage",
        caption: {
          en: "Hero banner and curated book collections",
          id: "Banner utama dan kurasi koleksi buku pilihan",
        },
      },
      {
        src: "/projects/dialektika/02.jpg",
        alt: "Dialektika Catalog",
        caption: {
          en: "Real-time search, filter, and category navigation",
          id: "Pencarian real-time, filter kategori, dan pengurutan harga",
        },
      },
      {
        src: "/projects/dialektika/03.jpg",
        alt: "Dialektika Product Detail",
        caption: {
          en: "Product details, stock counter, and cart add",
          id: "Detail buku, pengecekan stok, dan aksi keranjang",
        },
      },
      {
        src: "/projects/dialektika/04.jpg",
        alt: "Dialektika Wishlist & Checkout",
        caption: {
          en: "Wishlist management and transactional checkout flow",
          id: "Manajemen wishlist dan alur checkout pesanan",
        },
      },
    ],
  },
  {
    id: "whalewatch-ai",
    title: "WhaleWatch AI",
    category: "ai",
    badge: { en: "Crypto intelligence", id: "Intelijen kripto" },
    featured: true,
    tagline: {
      en: "Crypto dashboard with live market radar, whale alerts, Groq copilot, and paper trading.",
      id: "Dashboard kripto dengan radar pasar live, peringatan whale, copilot Groq, dan paper trading.",
    },
    description: {
      en: "Cryptocurrency research dashboard with live feeds, large-volume whale alerts, Groq-assisted token notes, paper trading, and Midtrans Snap for VIP access.",
      id: "Dashboard riset kripto dengan umpan pasar live, peringatan transaksi bervolume besar, catatan koin berbantuan Groq, paper trading, dan Midtrans Snap untuk akses VIP.",
    },
    starMethod: {
      situation: {
        en: "Retail traders often miss large wallet moves and have no quiet place to test ideas without spending real funds.",
        id: "Trader ritel sering terlambat melihat pergerakan dompet besar dan tidak punya ruang aman untuk menguji ide tanpa dana asli.",
      },
      task: {
        en: "Build a web app for live monitoring, whale alerts, AI notes, and a paper trading simulator.",
        id: "Membangun web app untuk pemantauan live, peringatan whale, catatan AI, dan simulator paper trading.",
      },
      action: {
        en: "Split React/Vite/Redux on the client and Express/PostgreSQL on the server. Connected market APIs, a Groq analysis path, Midtrans webhooks, and Swagger docs.",
        id: "Memisahkan klien React/Vite/Redux dan server Express/PostgreSQL. Menghubungkan API pasar, jalur analisis Groq, webhook Midtrans, dan dokumentasi Swagger.",
      },
      result: {
        en: "Live dashboard with market radar, paper trading, AI notes, and VIP upgrade through payment webhooks.",
        id: "Dashboard live dengan radar pasar, paper trading, catatan AI, dan upgrade VIP lewat webhook pembayaran.",
      },
    },
    architectureHighlights: {
      en: [
        "Decoupled RESTful API with PostgreSQL relational schema, Sequelize ORM, and JWT authentication",
        "Groq LLM sentiment analysis engine transforming raw OHLCV metrics into actionable trading insights",
        "Midtrans Snap payment integration with automated backend webhook verification",
        "Comprehensive Swagger OpenAPI interactive documentation for all endpoints",
      ],
      id: [
        "REST API decoupled dengan skema relasional PostgreSQL, Sequelize ORM, dan autentikasi JWT",
        "Engine analisis sentimen Groq LLM mengonversi data pasar menjadi rekomendasi actionable",
        "Integrasi pembayaran Midtrans Snap dengan verifikasi webhook otomatis di backend",
        "Dokumentasi interaktif Swagger OpenAPI untuk seluruh endpoint backend",
      ],
    },
    stack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Groq AI",
      "Midtrans",
      "Swagger",
      "Jest",
    ],
    live: "https://clien-five.vercel.app/",
    liveLabel: { en: "View dashboard", id: "Lihat dashboard" },
    github: "https://github.com/malthafkiram/WhaleWatch-AI-Public",
    githubBe: "https://github.com/malthafkiram/WhaleWatchAi_Backend",
    role: { en: "Fullstack Engineer", id: "Engineer Fullstack" },
    screenshots: [
      {
        src: "/projects/whalewatch/01.jpg",
        alt: "WhaleWatch AI Market Radar",
        caption: {
          en: "Real-time market scanner & whale movement radar",
          id: "Scanner pasar real-time & radar pergerakan paus",
        },
      },
      {
        src: "/projects/whalewatch/02.jpg",
        alt: "WhaleWatch AI Paper Trading",
        caption: {
          en: "Virtual portfolio simulation and order management",
          id: "Simulasi portofolio virtual dan manajemen order",
        },
      },
      {
        src: "/projects/whalewatch/03.jpg",
        alt: "WhaleWatch AI Coin Detail & Copilot",
        caption: {
          en: "In-depth coin analytics and Groq AI Copilot breakdown",
          id: "Analitik koin mendalam & analisis AI Copilot Groq",
        },
      },
      {
        src: "/projects/whalewatch/04.jpg",
        alt: "WhaleWatch AI VIP & Watchlists",
        caption: {
          en: "Watchlist tracking and Midtrans Snap VIP paywall",
          id: "Pelacakan watchlist dan upgrade VIP via Midtrans Snap",
        },
      },
    ],
  },
  {
    id: "bug-brawl",
    title: "Bug Brawl",
    category: "realtime",
    badge: { en: "Realtime coding arena", id: "Arena koding realtime" },
    featured: true,
    tagline: {
      en: "1v1 debugging arena with live rooms, Socket.IO sync, and DeepSeek scoring.",
      id: "Arena debugging 1v1 dengan room live, sinkronisasi Socket.IO, dan penilaian DeepSeek.",
    },
    description: {
      en: "Multiplayer debugging match where two developers compete in real time. WebSocket rooms keep the editor in sync, tests run automatically, DeepSeek reviews the solution, and the leaderboard updates live.",
      id: "Pertandingan debugging multiplayer di mana dua developer bertanding secara langsung. Room WebSocket menjaga editor tetap sinkron, tes berjalan otomatis, DeepSeek meninjau solusi, dan papan peringkat diperbarui live.",
    },
    starMethod: {
      situation: {
        en: "Hiring tests and hackathons rarely show how fast someone can fix a bug under time pressure.",
        id: "Tes rekrutmen dan hackathon jarang memperlihatkan seberapa cepat seseorang memperbaiki bug di bawah tekanan waktu.",
      },
      task: {
        en: "Lead backend and database work for a room engine, match lifecycle, and automated scoring.",
        id: "Memimpin backend dan database untuk engine room, siklus pertandingan, dan penilaian otomatis.",
      },
      action: {
        en: "Wrote Socket.IO handlers on Express and PostgreSQL, match state transitions, invite tokens, DeepSeek scoring, and Swagger docs.",
        id: "Menulis handler Socket.IO di Express dan PostgreSQL, transisi status pertandingan, token undangan, penilaian DeepSeek, dan dokumentasi Swagger.",
      },
      result: {
        en: "Live arena at bugbrawl.sparda.id with concurrent matches, AI judging, and public API docs.",
        id: "Arena live di bugbrawl.sparda.id dengan pertandingan bersamaan, juri AI, dan dokumentasi API publik.",
      },
    },
    architectureHighlights: {
      en: [
        "Socket.IO rooms for lobbies, countdowns, and concurrent submissions",
        "PostgreSQL with Sequelize for users, Elo, and match history",
        "DeepSeek review for correctness and readability",
        "Swagger docs at bbapi.sparda.id",
      ],
      id: [
        "Room Socket.IO untuk lobby, countdown, dan submisi bersamaan",
        "PostgreSQL dengan Sequelize untuk pengguna, Elo, dan riwayat pertandingan",
        "Tinjauan DeepSeek untuk kebenaran dan keterbacaan kode",
        "Dokumentasi Swagger di bbapi.sparda.id",
      ],
    },
    stack: [
      "Socket.IO",
      "Express",
      "Node.js",
      "PostgreSQL",
      "Sequelize",
      "DeepSeek AI",
      "React",
      "Vite",
      "Swagger",
    ],
    live: "https://bugbrawl.sparda.id",
    liveLabel: { en: "Open arena", id: "Buka arena" },
    apiDocs: "https://bbapi.sparda.id/api-docs",
    github: "https://github.com/Debugging-E-Sport/Debugging-E-Sport",
    role: { en: "Backend Engineer", id: "Engineer Backend" },
    screenshots: [
      {
        src: "/projects/bugbrawl/01.jpg",
        alt: "Bug Brawl Battle Arena",
        caption: {
          en: "Live multiplayer lobby and match matchmaking",
          id: "Lobby multiplayer live dan sistem matchmaking",
        },
      },
      {
        src: "/projects/bugbrawl/02.jpg",
        alt: "Bug Brawl Coding UI",
        caption: {
          en: "Synchronized dual-pane live debugging code arena",
          id: "Arena koding dual-pane tersinkronisasi real-time",
        },
      },
      {
        src: "/projects/bugbrawl/03.jpg",
        alt: "Bug Brawl Live Battle",
        caption: {
          en: "Real-time test case execution and status indicators",
          id: "Eksekusi test case dan indikator progress lawan",
        },
      },
      {
        src: "/projects/bugbrawl/04.jpg",
        alt: "Bug Brawl Leaderboard",
        caption: {
          en: "Post-match AI judge scoring and global leaderboard",
          id: "Penilaian juri AI DeepSeek dan papan peringkat global",
        },
      },
    ],
  },
  {
    id: "rakanchat",
    title: "RakanChat",
    category: "mobile",
    badge: { en: "React Native · GraphQL", id: "React Native · GraphQL" },
    featured: true,
    tagline: {
      en: "Social mobile app on React Native Expo, Apollo GraphQL, MongoDB, and Redis.",
      id: "Aplikasi sosial mobile dengan React Native Expo, Apollo GraphQL, MongoDB, dan Redis.",
    },
    description: {
      en: "Cross-platform social app with a Redis-backed feed, follow graph, multi-image posts via ImageKit/Firebase, comments, and Apollo Client cache on device.",
      id: "Aplikasi sosial lintas platform dengan feed berlapis Redis, relasi follow, unggah beberapa gambar lewat ImageKit/Firebase, komentar, dan cache Apollo Client di perangkat.",
    },
    starMethod: {
      situation: {
        en: "Social feeds on mobile often over-fetch and feel slow on cellular networks.",
        id: "Feed sosial di ponsel sering menarik data berlebih dan terasa lambat di jaringan seluler.",
      },
      task: {
        en: "Build a mobile app with GraphQL queries, Redis caching, and native UI that stays responsive.",
        id: "Membangun aplikasi mobile dengan query GraphQL, caching Redis, dan UI native yang tetap responsif.",
      },
      action: {
        en: "Ran Apollo Server on Node.js and MongoDB, cache-aside Redis for feeds and search, and a React Native Expo client with JWT in AsyncStorage.",
        id: "Menjalankan Apollo Server di Node.js dan MongoDB, Redis cache-aside untuk feed dan pencarian, serta klien React Native Expo dengan JWT di AsyncStorage.",
      },
      result: {
        en: "Android APK with a cached social feed, follow graph, and media posts.",
        id: "APK Android dengan feed sosial yang di-cache, relasi follow, dan unggahan media.",
      },
    },
    architectureHighlights: {
      en: [
        "Declarative GraphQL Schema with Apollo Server eliminating over-fetching and under-fetching",
        "Redis cache-aside for social feeds and search",
        "MongoDB collections with indexes for the follow graph",
        "Apollo Client InMemoryCache for optimistic UI on device",
      ],
      id: [
        "Skema GraphQL Apollo Server terstruktur untuk efisiensi transfer data di jaringan mobile",
        "Layer caching Redis cache-aside untuk feed sosial dan pencarian",
        "Koleksi MongoDB dengan index untuk graf follow",
        "Apollo Client InMemoryCache untuk pembaruan UI di perangkat",
      ],
    },
    stack: [
      "React Native",
      "Expo",
      "GraphQL",
      "Apollo Server",
      "MongoDB",
      "Redis",
      "Firebase",
      "ImageKit",
      "JWT",
    ],
    live: "https://drive.google.com/file/d/1Uyqjt1MFQDjqYybLXBHNlftbllBalwB2/view?usp=sharing",
    liveLabel: { en: "Download Android APK", id: "Unduh APK Android" },
    github: "https://github.com/malthafkiram/RakanChat",
    role: { en: "Mobile Engineer", id: "Engineer Mobile" },
    screenshots: [
      {
        src: "/projects/rakanchat/01.jpg",
        alt: "RakanChat User Onboarding",
        caption: {
          en: "Registration, onboarding & user profile setup",
          id: "Registrasi, orientasi & profil akun pengguna",
        },
      },
      {
        src: "/projects/rakanchat/02.jpg",
        alt: "RakanChat Social Feed",
        caption: {
          en: "Dynamic social feed with post interactions & media",
          id: "Feed sosial dinamis dengan interaksi like dan gambar",
        },
      },
      {
        src: "/projects/rakanchat/03.jpg",
        alt: "RakanChat User Search",
        caption: {
          en: "Fast user search and follow graph exploration",
          id: "Pencarian pengguna cepat dan jaringan relasi follow",
        },
      },
      {
        src: "/projects/rakanchat/04.jpg",
        alt: "RakanChat Comments & Details",
        caption: {
          en: "Threaded comments and interaction modals",
          id: "Utas komentar dan dialog interaksi sosial",
        },
      },
    ],
  },
  {
    id: "altrua-kolektif",
    title: "Altrua Kolektif",
    category: "fullstack",
    badge: { en: "Crowdfunding platform", id: "Platform crowdfunding" },
    featured: false,
    tagline: {
      en: "Collective giving platform with campaign pages, a fund ledger, and budget milestones.",
      id: "Platform donasi kolektif dengan halaman kampanye, ledger dana, dan milestone anggaran.",
    },
    description: {
      en: "Charity platform on Express, EJS, and PostgreSQL. Organizers publish campaigns, donors see progress against a budget, and each contribution is recorded on a public ledger.",
      id: "Platform donasi di Express, EJS, dan PostgreSQL. Penyelenggara menerbitkan kampanye, donatur melihat progres terhadap anggaran, dan setiap kontribusi tercatat di ledger publik.",
    },
    starMethod: {
      situation: {
        en: "Community fundraisers needed a public record of targets, remaining funds, and incoming donations.",
        id: "Penggalangan dana komunitas membutuhkan catatan publik untuk target, sisa dana, dan donasi yang masuk.",
      },
      task: {
        en: "Build an MVC web app for campaign lifecycle, sessions, and donation records.",
        id: "Membangun web app MVC untuk siklus kampanye, sesi pengguna, dan pencatatan donasi.",
      },
      action: {
        en: "Designed a PostgreSQL schema with Sequelize, session auth in Express, and campaign pages with ledger and milestone views.",
        id: "Merancang skema PostgreSQL dengan Sequelize, autentikasi sesi di Express, dan halaman kampanye dengan tampilan ledger serta milestone.",
      },
      result: {
        en: "Working donation product with catalog, campaign detail, login, and registration flows.",
        id: "Produk donasi yang berjalan dengan katalog, detail kampanye, login, dan registrasi.",
      },
    },
    architectureHighlights: {
      en: [
        "Express MVC with EJS views",
        "PostgreSQL schema for campaigns, users, and donations",
        "Session auth plus public fund ledger and milestone budgets",
      ],
      id: [
        "Express MVC dengan tampilan EJS",
        "Skema PostgreSQL untuk kampanye, pengguna, dan donasi",
        "Autentikasi sesi plus ledger dana publik dan milestone anggaran",
      ],
    },
    stack: ["Express", "EJS", "PostgreSQL", "Sequelize", "Node.js"],
    github: "https://github.com/malthafkiram/Altrua-Kolektif",
    role: { en: "Fullstack Developer", id: "Developer Fullstack" },
    screenshots: [
      {
        src: "/projects/altrua/01.png",
        alt: "Altrua Kolektif home and campaign catalog",
        caption: {
          en: "Home, search, and active campaign catalog",
          id: "Beranda, pencarian, dan katalog kampanye aktif",
        },
      },
      {
        src: "/projects/altrua/02.png",
        alt: "Altrua Kolektif campaign transparency ledger",
        caption: {
          en: "Campaign detail with fund ledger and milestones",
          id: "Detail kampanye dengan ledger dana dan milestone",
        },
      },
      {
        src: "/projects/altrua/03.png",
        alt: "Altrua Kolektif login",
        caption: {
          en: "Session login for donors and organizers",
          id: "Login sesi untuk donatur dan penyelenggara",
        },
      },
      {
        src: "/projects/altrua/04.png",
        alt: "Altrua Kolektif registration",
        caption: {
          en: "Registration with role and profile details",
          id: "Registrasi dengan peran dan data profil",
        },
      },
    ],
  },
  {
    id: "cinema20",
    title: "Cinema20",
    category: "fullstack",
    badge: { en: "REST API and CMS", id: "REST API dan CMS" },
    featured: false,
    hidden: true,
    tagline: {
      en: "Movie & anime streaming discovery platform with decoupled REST API, Vite React CMS admin, and public portal.",
      id: "Platform katalog film & anime dengan REST API terpisah, CMS admin React Vite, dan portal publik.",
    },
    description: {
      en: "Decoupled entertainment platform consisting of an Express/PostgreSQL REST API backend powering a React/Vite CMS dashboard for content managers and a fast public browsing client.",
      id: "Platform media hiburan terpisah (decoupled) yang terdiri dari backend REST API Express/PostgreSQL yang menenagai dashboard CMS admin React/Vite dan web portal publik.",
    },
    starMethod: {
      situation: {
        en: "Content publishers needed separate administrative workflows for video curation while delivering high-speed public browsing.",
        id: "Pengelola konten membutuhkan alur admin terpisah untuk kurasi film sekaligus menyajikan browsing publik yang cepat.",
      },
      task: {
        en: "Design modular RESTful API architecture with JWT authentication, role-based authorization, and separate frontend clients.",
        id: "Merancang arsitektur RESTful API modular dengan autentikasi JWT, otorisasi berbasis peran, dan client terpisah.",
      },
      action: {
        en: "Engineered Express REST API, implemented relational movie schema with PostgreSQL, built responsive CMS with Tailwind and React.",
        id: "Membangun REST API Express, menerapkan skema film PostgreSQL, dan membuat CMS responsif dengan React dan Tailwind.",
      },
      result: {
        en: "Delivered production-grade CMS and client portal with zero auth leaks and instant content updates.",
        id: "Menghasilkan CMS dan portal publik siap pakai dengan manajemen konten yang aman dan cepat.",
      },
    },
    architectureHighlights: {
      en: [
        "Decoupled REST API Architecture",
        "Role-Based Access Control (Admin vs User)",
        "PostgreSQL with Sequelize",
      ],
      id: [
        "Arsitektur Decoupled REST API",
        "Role-Based Access Control (Admin vs Pengguna)",
        "PostgreSQL dengan Sequelize",
      ],
    },
    stack: [
      "React",
      "Vite",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/malthafkiram/Cinema20---PublicSite",
    role: { en: "Fullstack Engineer", id: "Fullstack Engineer" },
    screenshots: [],
  },
  {
    id: "rekancuci",
    title: "RekanCuci",
    category: "fullstack",
    badge: { en: "On-demand service", id: "Layanan on-demand" },
    featured: false,
    tagline: {
      en: "Laundry marketplace that connects nearby outlets with customers, plus order tracking.",
      id: "Marketplace laundry yang menghubungkan outlet terdekat dengan pelanggan, plus pelacakan pesanan.",
    },
    description: {
      en: "On-demand laundry site for finding nearby merchants, booking a package, and tracking an order in the browser. WhatsApp is used for updates, without a native app.",
      id: "Situs laundry on-demand untuk mencari merchant terdekat, memesan paket, dan melacak pesanan di browser. Pembaruan lewat WhatsApp, tanpa aplikasi native.",
    },
    starMethod: {
      situation: {
        en: "Urban customers still book laundry by chat, with little proof at intake and no shared tracking code.",
        id: "Pelanggan di kota masih memesan laundry lewat chat, dengan sedikit bukti saat intake dan tanpa kode pelacakan bersama.",
      },
      task: {
        en: "Build a responsive storefront for discovery, booking, and order tracking.",
        id: "Membangun etalase responsif untuk pencarian, pemesanan, dan pelacakan pesanan.",
      },
      action: {
        en: "Built a React and Vite UI with Tailwind CSS and deployed the storefront to Vercel.",
        id: "Membangun UI React dan Vite dengan Tailwind CSS, lalu merilis etalase ke Vercel.",
      },
      result: {
        en: "Live preview with merchant search, tracking demo, and a mobile-friendly booking layout.",
        id: "Pratinjau live dengan pencarian merchant, demo pelacakan, dan tampilan pemesanan yang nyaman di ponsel.",
      },
    },
    architectureHighlights: {
      en: [
        "Vite + React SPA Architecture",
        "Tailwind CSS Design System",
        "Vercel Continuous Deployment",
      ],
      id: [
        "Arsitektur SPA React + Vite",
        "Design System Tailwind CSS",
        "Continuous Deployment Vercel",
      ],
    },
    stack: ["React", "Vite", "Tailwind CSS", "Vercel"],
    live: "https://frontend-flax-alpha-10.vercel.app",
    liveLabel: { en: "View live", id: "Lihat live" },
    role: { en: "Frontend Developer", id: "Developer Frontend" },
    screenshots: [
      {
        src: "/projects/rekancuci/01.png",
        alt: "RekanCuci landing page",
        caption: {
          en: "Landing page for laundry marketplace and tracking",
          id: "Landing page marketplace laundry dan pelacakan order",
        },
      },
      {
        src: "/projects/rekancuci/02.png",
        alt: "RekanCuci nearby laundry search",
        caption: {
          en: "Find nearby laundry outlets",
          id: "Cari outlet laundry terdekat",
        },
      },
      {
        src: "/projects/rekancuci/03.png",
        alt: "RekanCuci order tracking demo",
        caption: {
          en: "Order tracking demo by booking code",
          id: "Demo pelacakan pesanan dengan kode order",
        },
      },
      {
        src: "/projects/rekancuci/04.png",
        alt: "RekanCuci merchant dashboard",
        caption: {
          en: "Merchant dashboard for orders and intake",
          id: "Dashboard merchant untuk order dan intake",
        },
      },
    ],
  },
];

export const certificatesData: Certificate[] = [
  {
    id: "hackerrank-swe-intern",
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    category: "Engineering",
    issueDate: "2026",
    credentialUrl: "https://www.hackerrank.com/certificates/7d50b3fe4102",
    preview: "/certificates/software-engineer-intern.jpg",
    pdf: "/certificates/software-engineer-intern.pdf",
    skills: [
      "Software Engineering",
      "Problem Solving",
      "Data Structures",
      "Code Quality",
    ],
    description: {
      en: "Comprehensive industry-standard assessment validating algorithms, system logic, and software engineering competencies.",
      id: "Asesmen standar industri yang memvalidasi kompetensi algoritma, logika sistem, dan rekayasa perangkat lunak.",
    },
  },
  {
    id: "hackerrank-problem-solving",
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    category: "Engineering",
    issueDate: "2026",
    credentialUrl: "https://www.hackerrank.com/certificates/00951928faca",
    preview: "/certificates/problem-solving-basic.jpg",
    pdf: "/certificates/problem-solving-basic.pdf",
    skills: [
      "Algorithmic Thinking",
      "Data Structures",
      "Time Complexity",
      "Debugging",
    ],
    description: {
      en: "Validation of algorithmic reasoning, edge case handling, and optimal code structure.",
      id: "Validasi penalaran algoritmik, penanganan edge case, dan struktur kode optimal.",
    },
  },
  {
    id: "hackerrank-react-basic",
    title: "React (Basic)",
    issuer: "HackerRank",
    category: "Engineering",
    issueDate: "2026",
    credentialUrl: "https://www.hackerrank.com/certificates/d2e847650ba5",
    preview: "/certificates/react-basic.jpg",
    pdf: "/certificates/react-basic.pdf",
    skills: ["React", "Component Lifecycle", "State Management", "Hooks"],
    description: {
      en: "Assessment covering interactive React architecture, component patterns, and UI state synchronization.",
      id: "Penilaian arsitektur komponen React interaktif, custom hooks, dan sinkronisasi state UI.",
    },
  },
  {
    id: "hackerrank-js-intermediate",
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    category: "Engineering",
    issueDate: "2026",
    credentialUrl: "",
    preview: "/certificates/javascript-intermediate.jpg",
    pdf: "/certificates/javascript-intermediate.pdf",
    skills: ["JavaScript ES6+", "Asynchronous JS", "Event Loop", "Closures"],
    description: {
      en: "Advanced JavaScript concepts including asynchronous workflows, closures, promises, and design patterns.",
      id: "Penguasaan konsep JavaScript lanjutan termasuk alur asynchronous, closures, promises, dan design pattern.",
    },
  },
  {
    id: "hackerrank-js-basic",
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    category: "Engineering",
    issueDate: "2026",
    credentialUrl: "https://www.hackerrank.com/certificates/2c973053d18a",
    preview: "/certificates/javascript-basic.jpg",
    pdf: "/certificates/javascript-basic.pdf",
    skills: ["JavaScript", "Data Types", "Functions", "Control Flow"],
    description: {
      en: "Core JavaScript syntax, functional programming foundations, and data manipulation.",
      id: "Sintaks inti JavaScript, dasar pemrograman fungsional, dan manipulasi struktur data.",
    },
  },
  {
    id: "sanbercode-nodejs",
    title: "Node.js Backend Development",
    issuer: "SanberCode",
    category: "Engineering",
    issueDate: "2026",
    credentialUrl: "",
    preview: "/certificates/node-js-beginner.jpg",
    pdf: "/certificates/node-js-beginner.pdf",
    skills: ["Node.js", "Express.js", "REST API", "Backend Architecture"],
    description: {
      en: "Intensive backend training covering RESTful API architecture, Express middleware, and database operations.",
      id: "Pelatihan backend intensif mencakup arsitektur RESTful API, middleware Express, dan operasi database.",
    },
  },
  {
    id: "ibm-cybersecurity",
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "Security",
    issueDate: "2026",
    credentialUrl: "",
    preview: "/certificates/cybersecurity-fundamentals.jpg",
    pdf: "/certificates/cybersecurity-fundamentals.pdf",
    skills: [
      "Cybersecurity",
      "Network Security",
      "Risk Mitigation",
      "Auth Best Practices",
    ],
    description: {
      en: "Principles of secure software architecture, threat modeling, defensive programming, and token security.",
      id: "Prinsip arsitektur perangkat lunak aman, pemodelan ancaman, dan praktik pengamanan data/token.",
    },
  },
  {
    id: "nusacodes-data-analyst",
    title: "Data Analyst Final Project",
    issuer: "NusaCodes",
    category: "Data",
    issueDate: "2025",
    credentialUrl: "https://nusacodes.com/verify/BL2306CD25HL",
    preview: "/certificates/data-analyst-final-project.jpg",
    pdf: "/certificates/data-analyst-final-project.pdf",
    skills: [
      "Data Cleaning",
      "Feature Engineering",
      "Looker Studio",
      "Analytics",
    ],
    description: {
      en: "End-to-end data pipeline project covering extraction, cleaning, feature engineering, and executive dashboards.",
      id: "Proyek pipeline data end-to-end mencakup ekstraksi, pembersihan data, dan visualisasi dashboard eksekutif.",
    },
  },
];

export const skillCategories = [
  {
    title: { en: "Frontend & Mobile", id: "Frontend & Mobile" },
    icon: "Layout",
    skills: [
      { name: "Next.js 14/15", level: "Expert" },
      { name: "React / Vite", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React Native (Expo)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Redux Toolkit", level: "Advanced" },
      { name: "Apollo Client", level: "Advanced" },
    ],
  },
  {
    title: { en: "Backend & Systems", id: "Backend & Sistem" },
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "Apollo GraphQL", level: "Advanced" },
      { name: "Socket.IO (Realtime)", level: "Advanced" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "JWT & OAuth 2.0", level: "Advanced" },
      { name: "Zod Sanitization", level: "Expert" },
    ],
  },
  {
    title: { en: "Databases & Caching", id: "Database & Caching" },
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis Caching", level: "Advanced" },
      { name: "Sequelize ORM", level: "Advanced" },
      { name: "Mongoose ODM", level: "Advanced" },
    ],
  },
  {
    title: { en: "AI Systems & DevOps", id: "Sistem AI & DevOps" },
    icon: "Cpu",
    skills: [
      { name: "Groq LLM / LangChain", level: "Advanced" },
      { name: "Tesseract OCR", level: "Advanced" },
      { name: "DeepSeek Integration", level: "Advanced" },
      { name: "Linux / Ubuntu Server", level: "Advanced" },
      { name: "AWS EC2 Deployment", level: "Intermediate" },
      { name: "Vercel / CI/CD", level: "Expert" },
      { name: "Git / GitHub Actions", level: "Advanced" },
    ],
  },
];
