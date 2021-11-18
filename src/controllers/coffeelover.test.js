const request = require('supertest');
const app = require('../app');

describe('Test coffee lover API', () => {
    test('GET should return coffee lover message', async () => {
        const res = await request(app).get('/coffeeLover');

        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like coffee!');
    });
});
