module.exports = function(){
    this.Given(/^kasir login$/, function(){
        helpers.loadPage(shared.pages.loginPage)
    })
    this.Given(/^user membuka halaman login$/, function(){
        helpers.loadPage(shared.pages.loginPage)
    })
    this.Given(/^user memasukkan username$/, function(){
        driver.then(function(){
            return page.fillUser.perform()
        })
    })
    this.Given(/^user memasukkan password$/, function(){
        driver.then(function(){
            return page.fillPass.perform()
        })
    })
    this.When(/^user klik login$/, function(){
        driver.then(function(){
            return page.btnLogin.perform()
        })
    })
    this.Then(/^user masuk$/, function(){
        helpers.loadPage(shared.pages.page2)
    })
}