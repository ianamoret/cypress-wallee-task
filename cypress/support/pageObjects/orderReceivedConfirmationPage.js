export class orderReceivedConfirmationPage {
    validateOrderIsReceived() {
        cy.url().should('include', 'https://woocommerce.showcase-wallee.com/checkout/order-received')
    }

    validateTotalPrice() {
        cy.get('[class="woocommerce-order-overview__total total"]').invoke('text').then( totalAmountText=> {
            var totalPriceOnConfirmation = totalAmountText.replace(/[^0-9.]/g, '')
            cy.get('@totalPrice').then(totalPrice => {
                expect(totalPriceOnConfirmation).to.eq(totalPrice)
            })  
        })
    }
}

export const onOrderReceivedConfirmationPage = new orderReceivedConfirmationPage