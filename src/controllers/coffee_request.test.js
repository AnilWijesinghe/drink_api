const request = require('supertest');
const app = require('../app');
describe('Test coffee API endpoint request', () => {
    test('GET /coffee_request should return correct message', async () => {
        const res = await request(app).get('/coffee_request');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like coffee, Cappuccino!');
    });
    test('GET /coffee with different param should return correct object',
        async () => {
            const res = await request(app)
                .get('/coffee')
                .query({ coffeeName: 'Cappuccino' });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({
                drinkType: 'Coffee',
                name: 'Cappuccino',
            });
        });
});
