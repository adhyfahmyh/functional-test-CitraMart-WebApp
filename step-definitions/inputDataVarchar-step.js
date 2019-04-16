module.exports = function(){
    this.Given(/^kasir input data varchar$/, function(){

    })
    this.Given(/^kasir buka halaman transaksi v$/, function(){
        helpers.loadPage(shared.pages.page2)
    })
    this.Given(/^kasir klik menu forms v$/, function(){
        driver.then(function(){
            return page.menuForms.perform()
        })
    })
    this.When(/^kasir klik kelola penjualan v$/, function(){
        driver.then(function(){
            return page.menuKelolaPenjualan.perform()
        })
    })
    this.Then(/^kasir membuka kelola penjualan v$/, function(){
        helpers.loadPage(shared.pages.page3)
    })
    this.Given(/^kasir masukkan total penjualan varchar$/, function(){
        driver.then(function(){
            return page.fillPenjualanVarchar.perform()
        })
    })
    this.Given(/^kasir masukkan total laba varchar$/, function(){
        driver.then(function(){
            return page.fillLabaVarchar.perform()
        })
    })
    this.When(/^kasir klik add category v$/, function(){
        driver.then(function(){
            return page.btnAddCategory.perform()
        })
    })
    this.Then(/^data masuk bernilai 0$/, function(){
        helpers.loadPage(shared.pages.page2)
    })
}