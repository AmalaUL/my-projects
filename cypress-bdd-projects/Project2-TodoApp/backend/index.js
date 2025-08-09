require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

let todos = [];
let users = [{ username: "admin", password: "admin123" }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) return res.status(200).json({ msg: "Login successful" });
    res.status(401).json({ msg: "Invalid credentials" });
});

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    const newTodo = { id: Date.now().toString(), title, description, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.title = title;
        todo.description = description;
        res.json(todo);
    } else {
        res.status(404).json({ msg: "Todo not found" });
    }
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const existingTodo = todos.find(t => t.id === id);
    if (!existingTodo) {
        return res.status(404).json({ msg: "Todo not found" });
    }

    todos = todos.filter(t => t.id !== id);
    return res.status(204).send();
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));