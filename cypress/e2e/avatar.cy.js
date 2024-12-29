describe('Автотесты на покупку нового аватара для тренера', function () {

    it('e2e тест покупки нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
        cy.get('.header__container > .header__id').click();
        cy.get('[href="/shop"]').click();
        cy.get('.available > button').first().click({ force: true });
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1025');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('dinar yambaev');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
    })

})