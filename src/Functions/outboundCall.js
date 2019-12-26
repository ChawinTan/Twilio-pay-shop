exports.handler = function(context, event, callback) {
  console.log(event);
  const accountSid = context.accountsid;
  const authToken = context.authtoken;
  const client = require("twilio")(accountSid, authToken);

  const response = new Twilio.Response();
  response.appendHeader("Access-Control-Allow-Origin", "*");
  response.appendHeader("Access-Control-Allow-Methods", "OPTIONS POST");
  response.appendHeader("Content-Type", "application/json");
  response.appendHeader("Access-Control-Allow-Headers", "Content-Type");

  response.setBody({ call: "success" });

  client.calls
    .create({
      url: `Url to twilio pay?amount=${event.amount}`,
      to: event.number,
      from: "Your Twilio Number"
    })
    .then(call => {
      console.log(call.sid);
      callback(null, response);
    });
};
