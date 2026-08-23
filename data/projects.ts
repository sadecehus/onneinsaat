export interface Project {
  id: number
  title: string
  location: string
  image: string
  status: "completed" | "ongoing"
  year: string
  size?: string
  type?: string
  description?: string
  features?: string[]
  images?: string[]
  progress?: number
  estimatedCompletion?: string
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Van İl Emniyet Müdürlüğü Yeni Hizmet Binası Kompleksi",
    location: "Van",
    image: "/vnpls2.png",
    status: "completed",
    year: "2024",
    size: "15,000 m²",
    type: "Komu Kompleksi",
    description:
      "Van'ın güvenlik altyapısını güçlendirmek amacıyla inşa edilen bu yeni hizmet binası kompleksi, modern mimarisi ve yüksek teknolojik donanımı ile dikkat çekmektedir. Proje, Van il emniyet müdürlüğü için tasarlanmış olup, güvenlik hizmetlerinin daha etkin bir şekilde sunulmasını hedeflemektedir.",
    features: [
      "Modern mimari tasarım",
      "Helikopter pisti",
      "Yüksek güvenlikli kontrol noktaları",
      "Sosyal Alanlar",
      "Otopark",
      
    ],
    images: [
      "/vnpls3.png",
      "/vnpls4.png",
    ],
  },
  {
    id: 2,
    title: "Van Devlet Su İşleri 3. Yerleşke Kompleksi",
    location: "Van",
    image: "/dsi.jpeg",
    status: "completed",
    year: "2026",
    size: "- m²",
    type: "Kamu Kompleksi",
    progress: 65,
    estimatedCompletion: "Haziran 2026",
    description:
      "Van'ın su yönetimi ve altyapı projelerini desteklemek amacıyla inşa edilen bu kompleks, modern ofis alanları, toplantı salonları ve sosyal tesisler içermektedir. Proje, Van Devlet Su İşleri 3. Yerleşke Kompleksi olarak adlandırılmaktadır.",
    features: [
      "Modern ofis alanları",
      "Toplantı salonları",
      "Sosyal tesisler",
      "Çevre dostu tasarım",
      "Geniş yeşil alanlar"
    ],
    images: [
      "/vandsi2.jpeg",
      "/vandsi3.jpeg",
      "/vandsi4.jpeg",
      "/vandsi5.jpeg",
      "/vandsi6.jpeg",
      "/vandsi7.jpeg",
      "/vandsi8.jpeg",
    ],
  },
  {
    id: 3,
    title: "Van İl Halk Kütüphanesi",
    location: "Van",
    image: "/20.png",
    status: "completed",
    year: "-",
    size: "- m²",
    type: "Kütüphane",
    progress: 45,
    estimatedCompletion: "Eylül 2026",
    description: "Van'ın kültürel ve eğitim altyapısını güçlendirmek amacıyla inşa edilen bu kütüphane, modern mimarisi ve geniş koleksiyonu ile dikkat çekmektedir. Proje, halkın bilgiye erişimini kolaylaştırmayı hedeflemektedir.",
    features: ["Geniş kitap koleksiyonu", "Okuma salonları", "Dijital kaynaklar", "Çocuk bölümü", "Etkinlik alanları"],
    images: ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png", "/7.png", "/8.png", "/9.png", "/10.png", "/11.png", "/12.png", "/13.png", "/14.png", "/15.png", "/16.png", "/17.png", "/18.png", "/19.png"],
  },
  {
    id: 4,
    title: "İzmir Karabağlar Adnan Mazıcı İlköğretim Okul Binası",
    location: "İzmir, Karabağlar",
    image: "/krbglrio.png",
    status: "completed",
    year: "-",
    size: "3624 m²",
    type: "Okul",
    description:
      "İzmir Karabağlar'da inşa edilen bu ilköğretim okulu, modern eğitim standartlarına uygun olarak tasarlanmıştır. Proje, öğrencilere çağdaş bir öğrenme ortamı sunmayı hedeflemektedir.",
    features: ["Modern sınıflar", "Bilgisayar laboratuvarı", "Kütüphane", "Spor salonu", "Yeşil alanlar"],
    images: [
      "/krbglrio2.png",
    
    ],
  },
  {
    id: 5,
    title: "8 Derslikli İlkokul Binası",
    location: "Van, Çaldıran",
    image: "/sekizderslikliilkokul.png",
    status: "completed",
    year: "",
    size: " m²",
    type: "Okul",
    description:
      "Çaldıran ilçesinde inşa edilen bu ilkokul binası, 8 derslik kapasitesi ile öğrencilere modern bir eğitim ortamı sunmaktadır. Proje, eğitim kalitesini artırmayı hedeflemektedir.",
    features: ["8 derslik", "Geniş Açık Alan", "Kütüphane", "Korumalı Bahçe"],
    images: [""],
  },
  {
    id: 6,
    title: "Kafdağı ve Soğanlı Gözlem Kuleleri",
    location: "Van, Çaldıran",
    image: "/gzlm.png",
    status: "completed",
    year: "-",
    size: "- m²",
    type: "Konut",
    description:
      "Kafdağı ve Soğanlı bölgelerinde inşa edilen bu gözlem kuleleri, bölgenin güvenliğini artırmak ve tehditleri önlemek amacıyla tasarlanmıştır. Proje, stratejik konumları ile dikkat çekmektedir.",
    features: ["Yüksek güvenlikli gözlem kuleleri", "Geniş görüş açıları", "Modern iletişim sistemleri"],
    images: ["/gzlm2.png"],
  },
  {
    id: 7,
    title: "Van Özalp ve Alabayır 4 Derslikli Okul Binası",
    location: "İstanbul, Kadıköy",
    image: "/drtdrslk.png",
    status: "completed",
    year: "-",
    size: "- m²",
    type: "Ticari",
    description:
      "Van'ın Özalp ve Alabayır bölgelerinde inşa edilen bu okul binası, 4 derslik kapasitesi ile öğrencilere eğitim ortamı sunmaktadır. Proje, eğitim kalitesini artırmayı hedeflemektedir.",
    features: ["4 derslik", "Geniş Açık Alan", "Kütüphane", "Korumalı Bahçe"],
    images: [""],
  },
  {
    id: 8,
    title: "Gürpınar Özel Harekat Binası Kalekol",
    location: "Van, Çaldıran",
    image: "/kalekol.png",
    status: "completed",
    year: "2023",
    size: "- m²",
    type: "Kamu Binası",
    description:
      "Van'ın Çaldıran ilçesinde inşa edilen bu özel harekat binası, güvenlik güçlerinin operasyonel ihtiyaçlarını karşılamak üzere tasarlanmıştır. Proje, modern mimarisi ve yüksek güvenlik standartları ile dikkat çekmektedir.",
    features: [
      "Yüksek güvenlikli kontrol noktaları",
      "Modern operasyon merkezleri",
      "Eğitim alanları",
    ],
    images: [""],
  },
  {
    id: 9,
    title: "Ayanıs Yazlıkları",
    location: "Van, Ayanıs",
    image: "/yazlik1.jpeg",
    status: "completed",
    year: "2024",
    size: "- m²",
    type: "Konut",
    progress: 60,
    estimatedCompletion: "Ağustos 2026",
    description:
      "Ayanıs bölgesinde inşa edilen bu yazlıklar, modern tasarımı ve konforlu yaşam alanları ile dikkat çekmektedir. Proje, yaz aylarında tatil yapmak isteyenler için ideal bir yaşam alanı sunmayı hedeflemektedir.",
    features: ["Geniş balkonlar", "Yüzme havuzu", "Sosyal tesisler", "Güvenlik hizmetleri", "Yeşil alanlar"],
    images: [
      "/yazlik2.jpeg",
      "/yazlik3.jpeg",
      "/yazlik4.jpeg",
      "/yazlik5.jpeg",
      "/yazlik6.jpeg",
      "/yazlik7.jpeg",
      "/yazlik8.jpeg",
    ],
  },
  {
    id: 10,
    title: "Bergama Gaziemir Ortaokul",
    location: "Bergama, İzmir",
    image: "/gaziemir.png",
    status: "completed",
    year: "-",
    size: "- m²",
    type: "Eğitim",
    estimatedCompletion: "Aralık 2024",
    description:
      "Modern eğitim anlayışına uygun olarak tasarlanan bu kampüs, 500 öğrenci kapasitesi ile hizmet verecektir.",
    features: ["50 derslik", "Laboratuvarlar", "Kütüphane", "Spor salonu", "Yemekhane"],
    images: ["/gaziemir2.png", "/gaziemir3.png", "/gaziemir4.png"],
  },
  {
    id: 11,
    title: "İzmir Seferihisar 144 Konut Projesi",
    location: "İzmir, Seferihisar",
    image: "/seferihisar1.jpg",
    status: "completed",
    year: "2026",
    size: "- m²",
    type: "Konut",
    description:
      "İzmir Seferihisar'da inşa edilen bu proje, 144 konut kapasitesi ile modern ve konforlu yaşam alanları sunmayı hedeflemektedir.",
    features: ["144 konut", "Sosyal tesisler", "Otopark", "Yeşil alanlar", "Güvenlik hizmetleri"],
    images: [
      "/seferihisar2.jpg",
      "/seferihisar3.jpg",
      "/seferihisar4.jpg",
      "/seferihisar5.jpg",
      "/seferihisar6.jpg",
    ],
  },
  {
    id: 12,
    title: "Mersin İl Jandarma Kompleksi",
    location: "Mersin",
    image: "/jandarma.jpeg",
    status: "completed",
    year: "2026",
    size: "- m²",
    type: "Kamu Kompleksi",
    description:
      "Mersin'de inşa edilen bu jandarma kompleksi, güvenlik güçlerinin operasyonel ihtiyaçlarını karşılamak üzere modern standartlarda tasarlanmıştır.",
    features: ["Modern mimari tasarım", "Yüksek güvenlikli kontrol noktaları", "Sosyal alanlar", "Otopark"],
    images: [],
  },
  {
    id: 13,
    title: "İyi Burnaz 24 Derslikli İlkokul ve 24 Derslikli Ortaokul",
    location: "İyi Burnaz",
    image: "/24derslikli.jpeg",
    status: "completed",
    year: "2026",
    size: "- m²",
    type: "Okul",
    description:
      "İyi Burnaz'da inşa edilen bu kampüs, 24 derslikli ilkokul ve 24 derslikli ortaokul binalarından oluşmakta olup öğrencilere modern bir eğitim ortamı sunmayı hedeflemektedir.",
    features: ["24 derslikli ilkokul", "24 derslikli ortaokul", "Laboratuvarlar", "Kütüphane", "Spor salonu"],
    images: [],
  },
  {
    id: 14,
    title: "Karşıyaka Daire Dükkan Projeleri",
    location: "İzmir, Karşıyaka",
    image: "/karsiyaka.jpeg",
    status: "completed",
    year: "2026",
    size: "- m²",
    type: "Konut ve Ticari",
    description:
      "İzmir Karşıyaka'da merkezi konumda inşa edilen bu proje, 30 adet konut dairesi ve zemin katta yer alan ticari alanlardan (market, eczane, cafe, butik) oluşan karma kullanımlı modern bir yapıdır.",
    features: [
      "30 adet konut dairesi",
      "Zemin kat ticari alanlar",
      "Modern mimari tasarım",
      "Geniş balkonlar",
      "Kapalı otopark",
      "Merkezi konum",
    ],
    images: [],
  },
]

export const getCompletedProjects = () => allProjects.filter((project) => project.status === "completed")
export const getOngoingProjects = () => allProjects.filter((project) => project.status === "ongoing")
export const getProjectById = (id: number) => allProjects.find((project) => project.id === id)
export const getFeaturedProjects = () => allProjects.slice(0, 3)
