angular.module('myApp').controller('SeriesController', function ($scope, Series) {
    Series.query(function (data) {
        $scope.movies = data.results;
    });
});
