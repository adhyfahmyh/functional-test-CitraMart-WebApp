Feature: login gagal

@failed
Scenario: user kasir gagal login
Given kasir login gagal
And user membuka halaman login gagal
And user memasukkan username gagal
And user memasukkan password gagal
When user klik login gagal
Then user masuk gagal