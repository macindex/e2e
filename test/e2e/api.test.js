import { jest, expect, test, describe } from '@jest/globals'

import superTest from 'supertest'
import Server from '../../src/server.js' 
describe('API E2E Test Suite', () => {
    test('GET / - Should return an array', async () => {
        const response = await superTest(Server)
        .get('/')

        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
        //console.log('text', response.text)
    })
    
    test('POST / - Should save an item and return ok', async () => {
        const response = await superTest(Server)
        .post('/')
        .send({
            nome: 'macindex',
            age: 36 
        })
        const expectedResponse = ({ ok : 1})
        //const data = JSON.parse(response.text)
        expect(JSON.parse(response.text)).toStrictEqual(expectedResponse)
    })
    test.todo('DELETE / - Should delete all itens and return ok')
})

