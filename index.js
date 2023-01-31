const express = require('express');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

let book = [
    {
    id: '1',
    title: 'The Jungle Book',
    author: 'Rudyard Kipling',
    publication: 'Macillan',
    release_year: '1894',   
    },
    {
    id : '2',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    publication: 'Bantam Dell Publishing Group',
    release_year: '1988',
    },
];

app.get("/book", (req ,res) => {
    res.json(book)
});

app.post("/book", (req,res) => {
    const book = req.body;
    console.log(book);
    book.push(book);
    res.send("Book is added to the list.")
});

app.get('/book', (req,res) => {
    const id = req.params.id
    for (let book of book) {
        if(movie.id === id) {
            res.json(book)
            return
        }
    }
    res.status(404).send('Book not found')
});

app.delete('/book/:id', (req,res) => {
    const id = req.params.id

    movies = movies.filter(movie => {
        if(movie.id !== id) {
            return true
        }
        return false
    })

    res.send("Book is deleted.")
})

app.listen(port, () => console.log(`server listening at port ${port}`));

