# Stripe Payment Using API

A console application to do the following:
1. Read in credit card details from the command line
2. Use the Stripe API to generate a Stripe token using the card details and prints the token ID
3. Use the Stripe API to charge the card $3.60 using the token and print the charge ID

Here is a sample console input and output:
```
Enter your card number: 4242 4242 4242 4242
Enter card expiry month: 5
Enter card expiry year: 2021
Enter card CVC code: 555
Created card token with id: tok_1Iig9SEsPOxnqHJKNf4smyjz
Created charge with id: ch_1Iig9TEIuOxnqKoKBq79bPx9
```

