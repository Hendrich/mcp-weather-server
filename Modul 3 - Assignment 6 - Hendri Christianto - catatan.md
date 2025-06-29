# Modul 3 - Assignment 6 - Nama Lengkap

## Log Debugging

Lihat file log: `Modul 3 - Assignment 6 - Nama Lengkap - log.txt`

## Catatan Masalah & Solusi

**Masalah:**
Saat environment variable `PORT` tidak diatur di file `.env`, server gagal dijalankan dan muncul log:

```
[MCP LOG] PORT environment variable is missing!
```

**Solusi:**
Menambahkan variabel `PORT` pada file `.env` agar server dapat dijalankan dengan benar.

## Langkah Debugging

- Menambahkan fungsi `send_log_message` untuk mencatat proses/error.
- Menjalankan server tanpa variabel `PORT` untuk memunculkan error.
- Mengecek log di terminal untuk investigasi.

## Keterangan

Jika tidak ada aplikasi Claude Desktop, proses debugging cukup dilakukan melalui terminal dan log server.
