module.exports = {
    url: 'http://localhost/CitraMart/view/index_pengguna.php',

    elements: {
        fillnama: by.xpath("////input[@name='nama'][contains(text(),'Forms')]"),
        fillusername: by.xpath("//input[@name='username']"),
        fillpassword:by.xpath("//input[@name='password']"),
        fillstatus:by.xpath("//input[@name='password']"),
        fillalamat:by.xpath("//input[@name='alamat']"),
        btnaddpengguna:by.xpath("//input[@name='submit']")
    },

    perform: function () {

        var selector1 = page.inputDataPengguna2.elements.fillnama;
        var selector2 = page.inputDataPengguna2.elements.fillusername;
        var selector3 = page.inputDataPengguna2.elements.fillpassword;
        var selector4 = page.inputDataPengguna2.elements.fillstatus;
        var selector5 = page.inputDataPengguna2.elements.fillalamat;
        var selector6 = page.inputDataPengguna2.elements.btnaddpengguna;


        driver.findElement(selector1).sendKeys(shared.id.namapengguna);
        driver.findElement(selector2).sendKeys(shared.id.usernamepengguna);
        driver.findElement(selector3).sendKeys(shared.id.passwordpengguna);
        driver.findElement(selector4).sendKeys(shared.id.statuspengguna);
        driver.findElement(selector5).sendKeys(shared.id.alamatpengguna);
        return driver.findElement(selector6).click(selector6);

    }
}