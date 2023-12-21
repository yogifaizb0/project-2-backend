const { generateToken, verifyToken } = require('../../helpers/jwt')

describe('jwt', () => {
    let token
    const payload = {
        id: 1,
        email: 'doe@gmail.com'
    }
    beforeAll(() => {
        token = generateToken(payload)
    })

    describe('generateToken', () => {
        describe('positive case', () => {
            test('generateToken should return string', () => {
                expect(typeof token).toBe('string')
                expect(token).not.toBe(payload)
            })
        })
        describe('negative case', () => {
            test('invalid input empty params should throw error', () => {
                expect(() => generateToken()).toThrow(Error)
            })
        })
    })
    describe('verifyToken', () => {
        describe('positive case', () => {
            test('verifyToken should return payload', () => {
                const result = verifyToken(token)
                expect(result).toHaveProperty('id')
                expect(result).toHaveProperty('email')
                expect(result.id).toBe(payload.id)
            })
        })
        describe('negative case', () => {
            test('invalid input should throw error', () => {
                expect(() => verifyToken()).toThrow(Error)
            })
        })
    })
})