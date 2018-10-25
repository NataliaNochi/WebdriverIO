const page_buscarCEP = require('../pages/buscarCEP.page.ts');
const correios = new page_buscarCEP();

const expect = require('chai').expect

describe("Teste de pesquisa de CEP no site dos correios > ", () => {

    let cep = "01001001";
    let tipoCep = "Localidade/Logradouro";

    it("Pesquisando o CEP por Endereço", () => {
        correios.open();
        correios.pesquisarCEP(cep, tipoCep);
        expect(correios.resultado.isVisible()).to.be.true;
    });
});