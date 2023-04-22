export class productProfilePage {
    addSocksItemToCart() {
        cy.get('[value="36"]').click()
   }
}

export const onProductProfilePage = new productProfilePage