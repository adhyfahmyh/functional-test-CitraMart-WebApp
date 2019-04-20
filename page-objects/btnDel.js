module.exports = {
    url : "http://localhost/CitraMart/view/kelola_penjualan.php",

    elements : {
        delete : by.xpath("//a[@href='../view/kelola_penjualan.php?delete=24']")
    },

    perform: function(){
        var selector = page.btnDel.elements.delete;
        return driver.findElement(selector).click(selector);
    }
}