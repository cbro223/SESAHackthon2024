const fs = require("fs");
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

let oxygenValue = 0
// read the data.json file and store it in a variable
// Extract the oxygen value from the data 
// Make a get request that returns the oxygen value 
app.get("/oxygen", (req, res) => {
    const data = fs.readFileSync("data.json", "utf8");
    res.send(data)
});

// Make a post request with a new oxygen value and update the file 
app.post("/oxygen/:value", (req, res) => {
    const newValue = parseInt(req.params.value);

    // Read the current data from the file
    const data = fs.readFileSync("data.json", "utf8");
    const jsonData = JSON.parse(data);

    // Update the oxygen value
    const updatedOxygenValue = jsonData.oxygen + newValue;
    const newData = { name: "Cory Brown", oxygen: updatedOxygenValue };

    // Write the updated data back to the file
    fs.writeFileSync("data.json", JSON.stringify(newData));
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})