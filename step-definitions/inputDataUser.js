module.exports = function(){
    this.Given(/^admin login$/, function(){

    })
    this.Given(/^admin membuka halaman login$/, function(){
        helpers.loadPage(shared.pages.loginPage)
    })
    this.Given(/^admin memasukkan username$/, function(){
        driver.then(function(){
            return page.fillUserAdmin.perform()
        })
    })
    this.Given(/^admin memasukkan password$/, function(){
        driver.then(function(){
            return page.fillPassAdmin.perform()
        })
    })
    this.When(/^admin click login$/, function(){
        driver.then(function(){
            return page.btnLogin.perform()
        })
    })
    this.Then(/^admin masuk ke dashboard$/, function(){
        helpers.loadPage(shared.pages.page5)
    })
    this.When(/^admin click menu$/, function(){
        driver.then(function(){
            return page.inputDataPengguna.perform()
        })
    })
    this.Then(/^admin membuka halaman kelola pengguna$/, function(){
        helpers.loadPage(shared.pages.page6)
    })
    this.Given(/^admin input pengguna$/, function(){
        driver.then(function(){
            return page.inputDataPengguna2.perform()
        })
    })
    this.Then(/^data pengguna berhasil diinput$/, function(){
        helpers.loadPage(shared.pages.page6)
    })
}