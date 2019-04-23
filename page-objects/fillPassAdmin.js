module.exports = {
    url: 'localhost/CitraMart/index.php',

    elements: {
        adminPass: by.xpath("//input[@placeholder='Password']")
    },

    perform: function(){
        var selector = page.fillPassAdmin.elements.adminPass;
        return driver.findElement(selector).sendKeys(shared.id.passAdmin);
    }
}