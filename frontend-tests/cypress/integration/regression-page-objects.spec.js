/// <reference types="cypress" />

import * as indexfuncs from '../pages/indexPage'
import * as dashboardfuncs from '../pages/dashboardPage'
import * as roomfuncs from '../pages/roomPage'
import * as clientfuncs from '../pages/clientPage'
import * as targets from '../targets/targets'

   describe('Test suite', function(){

    

    beforeEach(()=> {
        cy.visit(targets.base_url)
        indexfuncs.checkTitleOfIndexPage(cy)

        indexfuncs.performValidLogin(cy, targets.username , targets.password)
        dashboardfuncs.checktextofdashboardPage(cy)
    
    })
      afterEach(()=> {
         dashboardfuncs.performLogout(cy)
    })  


    it ('Perform login', function() {
      //  indexfuncs.performValidLogin(cy, targets.username , targets.password)
        // dashboardfuncs.checktextofdashboardPage(cy)
    })

    it ('performValidbookaroom', function() {
        roomfuncs.performValidbookaroom(cy,'')
        // dashboardfuncs.checktextofdashboardPage(cy)
  })
 it ('shouldckeckonaclient', function() {
    clientfuncs.shouldckeckonaclient(cy, '')

 })
 })