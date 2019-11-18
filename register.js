
export default class AuthPage{
    get firstName() {
        return cy.get('input[id="first-name"]')
    }
    get lastName() {
        return cy.get('input[id="last-name"]')
    }
    get email() {
        return cy.get('input[id="email"]')
    }
    get password() {
        return cy.get('input[id="password"]')
    }
    get passwordConfirmation() {
        return cy.get('input[id="password-confirmation"]')
    }

    /*get checkbox() {
        return cy.get('input[class="form-check-input"]')
    }*/

    get button() {
        return cy.get("button[type=submit]")
    }
    }
    export const authPage = new AuthPage()