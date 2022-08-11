let readlineSync = require('readline-sync');
let creditCardNumber = readlineSync.question(`\nEnter your card number:  `);
let expiryMonth = readlineSync.question(`\nEnter card expiry month:  `);
let expiryYear = readlineSync.question(`\nEnter card expiry year:  `);
let cvcCode = readlineSync.question(`\nEnter card CVC Code:  `);
let cardObj = {
    "creditCardNumber": creditCardNumber,
    "expiryMonth": expiryMonth,
    "expiryYear": expiryYear,
    "cvcCode": cvcCode
}

const stripe = require('stripe')('sk_test_51LFrJxDFuopDtcibKS1UtQ7A2bF6QIzady9sCrbzOhaWzfkPUIF9jFXaBU6bwiv6qmTqrB7HvluJm11cnDGJGUGM00itW5gpWm');
let tokenid = 0;
let chargeid = 0;
const token = stripe.tokens.create({
    card: {
        number: creditCardNumber,
        exp_month: expiryMonth,
        exp_year: expiryYear,
        cvc: cvcCode,
    },
})
    .then(data => {
        tokenid = data.id;
        cardObj["Token ID"] = tokenid;
        const charge = stripe.charges.create({
            amount: 360,
            currency: 'usd',
            description: 'Example charge',
            source: tokenid,
            statement_descriptor: 'Custom descriptor',
        })
            .then(response => {
                chargeid = response.id
                cardObj["Charge ID"] = chargeid;
                console.log(`Payment Successful`)
                console.log(cardObj)
            });
    })





