const request = require('supertest');
const app = require('../app');

describe('Test coffee lover API', () => {
    test('GET should return coffee lover message', async () => {
        const res = await request(app).get('/coffeeLover');

        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like coffee!');
    });
    test('GET /coffee should return correct object', async () => {
        const res = await request(app)
            .get('/coffee')
            .query({ coffeeName: 'Latte' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        });
    });
});
