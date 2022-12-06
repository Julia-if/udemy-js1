const numberOfFilms = +prompt("How many movies did you watch?","");
 const personalMovieDB ={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
 };
 const lastMovie = prompt('Last movie?','');
 const level =prompt('Level?','');
 const lastMovieL = prompt('Last movie?','');
 const levelL =prompt('Level?','');
 personalMovieDB.movies[lastMovie]=level;
 personalMovieDB.movies[lastMovieL]=levelL;
 console.log(personalMovieDB);
