const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')
const methodOverride = require('method-override');






// app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});


app.get('/', (req, res) => {
    const age = 22
    const bio = "I am a hardworking, articulate and ambitious individual, i am passionate about Web Development and i am excited to join the HNG Team."
    const slackUsername = "Faruq22"
    const backend = true

    res.send(`{"slackUsername": "${slackUsername}", "backend": ${backend}, "age": ${age}, "bio": "${bio}"}`)
})
   
    app.post("/", async (req, res) => {
        const details = {
          operation_type: req.body.operation_type,
          x: parseInt (req.body.x),
          y: parseInt(req.body.y),
        };
      
        data = details.operation_type;

        console.log(details.x)
        console.log(details.y)
        console.log(data)
        try {

          if (data == "addition") {
            result = details.x + details.y;
          } else if (data == "subtraction") {
            result = details.x - details.y;
          } else if (data == "multiplication") {
            result = details.x * details.y;
          } else if (data !== "addition" || "subtraction" || "multiplication") {
            result = null;
          }
      
          res.status(200).json({
            slackUsername: "Faruq22",
            result,
            operation_type: details.operation_type,
          });
        //   res.send(`{"slackUsername": "${"Faruq22"}", "result": ${result}, "operation_type: ${details.operation_type}}`)
        } catch (error) {
          console.log(error);
          res.status(404).json(error);
        }
      });
 



app.listen(3000, () => {
    console.log('Listening on Port 3000')
})

