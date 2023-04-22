export class ordersSection {
    cancelOrder() {
        cy.get('[class="woocommerce-button wp-element-button button cancel"]').click()
    }
}

export const onOrdersPage = new ordersSection
    
    