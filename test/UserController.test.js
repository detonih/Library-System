const { getAll, create } = require('../src/controllers/User.js');


    describe.skip('...', () => {
        test('Should get all the users in database', async () => {
            const res = await getAll();
            
            expect(res.body).toEqual('hello')
        });
    
        test('the get fails with an error', async () => {
            
            try {
              await getAll();
            } catch (e) {
              expect(e).toMatch('error');
            }
        });

    });

    