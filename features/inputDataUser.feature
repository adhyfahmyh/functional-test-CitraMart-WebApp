Feature: input data pengguna

   Feature Description
   @success
   Scenario: admin input data pengguna
   Given admin login
   And admin membuka halaman login
   And admin memasukkan username
   And admin memasukkan password
   When admin click login
   Then admin masuk ke dashboard
   When admin click menu
   Then admin membuka halaman kelola pengguna
   And admin input pengguna
   Then data pengguna berhasil diinput
