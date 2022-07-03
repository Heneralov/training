"use strict";

const numberOfFilms = +prompt('How many films do you seen?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Which is the last film?', '');
const b = prompt('Take your grade', '');
const c = prompt('Which is the last film?', '');
const d = prompt('Take your grade', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
