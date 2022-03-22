import { jest, expect, test, describe } from '@jest/globals'

import superTest from 'supertest'
import Server from '../../src/server.js' 
describe('API E2E Test Suite', () => {
    test('GET / - Should return an array', async () => {
        const response = await superTest(Server)
        .get('/')

        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        //console.log('text', response.text)
    })
    
    test.todo('POST / - Should save an item and return ok')
    test.todo('DELETE / - Should delete all itens and return ok')
})

