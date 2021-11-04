 /// <reference types="cypress" />

 const Logouttextfile = 'Logout'
 const Roomtextfile = 'Room'


 function checktextofdashboardPage (cy){
    cy.head().should ('eq , Logouttextfile')
}

function checktextofdashboardPage (cy){
    cy.head().should ('eq , Roomtextfile')


}
 module.exports = {
    Logouttextfile ,
    Roomtextfile 

  }