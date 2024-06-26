/// server entry point
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// config api
app.use(cors());
app.use(express.json());
app.listen(port, () => console.log("Server is running on port 3001"));

// import routes
const welcomeMessage = require("./controllers/welcomeMessage");
const listProperties = require("./controllers/listProperties");
const listProperty = require("./controllers/listProperty");
const newProperty = require("./controllers/newProperty");

// Routes
app.get("/", welcomeMessage);
app.get("/properties", listProperties);
app.get('/properties/:id', listProperty)
app.post('/properties', newProperty)


/*==============================================================*/


