module.exports = function(){

    this.Given(/^kasir hapus data$/, function(){
    
    })
    this.Given(/^kasir buka halaman transaksi untuk hapus data$/, function(){
        helpers.loadPage(shared.pages.page2)
    })
    this.Given(/^kasir klik menu forms untuk hapus data$/, function(){
        driver.then(function(){
            return page.menuForms.perform()
        })
    })
    this.When(/^kasir klik kelola penjualan untuk hapus data$/, function(){
        driver.then(function(){
            return page.menuKelolaPenjualan.perform()
        })
    })
    this.Then(/^kasir melihat daftar data transaksi$/, function(){
        helpers.loadPage(shared.pages.page3)
    })
    this.Given(/^kasir memilih data transaksi untuk dihapus$/, function(){
        helpers.loadPage(shared.pages.page3)
    })
    this.When(/^kasir klik delete$/, function(){
        driver.then(function(){
            return page.btnDel.perform()
        })
    })
    this.Then(/^data berhasil dihapus$/, function(){
        helpers.loadPage(shared.pages.page3)
    })
}