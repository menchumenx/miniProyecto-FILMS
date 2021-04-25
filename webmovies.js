
// ------- CLASES

class Professional {
        constructor( name, age, genre, weigth, height, hairColor, eyeColor, race, isRetired, nationally, oscarsNumbers, profession){
            this.name = name;
            this.age = age;
            this.genre = genre;
            this. weigth = weigth;
            this.height = height;
            this.hairColor = hairColor;
            this.eyeColor = eyeColor;
            this.race = race;
            this.isRetired = isRetired;
            this.nationally = nationally;
            this.oscarsNumbers = oscarsNumbers;
            this.profession = profession;
        }
}   
class Movie{
    constructor( title, releaseYear, nationality, genre){
        this.title=title;
        this.releaseYear=releaseYear;
        this.nationality = nationality;
        this.genre=genre;
        // this.foto=foto
    }
}
class Imdb{
    constructor(peliculas){
        this.peliculas=peliculas;
    }
}

//  ----->> OBJETOS DE CLASES <<------

 // Pelicula 1 -------------------------- EL SILENCIO DE LOS CORDEROS
     //actores 
     let ac_1  = new Professional("Jodie Foster", 58, "femenino", 54, 160, "Castaño", "azul", "caucasica", false, "USA", 0, "actriz");
     let ac_2  = new Professional("Anthony Hopkinsr", 83, "masculino", 76, 177, "castaño", "azul", "caucasica", false, "UK", 1, "actor");
     let ac_3  = new Professional("Ted Levine", 63, "masculino", 87, 180, "castaño", "azul", "caucasica", false, "USA", 0, "actor");
     //director
     let dr_1  = new Professional("Jonathan Demme", 73, "masculino", 90, 170, "castaño", "marron", "caucasica", false, "USA", 0, "director");
     //escritor
     let wr_1  = new Professional("Thomas Harris", 80, "masculino", 93, 177, "castaño", "marron", "caucasica", true, "USA", 0, "writer");

 let movie1= new Movie ("El silencio de los Corderos", 1991, "Estadounidense", "Terror");
 movie1.language = "inglés";
 movie1.platform = "Netflix";
 movie1.mainCharacterName = "Hannibal";
 movie1.isMCU = false;
 movie1.distributor = "Metro Golding Mayer";
 movie1.producer = "Metro Golding Mayer";
 movie1.actors = [ac_1, ac_2, ac_3];
 movie1.director = dr_1;
 movie1.writer = wr_1;
 movie1.foto = "https://pics.filmaffinity.com/El_silencio_de_los_corderos-709332889-large.jpg"

 //Pelicula 2 ---------------------------- MOULING ROUGE
     //actores
     let ac_4  = new Professional("Nicole kidman", 53, "femenino", 69, 180, "pelirrojo", "azul", "caucasica", false, "USA", 0, "actriz");
     let ac_5  = new Professional("Ewan McGregor", 49, "masculino", 76, 177, "castaño", "azul", "caucasica", false, "UK", 0, "actor");
     let ac_6  = new Professional("Jim Broadbent", 71, "masculino", 90, 189, "castaño", "azul", "caucasica", false, "UK", 0, "actor");
     //director
     let dr_2  = new Professional("Baz Luhrmann", 58, "masculino", 90, 170, "castaño", "marron", "caucasica", false, "Australia", 0, "director");
     //escritor
     let wr_2  = new Professional("Craig pearce", 68, "masculino", 93, 177, "castaño", "marron", "caucasica", true, "USA", 0, "writer");

 let movie2 = new Movie ("Mouling Rouge", 2001, "Estadounidense", "Musical");
 movie2.language = "inglés";
 movie2.platform = "Netflix";
 movie2.mainCharacterName = "Satine";
 movie2.isMCU = false;
 movie2.distributor = "Metro Golding Mayer";
 movie2.producer = "Metro Golding Mayer";
 movie2.actors = [ac_4, ac_5, ac_6];
 movie2.director = dr_2;
 movie2.writer = wr_2;

 //Pelicula  3 ---------------------------- IRON MAN 1
     //actores
     let ac_7  = new Professional("Robert Downet Jr", 55, "masculino", 73, 174, "castaño", "marron", "caucasica", false, "USA", 0, "actroz");
     let ac_8  = new Professional("Gwyneth Paltrow", 48, "femenino", 65, 175, "rubio", "azul", "caucasica", false, "USA", 0, "actriz");
     let ac_9  = new Professional("Don Cheadle", 56, "masculino", 72, 172, "negro", "negro", "afroamericana", false, "USA", 0, "actor");
     //director
     let dr_3  = new Professional("Jon Favreau", 54, "masculino", 100, 185, "castaño", "marron", "caucasica", false, "Australia", 0, "director");
     //escritor
     let wr_3  = new Professional("Stan Lee", 95, "masculino", 93, 177, "castaño", "marron", "caucasica", true, "USA", 0, "writer");

 let movie3 = new Movie ("Iron Man", 2008, "Estadounidense", "accion/Sci-Fi");
 movie3.language = "inglés";
 movie3.platform = "Netflix";
 movie3.mainCharacterName = "Tony Strak";
 movie3.isMCU = true;
 movie3.distributor = "Metro Golding Mayer";
 movie3.producer = "Metro Golding Mayer";
 movie3.actors = [ac_7, ac_8, ac_9];
 movie3.director = dr_3;
 movie3.writer = wr_3;

