const express = require ('express');
const app = express();

//path to do something
app.get('/', (req,res)=> {
    res.send("Hello world");
});

//Port to run application
app.listen(5000), () => {
    console.log("server is running on port 5000")
};

// I am writing this line of comment to send a pull request. 