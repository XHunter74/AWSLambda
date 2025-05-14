// test-local.js
require('ts-node/register')
const { handler } = require('./src/main');

const testData = {
    id: 127,
    amount: 75.63,
    currency: 'USD',
};

const fakeEvent = {
    body: JSON.stringify(testData),
    //   pathParameters: { id: 'abc' },
};

handler(fakeEvent, {})
    .then(res => {
        console.log('RESULT:', res);
    })
    .catch(err => {
        console.error(err);
    });
