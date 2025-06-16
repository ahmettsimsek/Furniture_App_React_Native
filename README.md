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

## 📱 Ekranlar
Home: Ana ekran

Search: Arama sayfası

Profile: Kullanıcı profili

Cart: Sepet ekranı (stack üzerinden erişilir)

## ⚠️ Notlar
Proje içinde kullanılan yazı tipleri assets/fonts/ klasöründe yer alır.

Splash screen, yazı tipi yüklenmeden kalkmaz. Bu nedenle useFonts ve onLayout birlikte kullanılmıştır.

Android’de tab çubuğu sistem çubuğuna çakışmasın diye SafeAreaView kullanılmıştır.

## 🧑‍💻 Katkıda Bulun
PR’ler (pull request) ve katkılar memnuniyetle karşılanır. Lütfen önce bir issue açarak iletişime geçin.

## 💡 Kullanılan Paketler
@react-navigation/native

@react-navigation/native-stack

@react-navigation/bottom-tabs

expo-font

expo-splash-screen

react-native-safe-area-context

@expo/vector-icons (Ionicons, Feather)

## 📷 Ekranlar
Home — Ana sayfa

Search — Arama sayfası

Profile — Profil sayfası

Cart — Sepet ekranı (stack üzerinden çağrılır)

## ⚠️ Notlar
Yazı tipleri assets/fonts/ altında yer almalı.

Splash screen, fontlar yüklenmeden kapanmaz.

Android tab çubuğu ile çakışmaması için SafeAreaView kullanılır.

## 🤝 Katkıda Bulunmak
Pull request’ler ve katkılar memnuniyetle karşılanır. Geliştirme öncesinde bir issue açarak tartışabilirsiniz.
------------------------------
-------------------------
------------------
![Image](https://github.com/user-attachments/assets/62f89f95-1bef-4095-ba54-11b0724eb114)
![Image](https://github.com/user-attachments/assets/c8b620fd-85db-40b1-8740-8884cd0d326d)
![Image](https://github.com/user-attachments/assets/5b1e928f-2414-4c43-8173-fa7420504ddf)
![Image](https://github.com/user-attachments/assets/3be80517-c7b0-4b14-9f8d-85ce31d5b652)
![Image](https://github.com/user-attachments/assets/7d07cd77-ad56-4568-b69a-1115d57cf658)
![Image](https://github.com/user-attachments/assets/e49bc520-bb67-4788-aabd-d4fbd0d95fe4)
![Image](https://github.com/user-attachments/assets/71997993-9eec-40de-a418-0e9b75cfc44d)
![Image](https://github.com/user-attachments/assets/4ba0c8a1-5f13-46de-918d-e238c802d55d)
