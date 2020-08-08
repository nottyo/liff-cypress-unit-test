import { mount } from 'cypress-vue-unit-test';
import liff from '@line/liff';
import Profile from '../../src/components/Profile.vue';

describe('Profile', () => {
  beforeEach(() => {
    Cypress.sinon.replace(liff, 'ready', Promise.resolve());
  });

  it('render displayName when logged-in', () => {
    const profile = {
      displayName: 'Test User',
      pictureUrl: 'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2',
    };
    cy.stub(liff, 'isLoggedIn').as('stubIsLoggedIn').returns(true);
    cy.stub(liff, 'getProfile').as('stubGetProfile').resolves(profile);
    mount(Profile).then(() => {
      // access everything in vue instance
      expect(Cypress.vue.$data.pictureUrl).to.equal(profile.pictureUrl);
      expect(Cypress.vue.$data.displayName).to.equal(profile.displayName);
    });
    cy.get('[data-testid="pictureUrl"]').should('have.attr', 'src', profile.pictureUrl);
    cy.get('[data-testid="name"]').should('have.text', `Name: ${profile.displayName}`);
  });
});
