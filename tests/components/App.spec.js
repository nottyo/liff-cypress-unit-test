import liff from '@line/liff';
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import { mount } from 'cypress-vue-unit-test';
import App from '../../src/App.vue';

describe('App', () => {
  before(() => {
    Vue.use(VueSweetalert2);
  });
  it('Initialize LIFF success', () => {
    cy.stub(liff, 'init').as('liffInitSuccess').resolves();
    mount(App, {
      stubs: ['router-link', 'router-view'],
    });
    cy.get('@liffInitSuccess')
      .should('be.calledWithExactly', { liffId: process.env.VUE_APP_LINE_LIFF_ID });
  });

  it('Display Error modal when LIFF init failed', () => {
    const errorMessage = 'LIFF Init Error!';
    cy.stub(liff, 'init').as('liffInitFailed').rejects(new Error(errorMessage));
    mount(App, {
      stubs: ['router-link', 'router-view'],
    });
    cy.get('[data-testid="errorTitle"]').should('have.text', 'LIFF init failed');
    cy.get('[data-testid="errorMsg"]').should('have.text', errorMessage);
  });
});
