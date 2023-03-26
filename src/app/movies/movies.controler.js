angular.module('myApp').controller('MoviesController', function ($scope, Movie) {
    Movie.query(function (data) {
        $scope.movies = data.results;
    });
});
