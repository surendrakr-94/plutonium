

const express = require("express");
const router = express.Router();
const lodash = require("lodash");

// -------------------------- 8th aug assignment part 1-----------------------------//

const years = [  "January" ,"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"];
  
const result = lodash.chunk(years, [(size = 4)]);
console.log("lodash example is", result);
const odd = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const  result2 = lodash.tail(odd);
console.log("tail example is", result2);

const  arrays = [10, 20, 30];
const array2 = [40, 50, 60]; 
const array3 = [7, 8,16];
const array4 = [9, 10, 11];
const array5 = [12, 13, 14, 15];
 result3 = lodash.union(arrays, array2, array3, array4, array5);
console.log("union example is", result3);

let pairs = [
  ["horror", "The Shining"],
  ["drama", "Titanic"],
  ["thriller", "Shutter Island"],
  ["fantasy", "Pans Labyrinth"],
];
let result4 = lodash.fromPairs(pairs);
console.log("from paris example is", result4);

// --------------------------- assignment 8 aug part 2-----------------------------//

const  movie = [
  {
    id: 1,
    name: "The Shining",
  },
  {
    id: 2,
    name: "Incendies",
  },
  {
    id: 3,
    name: "Rang de Basanti",
  },
  {
    id: 4,
    name: "Finding Nemo",
  },
];
const  movie2 = [
  "Rang de basanti",
  "The shining",
  "Lord of the rings",
  "Batman begin",
];

// question - 1
router.get("/movies", function (req, res) {
  res.send(movie2);
});

// question - 2 and 3
router.get("/movies/:index", function (req, res) {
  let index = req.params.index;
  if (index > movie2.length - 1) {
    return res.send("plzz provide a valid index");
  }
  return res.send(movie2[index]);
});

// question - 4
router.get("/films", function (req, res) {
  res.send(movie);
});

// question - 5
router.get("/films/:filmId", function (req, res) {
  let filmid = req.params.filmId;
  for (let i = 0; i < movie.length; i++) {
    if (movie[i].id == filmid) {
      return res.send(movie[i]);
    }
  }
  return res.send(" No movie exists with this id");
});

module.exports = router;

