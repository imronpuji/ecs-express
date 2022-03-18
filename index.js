const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.json('hello guys')
})
const port = 5000
app.listen(port, () => console.log('running'))