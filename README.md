This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Twilio <Pay> with Stripe integration

This is a demo project that demonstrates how to use the Twilio `<Pay>` verb and Stripe to make a payment.

This project is centered around an online shop where customers will make payment via Twilio's `<Pay>` verb integrated with Stripe.

## Project set up

Clone this project and run `npm install`.

Before proceeding, you need to have a twilio account and stripe account set up. You can go to [this webpage](https://www.twilio.com/docs/voice/tutorials/how-capture-your-first-payment-using-pay) to view how to set up your stripe account and integrate it with Twilio's platform.

Once done, login to your twilio account, head to `Functions` and create the following 3 functions. You can find the code for the functions under `src/Functions`:

1. `Action.js` - this will be the final executed function in the process. Once the payment is done, `<Pay>` will return a status to tell if it succeeds in payment and we will respond accordingly to the user.

2. `TwimlPay.js` - this will be the function that returns the Twiml verb that contains `<Pay>`. Replace `action` parameter in `twiml.pay` with the url from `Action.js` (above).

3. `outboundCall.js` - this will be function that makes the outbound call from your Twilio number to your number. Replace the `url` parameter in `create` with the url from `TwimlPay.js` and the `from` parameter with your own twilio number (above).

Once done with your twilio functions, replace `outBoundUrl` under `src/constants.js` with the url from `outboundCall.js`.

## Available Scripts

In the project directory, you can run:

### `npm/yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Launches and runs the test coverage report.

### `npm/yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
