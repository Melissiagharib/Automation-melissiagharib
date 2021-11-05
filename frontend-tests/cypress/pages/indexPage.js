/// <reference types="cypress" />

// Elements

const titleOfIndexPage = 'Login'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextfield = ':nth-child(2) > input'
const Button = '#app > div > form > div.field.action > button'



function checkTitleOfIndexPage(cy) {
    cy.contains('h2',titleOfIndexPage)
}
function performValidLogin(cy, username, password) {
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextfield).type(password)
    cy.get(Button).click()
}

 module.exports = {
    checkTitleOfIndexPage,
    performValidLogin

}