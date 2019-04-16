module.exports = {
    url: "http://localhost/CitraMart/view/kelola_penjualan.php",

    elements: {
        fillTotalLaba: by.xpath("//input[@name='total_laba']")
    },

    perform: function(){
        var selector = page.fillLaba.elements.fillTotalLaba;
        return driver.findElement(selector).sendKeys(shared.data.laba);
    }
}