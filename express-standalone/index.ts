import express from 'express'
import * as url from 'url';


export const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})



if (import.meta.url.startsWith('file:')) {
    const modulePath = url.fileURLToPath(import.meta.url);
    if (process.argv[1] === modulePath) {
        app.listen(3000, () => {
            console.log(`Example app listening on port 3000`)
        })
    }
}
