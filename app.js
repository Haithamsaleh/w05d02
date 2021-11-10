const express = require("express");
const fs = require("fs");
const app = express();
const port = 5000;
app.use(express.json());

// const movies = [
//   {
//     id: 1,
//     name: "Interstellar",
//     isFav: true,
//     isDel: false
//   },
//   {
//     id: 2,
//     name: "Gisaengchung",
//     isFav: false,
//     isDel: false
//   },
//   {
//     id: 3,
//     name: "Fight Club",
//     isFav: false,
//     isDel: true
//   },
// ];

app.get("/movies", (req, res) => {
        fs.readFile("./data.json", (err, data) => {

            const moviesnD= movies.filter((movies)=>movies.isDel===false);
        const movies = JSON.parse(data.toString());

    
        if(moviesnD) {
            res.status(200);
            res.json(moviesnD)
        }
    
        });
      });
      
      app.get("/moviesfav", (req, res) => {
        fs.readFile("./data.json", (err, data) => {


        const moviesfav= movies.filter((movies)=>movies.isFav===true);
        const movies = JSON.parse(data.toString());

        if(moviesfav) {
            res.status(200);
            res.json(moviesfav)
        }
        });
      });  




//  app.get("/movies", (req, res) => {
   
//     const  name  = req.query.name;
//     const found = movies.find((movie) =>   movie.name == name; )
//       res.status(200).json(movie)
    
//  });
//       if (found) {
//     res.status(200);
//     res.json(found);
//   } else {
//     res.status(404);
//     res.json(" movie not found 404");
//   }

app.get("/movie/:id", (req, res) => {
    fs.readFile("./data.json", (err, data) => {

  const { id } = req.params;
  const movies = JSON.parse(data.toString());

  const found = movies.find((elem) => {
    return elem.id == id;
  });
  });
  // quere
  // app.get("/movies", (req, res) => {
  //    fs.readFile("./data.json", (err, data) => {

  //   const  id  = req.query.id;
  //        const movies = JSON.parse(data.toString());

  //   const movie = movies.find((movie) =>    movie.id === numbre(id);
  //     res.status(200).json(movie)
  //   });
  //   });
  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404).json("id not found 404");
  }
});

app.post("/movies/create", (req,res) => {
    fs.readFile("./data.json", (err, data) => {
        const movies = JSON.parse(data.toString());

    let nMovie = JSON.parse(data.toString())
  const {id,name,isFav,isDel}= req.body
  movies.push({id,name,isFav,isDel})
  res.status(201).json(movies);
    });
});

app.put("/updata/:id", (req, res) => {
    fs.readFile("./data.json", (err, data) => {

    const movies = JSON.parse(data.toString());

  const {id,name,isFav,isDel } = req.body;
  movies.push(movies);
  res.json("updataed");
    });
});

 app.delete('/movies/del/:id', (req, res) => {
    fs.readFile("./data.json", (err, data) => {
        const movies = JSON.parse(data.toString());

    const { id } = req.params;
  movies.splice(id-1,1 ,{id ,name:newMov[id-1].name,isfav: newMov[id-1].isfav,isDel:true})

  res.json(movies)
    });
});

app.listen(port, () => {
  console.log(`ser port ${port}`);
});
