class PesquisaCEP {

    get cep() { return browser.element('[name="relaxation"]'); }
    get tipoCEP() { return browser.element('[name="tipoCEP"]'); }
    get submit() { return browser.element('.btn2.float-right'); }
    get resultado() { return browser.element('.tmptabela'); }

    open() {
        browser.url('buscaCepEndereco.cfm');
    }

    pesquisarCEP(cep, tipo) {
        this.cep.setValue(cep);
        this.tipoCEP.selectByVisibleText(tipo);
        this.submit.click();
    }
}
module.exports = PesquisaCEP;
