module.exports = {
    url: 'localhost/CitraMart/index.php',

    elements: {
        fillUsername: by.xpath("//input[@placeholder='Username']")
    },

    perform: function(){
        var selector = page.fillUser.elements.fillUsername;
        return driver.findElement(selector).sendKeys(shared.id.Username);
    }
}