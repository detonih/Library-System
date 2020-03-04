const { getAll } = require('./src/controllers/User.js');

describe('Testing getAll users', () => {
    it('Should get all the users in database', async () => {
        const users = await getAll();

        expect(users.body).toEqual('hello')
    });
});