/// <reference typess="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it.only('deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Rafael', 'Araujo', 'PL', 'Brasil', 'Rua São Mateus', '110','Londrina','Parana','86020040', '26262626','email@email.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
        
    });
});