const request = require('supertest');
const app = require('../src/app');


describe('...', () => {

    test('GET at /users should get all users', async () => {
        const res = await request(app).get('/v1/users')
        
        expect(res.statusCode).toBe(200)
    });

    test('...', async () => {
        const res = await request(app).get('/v1/users')
        
        expect(res.body).toEqual({"data": [{"createdAt": "2020-03-04T12:08:03.837Z", "email": "henrique@gmail.com", "id": 1, "name": "Henrique", "updatedAt": "2020-03-04T12:08:03.837Z"}, {"createdAt": "2020-03-04T12:08:50.394Z", "email": "henrique@gmail.com", "id": 2, "name": "Henrique", "updatedAt": "2020-03-04T12:08:50.394Z"}, {"createdAt": "2020-03-04T15:39:21.600Z", "email": "henrique@gmail.com", "id": 3, "name": "jovem", "updatedAt": "2020-03-04T15:39:21.600Z"}, {"createdAt": "2020-03-04T17:14:49.891Z", "email": "henrique@gmail.com", "id": 4, "name": "oloco", "updatedAt": "2020-03-04T17:14:49.891Z"}, {"createdAt": "2020-03-04T17:18:41.600Z", "email": "henrique@gmail.com", "id": 5, "name": "joao", "updatedAt": "2020-03-04T17:18:41.600Z"}], "total": 5})
    })
})