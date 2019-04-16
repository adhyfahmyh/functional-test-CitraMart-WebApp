module.exports = {
    url: "http://localhost/CitraMart/view/kelola_penjualan.php",

    elements: {
        fillTotalPenjualan: by.xpath("//input[@name='total_penjualan']")
    },

    perform: function(){
        var selector = page.fillPenjualan.elements.fillTotalPenjualan;
        return driver.findElement(selector).sendKeys(shared.data.varcharpenjualan);
    }
}