export class startPage {
    closeBanner() {
        cy.get('[class="woocommerce-store-notice__dismiss-link"]').click()
    }

    addLaptopsItemToCart() {
        cy.get('[data-product_id="37"]').click()
    }

    addPhonesItemToCart() {
        cy.get('[data-product_id="38"]').click()
    }

    viewProduct(name) {
        cy.contains(name).click()
    }

    navigateToMyAccounts(){
        cy.contains('My account').click()
    }
}

export const onStartPage = new startPage