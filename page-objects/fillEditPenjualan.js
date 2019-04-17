module.exports = {
    url: "http://localhost/CitraMart/view/kelola_penjualan.php?edit=4",

    elements: {
        editTotalPenjualan: by.xpath("//form[2]//div[1]//input[1]")
    },

    perform: function(){
        var selector = page.fillEditPenjualan.elements.editTotalPenjualan;
        return driver.findElement(selector).sendKeys(shared.data.editpenjualan);
    }
}