angular.module('myApp').factory('Movie', function ($resource) {
    return $resource('https://api.themoviedb.org/3/movie/:movieId', {
        api_key: 'your_api_key_here',
        movieId: '@id'
    });
});
