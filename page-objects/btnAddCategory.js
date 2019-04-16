module.exports = {
    url : "http://localhost/CitraMart/view/kelola_penjualan.php",

    elements : {
        addcategory : by.xpath("//input[@value='Add Category']")
    },

    perform: function(){
        var selector = page.btnAddCategory.elements.addcategory;
        return driver.findElement(selector).click(selector);
    }
}