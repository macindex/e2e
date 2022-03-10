import { createServer } from 'http'



async function handler(request, response){
    response.end('hello word')
}

export default createServer(handler)
