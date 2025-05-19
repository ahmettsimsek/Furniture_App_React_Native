# Furniture App 🛋️

Mobil uygulama olarak geliştirilen bu proje, React Native ve Expo kullanılarak oluşturulmuştur. Uygulama içerisinde alt menü navigasyonu, özel yazı tipleri ve temel ekran yapıları (Home, Search, Profile, Cart) yer almaktadır.

## ✨ Özellikler

- React Navigation ile sekmeli (tab) ve yığınlı (stack) geçiş yapısı
- Expo Font kullanılarak özel Poppins yazı tipi desteği
- SafeAreaView ile modern cihazlara tam uyumluluk
- Feather ve Ionicons ile ikonlu sekmeler
- Splash Screen (yazı tipleri yüklenene kadar bekletme)

## 📁 Proje Yapısı

Furniture_App/
├── App.js
├── navigation/
│ └── BottomTabNavigation.js
├── screens/
│ ├── Home.js
│ ├── Search.js
│ ├── Profile.js
│ └── Cart.js
├── constants/
│ ├── index.js
│ └── styles.js
├── assets/
│ └── fonts/
│ ├── Poppins-Regular.ttf
│ ├── Poppins-Bold.ttf
│ └── ...

bash
Kopyala
Düzenle

## 🛠️ Kurulum

1. Bu projeyi klonlayın:

```bash
git clone https://github.com/kullanici-adi/furniture-app.git
```

```
cd furniture-app
```

## Bağımlılıkları yükleyin:

```
npm install
```


## Gerekli Expo paketlerini yükleyin:

```
npx expo install
```

## Uygulamayı başlatın:

```
npx expo start
```

## ✅ Kullanılan Teknolojiler
React Native

Expo

React Navigation

Expo Font

Expo Splash Screen

Vector Icons (Ionicons, Feather)

📱 Ekranlar
Home: Ana ekran

Search: Arama sayfası

Profile: Kullanıcı profili

Cart: Sepet ekranı (stack üzerinden erişilir)

⚠️ Notlar
Proje içinde kullanılan yazı tipleri assets/fonts/ klasöründe yer alır.

Splash screen, yazı tipi yüklenmeden kalkmaz. Bu nedenle useFonts ve onLayout birlikte kullanılmıştır.

Android’de tab çubuğu sistem çubuğuna çakışmasın diye SafeAreaView kullanılmıştır.

🧑‍💻 Katkıda Bulun
PR’ler (pull request) ve katkılar memnuniyetle karşılanır. Lütfen önce bir issue açarak iletişime geçin.
