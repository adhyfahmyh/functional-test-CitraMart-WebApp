Feature: hapus data transaksi

@success
Scenario: kasir hapus data transaksi
Given kasir hapus data
And kasir buka halaman transaksi untuk hapus data
And kasir klik menu forms untuk hapus data
When kasir klik kelola penjualan untuk hapus data
Then kasir melihat daftar data transaksi
And kasir memilih data transaksi untuk dihapus
When kasir klik delete
Then data berhasil dihapus