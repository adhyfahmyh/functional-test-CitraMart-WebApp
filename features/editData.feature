Feature: edit data transaksi

@success
Scenario: kasir edit data transaksi
Given kasir edit data
And kasir buka halaman transaksi untuk edit
And kasir klik menu forms untuk edit
When kasir klik kelola penjualan untuk edit
Then kasir membuka kelola penjualan untuk edit
And kasir memilih data transaksi
And kasir masukkan total penjualan untuk edit
And kasir masukkan total laba untuk edit
When kasir klik update penjualan
Then data berhasil diedit