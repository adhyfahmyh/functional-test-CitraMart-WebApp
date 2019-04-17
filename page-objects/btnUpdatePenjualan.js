module.exports = {
    url : "http://localhost/CitraMart/view/kelola_penjualan.php?edit=4",

    elements : {
        updatePenjualan : by.xpath("//input[@value='Update Penjualan']")
    },

    perform: function(){
        var selector = page.btnUpdatePenjualan.elements.updatePenjualan;
        return driver.findElement(selector).click(selector);
    }
}