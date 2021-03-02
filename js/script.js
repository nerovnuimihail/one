"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

//let a = prompt('Один из просмотренных фильмов', ''),
//    b = prompt('На сколько оцените его', ''),
//    c = prompt('Один из просмотренных фильмов', ''),
//    d = prompt('На сколько оцените его', '');

//console.log(personalMovieDB);


for (let i = 0; i < 3; i++ ) {
    const a = prompt('Один из просмотренных фильмов', ''),
          b = prompt('На сколько оцените его', '');
    personalMovieDB.movies[a] = b;
        }

if (personalMovieDB.count < 10) {
    console.log('Просмотренно мало фильмов!');
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);