module.exports = {
    url: 'localhost/CitraMart/index.php',

    elements: {
        UserAdmin: by.xpath("//input[@placeholder='Username']")
    },

    perform: function(){
        var selector = page.fillUserAdmin.elements.UserAdmin;
        return driver.findElement(selector).sendKeys(shared.id.userAdmin);
    }
}