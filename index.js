const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')



app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: '*'
}));

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});

app.get('/', (req, res) => {
    const age = '22'
    const bio = "I am a hardworking, articulate and ambitious individual, i am passionate about Web Development and i am excited to join the HNG Team."
    const slackUsername = "Faruq22"
    const backend = true

    res.send(`{"slackUsername": "${slackUsername}", "backend": ${backend}, "age": ${age}, "bio": "${bio}"}`)
})

app.listen(3000, () => {
    console.log('Listening on Port 3000')
})