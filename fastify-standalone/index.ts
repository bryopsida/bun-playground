import Fastify from 'fastify'
import * as url from 'url';

export const fastify = Fastify({
    logger: true
})

fastify.get('/', function (request, reply) {
    reply.send({ message: 'Hello World!' })
})


if (import.meta.url.startsWith('file:')) {
    const modulePath = url.fileURLToPath(import.meta.url);
    if (process.argv[1] === modulePath) {
        fastify.listen({ port: 3000, host: '0.0.0.0'})
    }
}
