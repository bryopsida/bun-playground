import { beforeEach, afterEach, expect, it, describe } from "bun:test";
import { fastify } from '.'


describe("index.ts", () => {
    let server: any
    beforeEach(async () => {
        server = fastify
        await server.listen()
    })
    afterEach(() => {
        server.close()
    })
    it("should say hello", async () => {
        const response = await fetch(
            'http://localhost:' + server.server.address().port
        )
        expect(response.status).toEqual(200)
        const body = await response.json()
        expect((body as any).message).toEqual('Hello World!')

    })
});