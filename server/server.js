const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config({path: "./config.env"});
const PORT = process.env.PORT || 3001
app.use(cors());
app.use(express.json());
app.use(require("./routes/routes"));

const dbo = require("./db/conn")

app.listen(PORT, () => {
    dbo.connectToServer(function (err){
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${PORT}`);
});