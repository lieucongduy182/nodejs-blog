const express = require('express')
const app = express()
const port = 3000

// router
app.get('/app', (req, res) => {
    let a = 1;
    let b = 2;
    let c = a + b;
    return res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})