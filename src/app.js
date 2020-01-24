const express = require('express');

const app = express();

const data = {
	tasks: {
		'task-1': { id: 'task-1', content: 'Take out Garbage', favorite: false },
		'task-2': { id: 'task-2', content: 'Watch tv', favorite: true },
		'task-3': { id: 'task-3', content: 'Go out', favorite: true },
		'task-4': { id: 'task-4', content: 'Sleep', favorite: false },
	},
	lists: {
		'list-1': {
			id: 'list-1',
			title: 'Private',
			taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
		},
		'list-2': {
			id: 'list-2',
			title: 'Books',
			taskIds: []
		},
		'list-3': {
			id: 'list-3',
			title: 'shop List',
			taskIds: []
		}
	},
	listsOrder: ['list-1', 'list-2', 'list-3'],
};



// Add headers
app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.get('', (req,res) =>{
	res.send(data);
});


app.listen(5000, () => {
	console.log('Server is running on port 5000');
});

