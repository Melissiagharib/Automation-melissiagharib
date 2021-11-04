  /// <reference types="cypress" />


describe('Regression test suite', function(){

    it ('perform valid login', function(){

        cy.visit ('http://localhost:3000/login')
        cy.contains ('Login')
        cy.get(":nth-child(1) > input").type ("tester01")
        cy.get(":nth-child(2) > input").type ("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")

      })
        it ('See the right information', function(){
        cy.get(".btn").click()
        cy.contains('Logout')
        cy.contains  ('Rooms')
      })
        it ('perform valid book a room', function(){
        
          cy.get(":nth-child(1) > .btn").click
          cy.get(":nth-child(3) > .btn").click
      })
        
        it('should ckeck on a client', function(){
          cy.get('.blocks > :nth-child(2) > .btn') .click()

        })
        it('create a client', function(){
          cy.get('h2 > .btn').click
  
      })  
    })    


