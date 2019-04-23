module.exports = {
    url: 'http://localhost/CitraMart/view/index_pengguna.php',

    elements: {
        formsAdmin: by.xpath("//a[contains(text(),'Forms')]"),
        kelolaPengguna: by.xpath("//a[contains(text(),'Kelola Pengguna')]")
    },

    perform: function () {

        var selectorForms = page.inputDataPengguna.elements.formsAdmin;
        var selectorKelolaPengguna = page.inputDataPengguna.elements.kelolaPengguna;


        driver.findElement(selectorForms).click(selectorForms);
        return driver.findElement(selectorKelolaPengguna).click(selectorKelolaPengguna);

    }
}