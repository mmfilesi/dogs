describe('ViewDogs Test', () =>  {

  const selectDog = '[data-qa=selectDog]';
  const selectSpecie = '[data-qa=selectSpecie]';
  const submitDog = '[data-qa=submitSelectDog]';
  const dogsList = '[data-qa=dogsList]';

  beforeEach(function () {
    // reemplazar por cada vista. Por ejemplo: cy.visit('/foo');
    // en este caso se dejan vacías al ser la "home".
    // para cambiar la baseUrl, modificar cypress.json
    cy.visit('');
  });

  describe('Select toolbar', () => {

    it('No initial dogs are selected', () => {

      cy.get(selectDog).should('have.value', 'noDogSelected');
      cy.get(selectSpecie).should('have.value', 'noDogSelected');

    });

    it('Inputs are disabled until selection', () => {

      cy.get(selectSpecie).should('be.disabled');
      cy.get(submitDog).should('be.disabled');

      cy.get(selectDog).select('australian');

      cy.get(selectSpecie).should('be.enabled');
      cy.get(submitDog).should('be.enabled');

    });

  });


  describe('List dogs', () => {

    it('Dogs list should be fetch when click button', () => {

      cy.get(selectDog).select('australian');
      cy.get(submitDog).click();
      cy.get(dogsList);

    });

  });

});

