jest.mock('../components/carQueryApi.js');
import CarQueryApi from '../components/carQueryApi';

describe('placeholder', () => {
    it('should work', () => {
        expect(1).toEqual(1);
    });
});

// describe('#getUser() using Promises', () => {
//     it('should load user data', () => {
//       return github.getUser('vnglst')
//       .then(data => {
//         expect(data).toBeDefined()
//         expect(data.entity.name).toEqual('Koen van Gilst')
//       })
//     })
//   })