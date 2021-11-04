 /// <reference types="cypress" />

 // Elements

 const headIndexPage = " Login  "
 const usernameTextfield = ":nth-child(1) > input"
 const passwordTextfield = ":nth-child(2) > input"
 


 function checkheadOfIndexPage (cy){
     cy.head().should ('eq , headOfIndexPage')
 }

 function performValidLogin(cy, username,password){
     cy.get(usernameTextfield).type(username)
     cy.get (passwordTextfield).type (password)
 }

   module.exports = {
   checkheadOfIndexPage ,
   performValidLogin

 }