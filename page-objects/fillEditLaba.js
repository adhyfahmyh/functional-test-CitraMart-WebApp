module.exports = {
    url: "http://localhost/CitraMart/view/kelola_penjualan.php?edit=4",

    elements: {
        editTotalLaba: by.xpath("//input[2]")
    },

    perform: function(){
        var selector = page.fillEditLaba.elements.editTotalLaba;
        return driver.findElement(selector).sendKeys(shared.data.editlaba);
    }
}