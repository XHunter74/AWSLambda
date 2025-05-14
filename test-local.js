// test-local.js
require('ts-node/register')  
const { handler } = require('./src/main');

const fakeEvent = {
//   body: JSON.stringify({ foo: 123 }),
//   pathParameters: { id: 'abc' },
};

handler(fakeEvent, {})
  .then(res => {
    console.log('RESULT:', res);
  })
  .catch(err => {
    console.error(err);
  });
