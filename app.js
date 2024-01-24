const express = require ('express');
const app = express();

//path to do something
app.get('/', (req,res)=> {
    res.send("Hello world");
});

//Port to run application
app.listen(3300), () => {
    console.log("server is running on port 3300clear")
};
