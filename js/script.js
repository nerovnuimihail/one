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


let a, b, c, d;

for (let i = 0; i < 4; i++ ) {
    if (i == 0) {
        a = prompt('Один из просмотренных фильмов', '');
        while (a.length == 0 || a.length > 50) {
            a = prompt('Один из просмотренных фильмов', '');
        }
    } else if (i == 1) {
            b = prompt('На сколько оцените его', '');
            while (b.length == 0 || b.length > 50) {
                b = prompt('На сколько оцените его', '');
            }
        } else if (i == 2) {
                c = prompt('Один из просмотренных фильмов', '');
                while (c.length == 0 || c.length > 50) {
                    c = prompt('Один из просмотренных фильмов', ''); 
                }   
            } else if (i == 3) {
                    d = prompt('На сколько оцените его', '');
                    while (d.length == 0 || d.length > 50) {
                        d = prompt('На сколько оцените его', '');
                    }
                }
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

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);