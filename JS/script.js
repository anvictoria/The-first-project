const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из послдених просмотренных фильмов?', ''),
      b = prompt('Насколько баллов вы бы его оценили'),
      c = prompt('Один из послдених просмотренных фильмов?', ''),
      d = prompt('Насколько баллов вы бы его оценили');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);
