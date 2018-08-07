This project is an example of a payment page integrated with Stripe.

<img src="img.png" width=300>

#### Stack

- NodeJS + Express for the server. Aditionally, it includes <a href="https://github.com/helmetjs/helmet">HelmetJS</a> to provide some basic security configurations to the server.
- Webpack to transpile and bundle the code.
- ReactJS as the main JS framework. I have decided to use this framework instead of others like Angular or Vue.js because Stripe has released <a href="https://stripe.com/docs/recipes/elements-react">a series of component wrappers for they API around ReactJS</a>. These wrappers make it really fast to develop your own payment page and they save you from a lot of headaches.
- Eslint with the <a href="https://github.com/airbnb/javascript">base configuration of Airbnb</a> for the code linting.
- <a href="https://ant.design/">Antd Design</a> as a supplementary UI kit.
- SASS for the styles.


#### Features

This page offers three different ways of payments:
- "Only once" payment without store the user's data.
- "Only once" payment creating a client profile and storing his data.
- Monthly subscription storing the user's data.

#### How to use

- `git clone git@github.com:JoseHervas/payment-page.git`
- `cd payment-page`
- `npm install`
- `npm start`

<strong>REMEMBER</strong>: all the Stripe keys provided on this project are for TESTING purposes. Because of that, if you run this project without changing the API keys, you will have to complete the payment form with <a href="https://stripe.com/docs/testing">one of the testing Card numbers provided by Stripe</a>.

Here are some example of test card numbers:

4242424242424242	Visa<br>
5555555555554444	Mastercard<br>
378282246310005	American Express

If you try to run this project with any other card number, it will not work untill you change the API keys.

#### Improvements

- `prop-types` is always a good to go. It is imported as a dependency on the project, but I haven't included it yet.
- Unit testing with Jest or Enzyma.
- At the beggining of the project I thought about using MongoDB to store the transations, but later I found that they are already being stored on Stripe, so I thought it may not be so necessary for a PoC like this. However, for a final product it would be nice to store this data on the app itself.
