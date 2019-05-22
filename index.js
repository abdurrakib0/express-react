const express = require('express')

const app = express();


app.get( '/api/students', (Request, Response) => {
    const students = [
        {id: 1, name: 'rakib', subject: 'CSE'},
        {id: 2, name: 'sakib', subject: 'Finance'},
        {id: 3, name: 'rahim', subject: 'BBA'},
        {id: 4, name: 'raisul', subject: 'EEE'}
    ]
    Response.json(students);
}
)

const port = '5000';

app.listen(port)