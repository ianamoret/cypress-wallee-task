export class paymentPage {
    acceptPayment() {
        cy.intercept('GET', 'https://app-wallee.com/**').as('paymentApi')
        cy.wait('@paymentApi')
        cy.origin('https://app-wallee.com', () => {
            cy.get('[class="efinance-button"]').contains('Accept').click()
        })
    }

   declinePayment() {
        cy.intercept('GET', 'https://app-wallee.com/**').as('paymentApi')
        cy.wait('@paymentApi')
        cy.origin('https://app-wallee.com', () => {
            cy.get('[id="login_abort"]').contains('Decline').click()
        })
    }
}

export const onPaymentPage = new paymentPage