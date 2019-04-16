module.exports = {
    url : "http://localhost/CitraMart/view/index_penjualan.php",

    elements : {
        forms : by.xpath("//a[contains(text(),'Forms')]//span[@class='fa fa-chevron-down']")
    },

    perform: function(){
        var selector = page.menuForms.elements.forms;
        return driver.findElement(selector).sendKeys('Kelola Penjualan');
    }
}