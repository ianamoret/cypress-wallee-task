export class myAccountPage {
    
    navigateToOrder() {
        cy.get('.woocommerce-MyAccount-navigation-link--orders').contains('Orders').click()
    }
    
    validateOrderIsCancelled() {
        cy.get('[class="woocommerce-info"]').contains(' Your order was cancelled. ').should('be.visible')
    }
}
export const onMyAccountPage = new myAccountPage

