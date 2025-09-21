# Rapkology

Bu proje Codezone şirketi için hazırlanan case çalışmasıdır.

## Canlı Demo

- [Vercel Demo](https://codezone-rapkology-6lfxyg4k9-furkans-projects-5892aebe.vercel.app/)

## Teknolojiler

- **Next.js 15**: Sunucu tarafında renderlama (SSR) ve statik site oluşturma (SSG) yeteneklerinden faydalanarak hızlı sayfa yükleme süreleri elde etmek için kullanıldı.
- **SCSS**: CSS'e kıyasla değişkenler, iç içe geçmiş kurallar ve mixin'ler gibi gelişmiş özellikler sunarak daha düzenli ve sürdürülebilir stil kodları yazmayı sağladı.
- **TypeScript**: Geliştirme sürecindeki hataları en aza indirmek ve uzun vadede kod kalitesini artırmak için kullanıldı.
- **Jotai**: Kolay kullanımı ve sağladığı esnek yapısı için global state yönetimi amacıyla kullanıldı.
- **React Swiper**: Projede kullanılan slider ve carousel bileşenleri için tercih edildi.

## ⚡ Kurulum ve Çalıştırma

```bash
# 1. Repo'yu klonlayın
git clone https://github.com/furkansahanderyol/codezone-rapkology.git

# 2. Proje dizine gidin
cd codezone-rapkology

# 3. Gerekli bağımlılıkları yükleyin
npm install # veya yarn install

# 4. Uygulamayı geliştirme modunda çalıştırın
npm run dev # veya yarn dev
```
## 📂  Proje Yapısı

```bash
/src
├── app/          # Next.js App Router sayfaları ve layout yapısı
├── assets/       # Projede kullanılan ikonların TypeScript uyumlu, props kullanılarak değiştirilebilir varyantları
├── components/   # Tekil, yeniden kullanılabilir UI bileşenleri
├── composite/    # Birden fazla component'in birleşiminden oluşan yapılar
├── constants/    # Sabit değerler
├── helpers/      # Yardımcı fonksiyonlar ve util dosyaları
├── hooks/        # Custom React hook'ları
├── layouts/      # Sayfa düzenleri (GridLayout, SectionLayout)
├── provider/     # Global provider bileşenleri
├── services/     # API çağrıları ve servis katmanı
└── stores/       # State management (Jotai)
```

**ShowPagination** componenti, oluşturulan sayfalar arasında **kolay ve hızlı geçiş** yapılabilmesi amacıyla eklendi. Uygulama içerisinde sağ alt kısımda bulunan göz ikonuna tıklanılarak kullanılabilir.

**DataLoader** componenti, sayfa yüklenirken API'dan verileri çekme işleminin simüle edilmesi için kullanıldı.

Projede bazı component dosyaları, **belirli bir yapı veya kütüphane mantığıyla birlikte çalışacak şekilde gruplanmıştır**.  
Örnek: `-Skeleton/` dizini içerisinde yer alan componentler.

- **SkeletonLine**  
  - Yazıların yerini doldurması için oluşturulmuştur.
- **SkeletonImage**  
  - Fotoğrafların yerini doldurması için oluşturulmuştur.

**layouts/** klasöründe bulunan componentler, tasarım içerisinde tekrar eden **daha büyük yapılar** için kullanıldı.

**provider/** klasöründe Jotai kütühpanesi için Store kurulumu yapıldı.

