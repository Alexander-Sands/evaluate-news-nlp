import { checkForName } from "./../js/nameChecker"

describe('Test check name', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkForName("alex")).toBe(console.log("::: Running checkForName ::: alex"));
    })
})