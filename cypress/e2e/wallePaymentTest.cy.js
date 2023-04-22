const { onCartPage } = require("../support/pageObjects/cartPage")
const { onCheckoutPage } = require("../support/pageObjects/checkOutPage")
const { onMyAccountPage } = require("../support/pageObjects/myAccountPage")
const { onOrderReceivedConfirmationPage } = require("../support/pageObjects/orderReceivedConfirmationPage")
const { onOrdersPage } = require("../support/pageObjects/ordersSection")
const { onPaymentPage } = require("../support/pageObjects/paymentPage")
const { onProductProfilePage } = require("../support/pageObjects/productProfilePage")
const { onStartPage } = require("../support/pageObjects/startPageShoppingPage")

describe ('Test payment methods on woocommerce website', () => {
    
    it('should be able to order products from the cart', () => {
        cy.visitStartpage()
        onStartPage.closeBanner()
        onStartPage.addLaptopsItemToCart()
        onCartPage.clickContinueShopping()
        onStartPage.addPhonesItemToCart()
        onCartPage.clickContinueShopping()
        // Opens a specific product's profile and adds it to the cart
        onStartPage.viewProduct("Socks")
        onProductProfilePage.addSocksItemToCart()
        // Checks the possibility to change the amount of a specific product
        onCartPage.increaseQuantityOfSecondProduct()
        onCartPage.updateCart()
        // Checks the possibility to remove the 1st product from the cart 
        onCartPage.removeItemFromCart(0)
        // Asserts the number of distinct products in the cart 
        onCartPage.validateNumberOfProductsInCart(2)
        // Gets and saves the total price to check it on the further screens
        onCartPage.saveTotalPrice()
        onCartPage.proceedToCheckout()
        onCheckoutPage.fillInBillingDetailsForTestUser()
        onCheckoutPage.clickCreateAccount()
        onCheckoutPage.clickPlaceOrder()
        // Checks the error is shown in case the required checkbox is not checked by the user
        onCheckoutPage.validateErrorForRequiredFields()
        onCheckoutPage.confirmTermsAndConditions()
        // Asserts the total price has not changed
        onCheckoutPage.validateTotalPrice()
        onCheckoutPage.clickPlaceOrder()
        onPaymentPage.acceptPayment()
        onOrderReceivedConfirmationPage.validateOrderIsReceived()
        // Asserts the total price has not changed
        onOrderReceivedConfirmationPage.validateTotalPrice()
    })

    it('should be able decline payment and cancel the order', () => {
        cy.visitStartpage()
        onStartPage.closeBanner()
        onStartPage.addLaptopsItemToCart()
        onCartPage.proceedToCheckout()
        onCheckoutPage.fillInBillingDetailsForTestUser()
        onCheckoutPage.clickCreateAccount()
        onCheckoutPage.confirmTermsAndConditions()
        onCheckoutPage.clickPlaceOrder()
        onPaymentPage.declinePayment()
        onStartPage.navigateToMyAccounts()
        onMyAccountPage.navigateToOrder()
        onOrdersPage.cancelOrder()
        onMyAccountPage.validateOrderIsCancelled()
    })
})
