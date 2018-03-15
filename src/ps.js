const pubsub = require('@google-cloud/pubsub');
process.env.GOOGLE_APPLICATION_CREDENTIALS = './gcp-pubsub.json';

const pubsubClient = new pubsub();
const topic = 'homer';

function publish(data) {
    const dataBuffer = Buffer.from(data);
  
    pubsubClient
      .topic(topic)
      .publisher()
      .publish(dataBuffer)
      .then(results => {
        const messageId = results;
        console.log(`Message ${messageId} published.`);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  }

module.exports = publish;