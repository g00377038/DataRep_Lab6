const express = require('express')
const app = express()

const port = 4000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//when URL ends with "/"
app.get('/', (req, res) => {
  res.send('Welcome to Data Representaion and Querying!')
})

//when URL ends with "/whatever"
app.get('/whatever', (req, res) =>{
    res.send('Hello from whatever!')
})

//when URL ends with "/hello/"
app.get('/hello/:name', (req, res) =>{
    res.send('Hello '+req.params.name)
})

//when URL ends with "/api/movies"
app.get('/api/movies', (req, res)=>{
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
        ];

    //send json response
    res.json({
        myMovies:movies,
        Message:'data sent!'
    })
})

//when URL ends with "/test"
app.get('/test', (req, res)=>{
    //send HTML file response
    res.sendFile(__dirname+'/index.html')
})

//when URL ends with "/name"
app.get('/name', (req, res)=>{
    //display name information entered into form (GET)
    res.send('Hello '+ req.query.firstName + ' ' + req.query.lastName)
})

//when URL ends with "/name"
app.post('/name', (req, res)=>{
    //display name information entered into form (POST)
    res.send('Hello ' + req.body.firstName + ' ' + req.body.lastName)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})