# **Pattern Software Design**

## **1. Pendahuluan**
### Apa Itu Pattern Software Design?
Pattern Software Design adalah solusi umum dan berulang yang telah terbukti efektif dalam menyelesaikan permasalahan dalam pengembangan perangkat lunak. Pola ini membantu developer menulis kode yang lebih terstruktur, reusable, dan maintainable.

### Kenapa Harus Peduli?
- Meningkatkan keterbacaan dan efisiensi kode.
- Memudahkan tim dalam berkolaborasi.
- Mengurangi kesalahan dan redundansi dalam pengembangan.
- Menerapkan best practice dalam rekayasa perangkat lunak.

## **2. Kategori Design Pattern**
Design pattern dibagi menjadi tiga kategori utama:

### a. **Creational Patterns** (Membantu dalam pembuatan objek)
- **Singleton** → Membatasi pembuatan instance dari sebuah kelas.
- **Factory Method** → Menggunakan metode untuk membuat objek tanpa menentukan kelas secara eksplisit.
- **Builder** → Memisahkan pembuatan objek dari representasinya.
- **Prototype** → Membuat objek baru dengan menduplikasi instance yang sudah ada.

### b. **Structural Patterns** (Mengatur komposisi kelas dan objek)
- **Adapter** → Menghubungkan dua interface yang berbeda.
- **Composite** → Mengelola objek dalam struktur pohon (tree structure).
- **Decorator** → Menambahkan fungsionalitas ke objek tanpa mengubah strukturnya.
- **Facade** → Menyediakan antarmuka sederhana untuk subsistem yang kompleks.

### c. **Behavioral Patterns** (Membantu komunikasi antar objek)
- **Observer** → Memungkinkan objek mendapatkan notifikasi saat ada perubahan pada objek lain.
- **Strategy** → Memisahkan algoritma dari implementasi utama.
- **Command** → Mengemas permintaan dalam bentuk objek.
- **State** → Mengubah perilaku objek berdasarkan state-nya.

## **3. Studi Kasus & Implementasi**
### **Studi Kasus: Penerapan Design Pattern di Dunia Nyata**
1. **Singleton pada Database Connection** → Hanya ada satu instance koneksi database dalam aplikasi.
2. **Factory Method dalam Pembuatan Objek User** → Digunakan untuk membuat berbagai jenis pengguna dengan metode yang sama.
3. **Observer dalam Notifikasi Social Media** → Pengguna akan mendapatkan notifikasi jika ada perubahan status dari teman mereka.
4. **Strategy dalam Sistem Pembayaran** → Memilih metode pembayaran yang berbeda (kartu kredit, e-wallet, transfer bank).

### **Kode Implementasi Singkat (Contoh Singleton - Python)**
```python
class DatabaseConnection:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(DatabaseConnection, cls).__new__(cls)
        return cls._instance
    
    def connect(self):
        return "Terhubung ke database"

# Contoh penggunaan
conn1 = DatabaseConnection()
conn2 = DatabaseConnection()
print(conn1 is conn2)  # Output: True
```

## **4. Kapan Menggunakan Design Pattern?**
- Jika ada permasalahan yang sering muncul dan membutuhkan solusi yang terstruktur.
- Jika ingin membuat kode lebih fleksibel dan scalable.
- Jika ingin menghindari kode yang redundant dan susah dipelihara.
- Jika ingin meningkatkan kolaborasi dalam tim development.

## **5. Kesimpulan**
- Design Pattern adalah solusi yang sudah terbukti dalam pengembangan perangkat lunak.
- Terdapat tiga kategori utama: Creational, Structural, dan Behavioral.
- Implementasi pattern yang tepat dapat meningkatkan efisiensi, maintainability, dan fleksibilitas kode.
- Tidak semua pattern harus digunakan, pilih yang paling sesuai dengan kebutuhan aplikasi.
