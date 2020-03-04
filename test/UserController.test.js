const { getAll } = require('../src/controllers/User');

describe('Testing getAll users', () => {
    test('Should get all the users in database', async () => {
        const users = await getAll();

        expect(users.body).toEqual('hello')
    });
});