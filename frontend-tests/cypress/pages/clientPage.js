/// <reference types="cypress" />

const viewbuttom = '.blocks > :nth-child(2) > .btn'

function shouldckeckonaclient(cy) {
    cy.get(viewbuttom).click()
}

module.exports = {
    shouldckeckonaclient
}

