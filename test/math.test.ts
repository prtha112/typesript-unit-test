import { Addition } from '../src/addition'

describe('math', () => {
    test('adds 1 + 2 to equal 3', () => {
        const add: Addition = new Addition(1,2)
        expect(add.sum()).toBe(3);
    });
    test('multiply 1 * 2 to equal 1', () => {
        const add: Addition = new Addition(1,2)
        expect(add.multi()).toBe(2);
    });
})