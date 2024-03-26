const express =  require("express"); 
const products = require('./db/products');
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

app.get("/" , (req, res)=>{
    res.send("hello from the server")
})

app.get('/api/products' , (req,res) =>{
    res.status(200).json(products);
})

app.listen(3000 , () =>{
    console.log("server is running")
});