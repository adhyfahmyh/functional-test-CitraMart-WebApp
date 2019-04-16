Feature: login gagal
user gagal melakukan login

@success
Scenario: user gagal login
Given gagal login
And membuka halaman login
And memasukkan username
And memasukkan password
When klik login
Then gagal masuk