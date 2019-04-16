Feature: login
user kasir melakukan login

@success
Scenario: user kasir login
Given kasir login
And user membuka halaman login
And user memasukkan username
And user memasukkan password
When user klik login
Then user masuk

Feature: login gagal

@success
Scenario: user kasir gagal login
Given kasir login gagal
And user membuka halaman login gagal
And user memasukkan username gagal
And user memasukkan password gagal
When user klik login gagal
Then user masuk gagal