import { Employee } from '../src/employee'

describe('employee', () => {
    test('add', () => {
        let emp: Employee = new Employee('Tha')
        expect(emp.showEmployee()).toStrictEqual(['Tha'])
    })
})