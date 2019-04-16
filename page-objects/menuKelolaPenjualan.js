module.exports = {
    url : "http://localhost/CitraMart/view/index_penjualan.php",

    elements : {
        kelola : by.xpath("//a[contains(text(),'Kelola Penjualan')]")
    },

    perform: function(){
        var selector = page.menuKelolaPenjualan.elements.kelola;
        return driver.findElement(selector).click(selector);
    }
}