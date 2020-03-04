const request = require('supertest');
const app = require('../src/app');
const sequelize = require('../src/config/database');

describe.skip('...', () => {
    test('GET at /users should get all users', async () => {
        const res = request(app).get('/');

        expect(res.body).toEqual({})
    })
})