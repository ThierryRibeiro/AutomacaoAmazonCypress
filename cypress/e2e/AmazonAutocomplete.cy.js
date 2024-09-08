
    const urlSite = 'https://www.amazon.com.br/'
    const BarraPesquisa = '#twotabsearchtextbox'
    const BtnPesquisa = '#nav-search-submit-button'
    const msgSug1 = ':nth-child(2) > .s-suggestion-container > .s-suggestion'
    const msgSug2 = ':nth-child(1) > .s-suggestion-trending-container > .s-suggestion-trending-icon-container > .s-suggestion-trending-icon'
    const msgErro = '.s-no-outline > :nth-child(1) > :nth-child(1)'
    //Massa
    const txtValido = 'Iphone'
    const txtInvalido = 'AUHIEFUGIURBFRIUG'

describe('Validar Fluxo Site Amazon', () => {

    it('Verificar pesquisa texto valido', () => {
        cy.visit(urlSite)
        cy.get(BarraPesquisa).click()
        cy.get(BarraPesquisa).type(txtValido)
        cy.wait(1000)
        cy.get(msgSug1).should('be.visible')
    })
    
    it('Verificar pesquisa com barra em branco', () => {
        cy.visit(urlSite)
        cy.get(BarraPesquisa).click()
        cy.wait(1000)
        cy.get(msgSug2).should('be.visible')
    })
    it('Verificar pesquisa com texto invalido', () => {
        cy.visit(urlSite)
        cy.get(BarraPesquisa).click()
        cy.get(BarraPesquisa).type(txtInvalido)
        cy.get(BtnPesquisa).click()
        cy.get(msgErro).should('be.visible') 
    })
});