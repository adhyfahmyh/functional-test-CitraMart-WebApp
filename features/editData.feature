Feature: edit data transaksi

@success
Scenario: kasir edit data transaksi
Given kasir edit data
And kasir buka halaman transaksi untuk edit
And kasir klik menu forms untuk edit
When kasir klik kelola penjualan untuk edit
Then kasir melihat data transaksi
And kasir memilih data transaksi
And kasir edit total penjualan
And kasir edit total laba untuk
When kasir klik update penjualan
Then data berhasil diedit