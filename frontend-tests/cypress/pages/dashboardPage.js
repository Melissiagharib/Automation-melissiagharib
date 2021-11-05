 
/// <reference types="cypress" />

 const Logouttextfile = 'Logout'
 const Roomtextfile = 'Room'
 const logoutButton= '.user > .btn'

 function checktextofdashboardPage (cy){
   cy.contains('#app > header > div > div > button', Logouttextfile)
}

 function textofdashboardPage (cy){
    cy.head().should ('eq', Roomtextfile)
 

}
  function performLogout(cy){
      cy.get(logoutButton).click()
    //  cy.contains()
 
}
  module.exports = {
    checktextofdashboardPage ,
    textofdashboardPage,
    performLogout
   

  }