const User = require('../src/controllers/User.js');

describe('Testing getAll users', () => {
    test('Should get all the users in database', async () => {
        
        expect(await User.getAll()).toEqual('hello')
    });
});