module.exports = function(){
    this.Given(/^kasir input data$/, function(){

    })
    this.Given(/^kasir buka halaman transaksi$/, function(){
        helpers.loadPage(shared.pages.page2)
    })
    this.Given(/^kasir klik menu forms$/, function(){
        driver.then(function(){
            return page.menuForms.perform()
        })
    })
    // this.Given(/^kasir klik kelola penjualan$/, function(){
    //     driver.then(function(){
    //         return page.menuKelolaPenjualan.perform()
    //     })
    // })
    // this.Given(/^kasir masukkan total penjualan$/, function(){
    //     driver.then(function(){
    //         return page.fillPenjualan.perform()
    //     })
    // })
    // this.Given(/^kasir masukkan total laba$/, function(){
    //     driver.then(function(){
    //         return page.fillLaba.perform()
    //     })
    // })
    // this.When(/^kasir klik add categoryn$/, function(){
    //     driver.then(function(){
    //         return page.btnLogin.perform()
    //     })
    // })
    // this.Then(/^data berhasil masuk$/, function(){
    //     helpers.loadPage(shared.pages.page2)
    // })
}