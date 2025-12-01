import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('classData', (req, res) => {
    res.sendFile('choooooooooooooos')
})

app.listen(3000)
