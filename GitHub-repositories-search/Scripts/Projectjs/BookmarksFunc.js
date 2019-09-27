var bookmarks = angular.module('BookmarksModule', []);

bookmarks.controller('bookmarksFunc', ['$scope', '$http',
    function bookmarksFunc($scope, $http) {

        //get the items bookmarks list
        var init = function () {
          $http({
                method: "GET",
                url: "/Repositories/GetBookmarksList",
          }).then(function successCallback(response) {
              $scope.bookmarksList = response.data;
            }, function errorCallback(response) {
                    return;
            });
        };
        init();

    }]);
