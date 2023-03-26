angular.module('myApp').factory('Series', function ($resource) {
    return $resource('https://api.themoviedb.org/3/series/:seriesId', {
        api_key: 'your_api_key_here',
        movieId: '@id'
    });
});
