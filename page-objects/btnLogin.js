module.exports = {
    url : 'localhost/CitraMart/index.php',

    elements : {
        login : by.xpath("//input[@value='Login']")
    },

    perform: function(){
        var selector = page.btnLogin.elements.login;
        return driver.findElement(selector).click(selector);
        console.log("Clicked");
    }
}