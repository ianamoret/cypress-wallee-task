export class checkOutPage {
    
    fillInBillingDetailsForTestUser() {
        cy.get('#billing_first_name').type('John')
        cy.get('#billing_last_name').type('Doe')
        cy.get('#billing_address_1').type('Oak Street 1')
        cy.get('#billing_address_2').type('Apartment 23')
        cy.get('#billing_postcode').type('1234')
        cy.get('#billing_city_field').type('Zurich')
        cy.get('#billing_phone_field').type('123456789')
        cy.get('#billing_email_field').type(`${Date.now()}@test.com`)
    }

    clickCreateAccount() {
        cy.get('#createaccount').check({force: true})
    }

    clickPlaceOrder() {
        cy.get('#place_order').click({force: true})
    }

    validateErrorForRequiredFields() {
        cy.get('[class="woocommerce-error"]').should('be.visible')
    }

   confirmTermsAndConditions(){
        cy.get('[class="woocommerce-terms-and-conditions-checkbox-text"]').click()
    }

    validateTotalPrice() {
        cy.get('[class="order-total"]').find('bdi').invoke('text').then( totalAmountText=> {
            var totalPriceOnCheckout = totalAmountText.replace(/[^0-9.]/g, '')
            cy.get('@totalPrice').then(totalPrice => {
                expect(totalPriceOnCheckout).to.eq(totalPrice)
            })  
        })
    }
}

export const onCheckoutPage = new checkOutPage
