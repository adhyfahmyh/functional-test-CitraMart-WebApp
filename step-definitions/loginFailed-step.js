module.exports = function(){
    this.Given(/^gagal login$/, function(){
        helpers.loadPage(shared.pages.loginPage)
    })
    this.Given(/^membuka halaman login$/, function(){
        helpers.loadPage(shared.pages.loginPage)
    })
    this.Given(/^memasukkan username$/, function(){
        driver.then(function(){
            return page.fillUser.perform()
        })
    })
    this.Given(/^memasukkan password$/, function(){
        driver.then(function(){
            return page.fillPass.perform()
        })
    })
    this.When(/^klik login$/, function(){
        driver.then(function(){
            return page.btnLogin.perform()
        })
    })
    this.Then(/^gagal masuk$/, function(){
        helpers.loadPage(shared.pages.loginPage)
    })
}