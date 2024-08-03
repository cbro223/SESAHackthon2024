const fs = require("fs");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// read the data.json file and store it in a variable
const data = fs.readFileSync("data.json", "utf8");
// Extract the oxygen value from the data 
const oxygen = JSON.parse(data).oxygen;
// Make a get request that returns the oxygen value 
app.get("/oxygen", (req, res) => {
    res.send("The oxygen value is " + oxygen);
});

// Make a post request with a new oxygen value and update the file 
app.post("/oxygen/:value", (req, res) => {
    const newValue = req.params.value;
    const newData = { oxygen: newValue };
    fs.writeFileSync("data.json", JSON.stringify(newData));
    res.send(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})