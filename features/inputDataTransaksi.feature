Feature: input data transaksi

@success
Scenario: kasir input data transaksi
Given kasir input data
And kasir buka halaman transaksi
And kasir klik menu forms
When kasir klik kelola penjualan
Then kasir membuka kelola penjualan
And kasir masukkan total penjualan
And kasir masukkan total laba
When kasir klik add category
Then data berhasil masuk