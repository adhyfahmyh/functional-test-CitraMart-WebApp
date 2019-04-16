module.exports = {
    url: 'localhost/CitraMart/index.php',

    elements: {
        fillPassword: by.xpath("//input[@placeholder='Password']")
    },

    perform: function(){
        var selector = page.fillPass.elements.fillPassword;
        return driver.findElement(selector).sendKeys(shared.id.passfailed);
    }
}