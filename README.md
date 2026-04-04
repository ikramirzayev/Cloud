# ☁️ Bulut Bilişim Dönem Projesi - Hava Durumu Uygulaması

Bu proje, AWS bulut altyapısı üzerinde çalışan, modern bir **Çift Katmanlı (Two-Tier)** web uygulamasıdır.

## 🚀 Canlı Linkler
* **Frontend (S3):** http://benim-bulut-projem-2026.s3-website.eu-north-1.amazonaws.com/

## 🏗️ Mimari Yapı
Uygulama, yüksek erişilebilirlik ve performans hedeflenerek iki ayrı AWS servisi üzerinde dağıtılmıştır:
* **Frontend:** React + Tailwind CSS kullanılarak geliştirildi ve **AWS S3** üzerinde statik web sitesi barındırma (Static Website Hosting) yöntemiyle yayınlandı.
* **Backend:** .NET 8 Web API kullanılarak geliştirildi ve **AWS EC2 (Windows Server)** üzerinde host edildi.

## 🔒 Güvenlik ve Konfigürasyon
* **CORS Politikası:** API, yalnızca S3 üzerindeki frontend origin'inden gelen isteklere izin verecek şekilde yapılandırıldı.
* **Security Groups:** EC2 üzerinde sadece 80 (HTTP) ve 5056 (API) portları dış dünyaya açıldı; RDP erişimi IP bazlı kısıtlandı.
* **Firewall:** Windows Defender Firewall üzerinde API portu için özel Inbound kuralı tanımlandı.

## 🛠️ Kullanılan Teknolojiler
* **Frontend:** React, Tailwind CSS, Fetch API
* **Backend:** .NET 8, Minimal API
* **Cloud:** AWS (S3, EC2, IAM)
