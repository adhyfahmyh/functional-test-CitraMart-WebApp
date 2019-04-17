module.exports = function(){

        this.Given(/^kasir edit data$/, function(){
    
        })
        this.Given(/^kasir buka halaman transaksi untuk edit$/, function(){
            helpers.loadPage(shared.pages.page2)
        })
        this.Given(/^kasir klik menu forms untuk edit$/, function(){
            driver.then(function(){
                return page.menuForms.perform()
            })
        })
        this.When(/^kasir klik kelola penjualan untuk edit$/, function(){
            driver.then(function(){
                return page.menuKelolaPenjualan.perform()
            })
        })
        this.Then(/^kasir melihat data transaksi$/, function(){
            helpers.loadPage(shared.pages.page3)
        })
        this.Given(/^kasir memilih data transaksi$/, function(){
            driver.then(function(){
                return page.pilihTransaksi.perform()
            })
        })
        this.Given(/^kasir edit total penjualan/, function(){
            driver.then(function(){
                return page.fillEditPenjualan.perform()
            })
        })
        this.Given(/^kasir edit total laba/, function(){
            driver.then(function(){
                return page.fillEditLaba.perform()
            })
        })
        this.When(/^kasir klik update penjualan$/, function(){
            driver.then(function(){
                return page.btnUpdatePenjualan.perform()
            })
        })
        this.Then(/^data berhasil diedits$/, function(){
            helpers.loadPage(shared.pages.page4)
        })
    }
