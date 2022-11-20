const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/download', (req, res) => {
    const file = path.resolve(__dirname, 'doc/测试文档.xlsx')
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition')
    res.attachment(file)
    res.sendFile(file)
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})