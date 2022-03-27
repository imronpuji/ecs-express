const express = require('express')

const app = express()

app.get('/users', (req, res) => {
	const user = [
		{
			name:'muhamad imron'
		},
		{
			name:'muhamad imron'
		},
		{
			name:'muhamad imron'
		},
		{
			name:'muhamad imron'
		},
		{
			name:'muhamad imron'
		},

	]
	res.json(user)
})
const port = 5000
app.listen(port, () => console.log('running'))