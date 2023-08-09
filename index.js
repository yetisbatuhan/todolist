import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
function date(){
    const currentDate = new Date();
    return  currentDate.toDateString();
}
let listArray = [];
let worksList = [];
function list(x){
    console.log(x)
      
    listArray.push(x)
    console.log(listArray)
}
function works(x){
    console.log(x)
      
    worksList.push(x)
    console.log(worksList)
}

app.post("/", (req, res) => {
    const requestURL = 1; 
    const newItems = req.body["fName"]
    list(newItems);
    
    
    res.render("index.ejs",{date: date(),requestURL: requestURL,fruits: listArray } );
});
app.get("/", (req, res) => {
    const requestURL = 1;    
    
    res.render("index.ejs", { date: date(), requestURL: requestURL ,fruits: listArray });
});
app.post("/works", (req, res) => {
    const requestURL = 2;  
    const newItems = req.body["lName"]
    works(newItems);
    
    
    res.render("index.ejs",{date: date(),requestURL: requestURL,fruits: worksList } );
});
app.get("/works", (req, res) => {
    const requestURL = 2;    
    
    res.render("index.ejs", { date: date(), requestURL: requestURL ,fruits: worksList });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  