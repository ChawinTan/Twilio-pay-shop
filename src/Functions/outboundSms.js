exports.handler = function(context, event, callback) {
  const accountSid = context.accountsid;
  const authToken = context.authtoken;
  const client = require("twilio")(accountSid, authToken);

  const response = new Twilio.Response();
  response.appendHeader("Access-Control-Allow-Origin", "*");
  response.appendHeader("Access-Control-Allow-Methods", "OPTIONS POST");
  response.appendHeader("Content-Type", "application/json");
  response.appendHeader("Access-Control-Allow-Headers", "Content-Type");

  client.messages
    .create({
      body: "Lots of new Stuff coming up!",
      from: "owlshop",
      to: event.number
    })
    .then(message => {
      console.log(message.sid);
      callback(null, { status: "sms-success" });
    });
};
