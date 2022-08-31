/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(4)
            .contains('Arcadio Gym Short')
            .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 6

        cy.get('[class="product-block grid"]')
            .contains('Arcadio Gym Short').click()
            cy.get('.button-variable-item-32').click()
            cy.get('.button-variable-item-Red').click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 2)
    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Arcadio Gym Short', '32', 'Red', 2)
        
    });
});
