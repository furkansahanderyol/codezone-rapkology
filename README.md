 <h1>Rapkology</h1>


<p>Bu proje Codezone şirketi için hazırlanan case çalışmasıdır.</p>

<h2>Canlı Demo</h2>
<li>
  <ul>- [Vercel Demo] (https://codezone-rapkology-6lfxyg4k9-furkans-projects-5892aebe.vercel.app/)</ul>
</li>


<h2>Teknolojiler</h2>
<ul>
  <li><b>Next.js 15</b>: Sunucu tarafında renderlama (SSR) ve statik site oluşturma (SSG) yeteneklerinden faydalanarak hızlı sayfa yükleme süreleri ve daha iyi SEO performansı elde etmek için kullanıldı.</li>
  <li><b>SCSS</b>: CSS'e kıyasla değişkenler, iç içe geçmiş kurallar ve mixin'ler gibi gelişmiş özellikler sunarak daha düzenli ve sürdürülebilir stil kodları yazmayı sağladı.</li>
  <li><b>TypeScript</b>: Geliştirme sürecindeki hataları en aza indirmek ve uzun vadede kod kalitesini artırmak için kullanıldı.</li>
  <li><b>Jotai</b>: Kolay kullanımı ve sağladığı esnek yapısı için global state yönetimi amacıyla kullanıldı.</li>
  <li><b>React Swiper</b>: Projede kullanılan slider ve carousel bileşenleri için tercih edildi.</li>
</ul>

<h2>Kurulum ve Çalıştırma</h2>
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


## 📂 Proje Yapısı

```bash
/src
├── app/          # Next.js App Router sayfaları ve layout yapısı
├── assets/       # Projede kullanılan ikonlar. 
├── components/   # Tekil, yeniden kullanılabilir UI bileşenleri
├── composite/    # Birden fazla component'in birleşiminden oluşan yapılar
├── constants/    # Sabit değerler 
├── helpers/      # Yardımcı fonksiyonlar ve util dosyaları
├── hooks/        # Custom React hook'ları
├── layouts/      # Sayfa düzenleri (ör. GridLayout, SectionLayout)
├── provider/     # Global provider bileşenleri
├── services/     # API çağrıları ve servis katmanı
└── stores/       # State management (Jotai)

### 📦 Component Grupları

Projede bazı component dosyaları, **belirli bir yapı veya kütüphane mantığıyla birlikte çalışacak şekilde gruplanmıştır**.  
Örnek: `-Skeleton/` dizini içerisinde yer alan componentler.

#### Örnek Grup: `-Skeleton`
- **SkeletonLine**  
  - Yazıların yerini  doldurması için oluşturulmuştur.
- **SkeletonImage**  
  - Fotoğrafların yerini doldurması için oluşturulmuştur.




