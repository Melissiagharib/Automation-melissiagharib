/// <reference types="cypress" />

import * as indexfuncs from '../pages/indexPage'
import * as indexfuncs from '../pages/dashboardPage'


 describe('Test suite', function(){

    beforeEach(()=> {
        cy.visit('http://localhost:3000/login')
        indexfuncs.checkheadOfIndexPage(cy)
 
    })
    it ( 'Perform login', function() {
        indexfuncs.performValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c' ,)
        indexfuncs.checktextofdashboardPage(cy)
    })
})