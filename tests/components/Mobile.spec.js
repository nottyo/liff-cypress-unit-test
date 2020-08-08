import liff from '@line/liff';
import { mount } from 'cypress-vue-unit-test';
import Mobile from '../../src/components/Mobile.vue';

describe('Mobile', () => {
  it('emulates running app in LINE App', () => {
    const ios = 'ios';
    cy.stub(liff, 'isInClient').as('isInLineApp').returns(true);
    cy.stub(liff, 'getOS').as('os').returns(ios);
    cy.viewport('iphone-xr');
    mount(Mobile).then(() => {
      expect(Cypress.vue.$data.isInClient).to.equal(true);
      expect(Cypress.vue.$data.os).to.be.equal(ios);
    });
  });
});
