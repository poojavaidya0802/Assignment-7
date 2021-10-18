var fMovies = ["Notebook", "Forest gump", "Martian", "Interstellar", "Inception"];
window.console.log(fMovies[0]);

var movies = new Array (5);
movies[0] = "Notebook";
movies[1] = "Forest gump";
movies[2] = "Martin";
movies[3] = "Interstellar";
movies[4] = "Inception";
window.console.log(movies[0]);


movies.splice(2, 0, "Gravity");
window.console.log(movies.length);


var movie1 = [];
var i;
for (i = 0; i < fMovies.length; i++)
{
    movie1.push(fMovies[i]);
}
delete movie1[0];
window.console.log(movie1);

var movie2 = ["Notebook", "Forest gump", "Martian", "Interstellar", "Inception", "Gravity", "Avengers"];
for (i = 0; i < movie2.length; i++) {
    window.console.log(movie2[i]);
}

for (i in movie2) {
    window.console.log(movie2[i]);
}


var sMovie = movie2.sort();
for (i in sMovie)
{
    window.console.log(sMovie[i]);
}


var leastFavMovies = ["Anabella", "IT", "Conjuring"];
var movie3 = ["Notebook", "Forest gump", "Martian", "Interstellar", "Inception", "Gravity", "Avengers"];
window.console.log("\nMovies I like\n\n");
for (i in movie3) {
    window.console.log(movie3[i]);
}
window.console.log("\nMovies I regret watching\n\n");
for (i in leastFavMovies) {
    window.console.log(leastFavMovies[i]);
}

var movie = movie3.concat(leastFavMovies);
var Rsortmovie = movie.sort().reverse();
window.console.log(Rsortmovie);

var last = movie.pop();
window.console.log(last);