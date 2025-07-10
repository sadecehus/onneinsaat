import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggeredReveal } from "@/components/staggered-reveal"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Adres",
      content: (
        <>
          Şerefiye Mah. Hastane 2 Cad. No: 2/17
          <br />
          İpekyolu/Van
        </>
      ),
    },
    {
      icon: Phone,
      title: "Telefon",
      content: (
        <>
          Tel: 0432 216 49 46
          <br />
          GSM: 0532 502 31 35
          <br />
          Fax: 0432 216 18 81
        </>
      ),
    },
    {
      icon: Mail,
      title: "E-posta",
      content: (
        <>
          info@on-neinsaat.com
          <br />
          proje@on-neinsaat.com
        </>
      ),
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: (
        <>
          Pazartesi - Cuma: 08:00 - 18:00
          <br />
          Cumartesi: 09:00 - 15:00
          <br />
          Pazar: Kapalı
        </>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white mt-8">
      <Navigation />

      {/* Header */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">İletişim</h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Projeniz hakkında konuşmak için bizimle iletişime geçin
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Bize Ulaşın</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Projeniz hakkında detaylı bilgi almak için formu doldurun, size en kısa sürede dönüş yapalım.
                </p>

                <form className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad *</label>
                      <Input
                        placeholder="Adınız ve soyadınız"
                        required
                        className="h-10 sm:h-11 transition-all duration-200 focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                      <Input
                        placeholder="Telefon numaranız"
                        required
                        className="h-10 sm:h-11 transition-all duration-200 focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-posta *</label>
                    <Input
                      type="email"
                      placeholder="E-posta adresiniz"
                      required
                      className="h-10 sm:h-11 transition-all duration-200 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Proje Türü</label>
                    <select className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 h-10 sm:h-11 text-sm sm:text-base transition-all duration-200">
                      <option value="">Seçiniz</option>
                      <option value="konut">Konut</option>
                      <option value="ticari">Ticari</option>
                      <option value="endüstriyel">Endüstriyel</option>
                      <option value="diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız *</label>
                    <Textarea
                      placeholder="Projeniz hakkında detayları paylaşın..."
                      rows={4}
                      required
                      className="text-sm sm:text-base transition-all duration-200 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white h-11 sm:h-12 text-sm sm:text-base transition-all duration-200"
                  >
                    Mesaj Gönder
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">İletişim Bilgileri</h2>

                <StaggeredReveal staggerDelay={100} className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {contactCards.map((card) => (
                    <Card key={card.title} className="transition-all duration-200 hover:shadow-lg">
                      <CardHeader className="pb-2 sm:pb-3">
                        <CardTitle className="flex items-center text-base sm:text-lg">
                          <card.icon className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-amber-600 flex-shrink-0" />
                          {card.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm sm:text-base text-gray-600">{card.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </StaggeredReveal>

                {/* Map Placeholder */}
                <ScrollReveal direction="up" delay={400}>
                  <div className="bg-gray-200 h-48 sm:h-64 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 text-sm sm:text-base">Harita Yükleniyor...</p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Ücretsiz Keşif ve Teklif</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
              Projeniz için ücretsiz keşif yapıyor ve detaylı teklif sunuyoruz
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-200"
            >
              Ücretsiz Keşif Talep Et
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
