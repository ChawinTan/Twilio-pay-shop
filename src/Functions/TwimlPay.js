exports.handler = function(context, event, callback) {
  console.log(event);
  let twiml = new Twilio.twiml.VoiceResponse();
  twiml.say(`Welcome to Twilio. You are about to pay ${event.amount} dollars.`);
  twiml.pay({
    chargeAmount: event.amount,
    action: "Action url - url to be excuted after payment status is received"
  });
  callback(null, twiml);
};
