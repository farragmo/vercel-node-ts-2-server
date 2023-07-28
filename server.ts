import express, { Request, Response } from 'express'


const app = express()
const port = 5000

app.get('/', (req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel')
})


app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
})
