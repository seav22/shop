import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<a href="/ponti">A ponti le gusta donato</a>')
})

app.get('/ponti', (req, res) => {
    res.send('Estaba muy interesado en su coversacion!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})