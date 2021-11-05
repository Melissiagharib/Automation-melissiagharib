/// <reference types="cypress" />

 const viewbuttom = ":nth-child(1) > .btn"

 function performValidbookaroom(cy){
     cy.get(viewbuttom).click()
 }

 module.exports = {
    performValidbookaroom
}