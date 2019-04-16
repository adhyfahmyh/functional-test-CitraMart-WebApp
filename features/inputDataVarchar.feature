Feature: input data varchar

@success
Scenario: kasir input data varchar
Given kasir input data varchar
And kasir buka halaman transaksi v
And kasir klik menu forms v
When kasir klik kelola penjualan v
Then kasir membuka kelola penjualan v
And kasir masukkan total penjualan varchar
And kasir masukkan total laba varchar
When kasir klik add category v
Then data masuk bernilai 0