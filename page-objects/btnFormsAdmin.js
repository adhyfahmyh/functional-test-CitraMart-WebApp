module.exports = {
    url: 'http://localhost/CitraMart/view/index_pengguna.php',

    elements: {
        adminForms: by.xpath("//a[contains(text(),'Forms')]//span[@class='fa fa-chevron-down']")
    },

    perform: function(){
        var selector = page.btnFormsAdmin.elements.adminForms;
        return driver.findElement(selector).click(selector);
    }
}