let peliculas = [movie1,movie2, movie3]

let imdb1 = new Imdb (peliculas);

// ---------------- funciones de clases
let movie = "";
function mostrarPeliculas(){

    for(let i = 0; i<peliculas.length; i++){
        movie += `<div id="cardPelicula" class="card" style="width: 18rem;">
        <img src = $(peliculas[i].foto) class="card-img-top" alt="...">
        <div class="card-body">
          <h5 style="color: aliceblue;" class="card-title">peliculas[i].title</h5>
          <p style="color: rgb(175, 178, 180);" class="card-text">peliculas[i].director </p>
          <p style="color: rgb(175, 178, 180);" class="card-text">peliculas[i].genre </p>
          <p style="color: rgb(175, 178, 180);" class="card-text">peliculas[i].releaseYear </p>
          <p style="color: rgb(175, 178, 180);" class="card-text">peliculas[i].nationality </p>

          <a href="#" class="btn btn-primary">Mas info</a>
        </div>
        </div>`
    }
    $("#mostrarPeliculas").append(movie)
    // $("#mostrarPeliculas").show(movie)
}

// function mostrarPeliculas(){
//     let peliculas=""
//     for (let i=0; i<this.peliculas.length; i++)
//         {
//             peliculas+=this.peliculas[i];
//         }  
//     $("#mostrarPeliculas").show(peliculas)
// }


function crearPelicula(){
    //creamos variables que guarden los datos recojido en cada input del form 
    let title = document.getElementById("titulo").value
    let releaseYear = document.getElementById("releaseYear").value
    let nationality = document.getElementById("nationality").value
    let genre = document.getElementById("genre").value
    let director = document.getElementById("director").value
    let foto = document.getElementById("foto").value
    
    // let title = $("#titulo").value()
    // let releaseYear = $("#releaseYear").value()
    // let nationality = $("#nationality").value()
    // let genre = $("#genre").value()
    // let director = $("#director").value()
    // let foto = $("#foto").value()

    //creamos la variable objeto Movie que guarda estos datos y le añadimos a traves de us atributos el director y la foto
    let peliculaUser = new Movie(title, releaseYear, nationality, genre);
    peliculaUser.director = director;
    peliculaUser.foto = foto;

    //console log para ver si se guarda caorrectamente
    console.log(peliculaUser)
    console.log(peliculas)
    //añadimos al objeto array de peliculas la pelicula creada por el usuario.
    peliculas.push(peliculaUser);
}

