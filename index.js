import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// main home page
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// show cocktail
app.get("/cocktail", (req, res) => {
    axios.get('http:www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => {
        var cocktail = response.data.drinks[0];
        res.render("showCocktail.ejs", {cocktail:cocktail});
    })
    .catch(error => {
        console.error(error); 
        window.alert("Whoops! Try again!"); 
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
   });
