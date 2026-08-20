const express = require("express");
const path = require("path");

const ALTRUA = "/home/kabanux/Hacktive8/phase1_ulang/team-2/Altrua-Kolektif";
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(ALTRUA, "views"));
app.use("/uploads", express.static(path.join(ALTRUA, "public/uploads")));
app.use("/asset", express.static(path.join(ALTRUA, "public/asset")));
app.use(express.static(path.join(ALTRUA, "public")));

function toRupiah(n) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

const campaigns = [
  {
    id: 1,
    title: "Donasi Bencana Banjir Bandang Aceh",
    description:
      "Banjir bandang melanda pemukiman warga akibat curah hujan tinggi. Donasi dialokasikan untuk sembako darurat, obat-obatan, dan renovasi sanitasi.",
    targetFunds: 45000000,
    currentFunds: 12500000,
    category: "Bencana",
    status: "Active",
    image: "img-banjir.jpg",
    code: "ALT-ACEH-01",
    userId: 1,
    remainingFunds: 32500000,
    User: { username: "relawan.aceh", email: "relawan@altrua.id" },
    Milestones: [
      {
        stepNumber: 1,
        targetAmount: 15000000,
        description: "300 paket sembako darurat",
        isVerified: true,
      },
    ],
    UserDonations: [
      {
        amount: 250000,
        comment: "Semoga berkah untuk saudara di lapangan.",
        User: { username: "donatur.satu" },
      },
    ],
  },
  {
    id: 2,
    title: "Beasiswa Anak Pesisir",
    description:
      "Dana pendidikan untuk 40 siswa pesisir: seragam, buku, dan biaya ujian semester.",
    targetFunds: 30000000,
    currentFunds: 18000000,
    category: "Pendidikan",
    status: "Active",
    image: "img-banjir.jpg",
    code: "ALT-EDU-02",
    userId: 2,
    remainingFunds: 12000000,
    User: { username: "yayasan.laut", email: "edukasi@altrua.id" },
    Milestones: [],
    UserDonations: [],
  },
  {
    id: 3,
    title: "Klinik Bergerak Desa",
    description:
      "Pengadaan alat kesehatan portable dan jadwal dokter keliling untuk tiga desa terpencil.",
    targetFunds: 80000000,
    currentFunds: 22000000,
    category: "Kesehatan",
    status: "Active",
    image: "img-banjir.jpg",
    code: "ALT-MED-03",
    userId: 3,
    remainingFunds: 58000000,
    User: { username: "klinik.desa", email: "medis@altrua.id" },
    Milestones: [],
    UserDonations: [],
  },
];

app.get("/", (req, res) => {
  res.render("lending", {
    campaigns,
    user: null,
    search: "",
    notification: undefined,
    error: undefined,
  });
});

app.get("/login", (req, res) => {
  res.render("login", { error: undefined, user: null, search: "" });
});

app.get("/register", (req, res) => {
  res.render("register", { error: undefined, user: null, search: "" });
});

app.get("/campaigns/:id", (req, res) => {
  const campaign = campaigns.find((c) => String(c.id) === req.params.id) || campaigns[0];
  res.render("campaign-detail", {
    campaign,
    user: null,
    search: "",
    toRupiah,
    totalDonors: campaign.UserDonations.length,
    error: undefined,
    notification: undefined,
  });
});

const port = Number(process.env.PORT || 3457);
app.listen(port, "127.0.0.1", () => {
  console.log(`altrua-mock http://127.0.0.1:${port}`);
});
