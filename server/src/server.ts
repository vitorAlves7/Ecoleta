import express, { request } from 'express';

const app = express();

app.use(express.json());

// Lista de usuários
const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel',
]

app.get('/users', (request,response) =>{

    const search = String(request.query.search);
    console.log(search);

    const filteredUsers = search ?  users.filter(user => user.includes(search)) : users;
    return response.json(filteredUsers);
});

app.get('/users/:id',(request,response) =>{
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users',(request,response) =>{
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    };
    return response.json(user);
});

app.listen(3333);