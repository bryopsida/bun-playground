import request from 'supertest'
import { beforeEach, afterEach, expect, it, describe } from "bun:test";
import { app } from '.'


describe("index.ts", () => {
    let server: any
    beforeEach(() => {
        server = app.listen(3000)
    })
    afterEach(() => {
        server.close()
    })
    it("should say hello", (done) => {
        request(app, { http2: false })
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                expect(res.body.message).toEqual('Hello World!')
                done()
            });
    })
});