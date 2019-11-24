describe('JPacman Map Generator Tests', () => {
  it('visit the site', () => {
    cy.visit('dist/index.html')
    cy.contains('JPacman Map Generator')
  })
  it('have all cells', () => {
    for (let i = 0; i !== 21; i++) {
      for (let j = 0; j !== 23; j++) {
        cy.get(`div#${i}-${j}`)
      }
    }
    for (let i = 0; i != 5; i++) {
      cy.get('#' + i)
    }
  })
  it('paint the cells', () => {
    cy.get('#0').find('.selected-image')
    cy.get('#1').find('.notselected-image')
    cy.get('#1')
      .click()
      .find('.selected-image')
    cy.get('#0').find('.notselected-image')

    cy.get('#1-1').children('img[src^="img/sprites/wall.png"]')
    cy.get('#1-1').click()
    cy.get('#1-1').children('img[src^="img/sprites/floor.png"]')

    cy.get('#2')
      .click()
      .find('.selected-image')
    cy.get('#1').find('.notselected-image')
    cy.get('#2-2').click()
    cy.get('#2-2').children('img[src^="img/sprites/pellet.png"]')

    cy.get('#3')
      .click()
      .find('.selected-image')
    cy.get('#2').find('.notselected-image')
    cy.get('#3-3').click()
    cy.get('#3-3').children('img[src^="img/sprites/pacman.png"]')

    cy.get('#4')
      .click()
      .find('.selected-image')
    cy.get('#3').find('.notselected-image')
    cy.get('#4-4').click()
    cy.get('#4-4').children('img[src^="img/sprites/ghost.png"]')
  })
})
