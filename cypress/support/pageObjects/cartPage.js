export class cartPage {
    clickContinueShopping() {
        cy.get('[class="button wc-forward wp-element-button"]').click()
    }

    increaseQuantityOfSecondProduct() {
        cy.get('[class="input-text qty text"]').eq(1).click().clear().type('2')
    }

    updateCart(){
        cy.get('[name="update_cart"]').click()
    }

    removeItemFromCart(index){
        cy.get('[class="remove"]').eq(index).click()
    }

    validateNumberOfProductsInCart(number){
        cy.get('[class="woocommerce-cart-form__cart-item cart_item"]').should('have.length', number)
    }

    proceedToCheckout(){
        cy.get('.checkout-button').click()
    }

    saveTotalPrice() {
        cy.get('[class="order-total"]').find('bdi').invoke('text').then( totalAmountText=> {
            cy.wrap(totalAmountText.replace(/[^0-9.]/g, '')).as('totalPrice')
        })
    }
}

export const onCartPage = new cartPage
        