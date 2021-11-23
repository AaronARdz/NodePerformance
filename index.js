process.env.UV_THREADPOOL_SIZE = 1;
const crypto = require('crypto');

// console.log(cluster.isMaster);

// Im a child, Im going to act like a server 
// and do nothing else
const express = require('express');
const app =  express();

app.get('/', (req, res) => {
	crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
			res.send('Hi there');
	});
});

app.get('/fast', (req, res) => {
	res.send('Fast request');
});

app.listen(3000);
