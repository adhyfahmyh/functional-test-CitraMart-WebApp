module.exports = {
    url : "http://localhost/CitraMart/view/kelola_penjualan.php",

    elements : {
        klikEdit : by.xpath("//a[@href='../view/kelola_penjualan.php?edit=4']")
    },

    perform: function(){
        var selector = page.pilihTransaksi.elements.klikEdit;
        return driver.findElement(selector).click(selector);
    }
}