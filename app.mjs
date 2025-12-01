import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/api/classData', (req, res) => {
    res.sendFile(join())
})
app.listen(3000)