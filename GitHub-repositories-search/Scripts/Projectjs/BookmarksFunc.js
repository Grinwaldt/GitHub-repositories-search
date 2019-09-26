var bookmarks = angular.module('BookmarksModule', []);

bookmarks.controller('bookmarksFunc', ['$scope', '$http',
    function bookmarksFunc($scope, $http) {

        //get the items bookmarks list
        var init = function () {
          $http({
                method: "GET",
                url: "/Repositories/GetBookmarksList",
            }).then(function successCallback(response) {
                $scope.repositoriesList = response.data;
                console.log("bookmarks list",$scope.repositoriesList);
            }, function errorCallback(response) {
                    console.log("error", response);
                    return;
            });
        };
        init();

        //updateing in server the bookmarks items in the list 
        $scope.updateRepository = function (repository) {
            var repositoryDetails = {
                id: repository.id,
                avatar: repository.owner.avatar_url,
                Name: repository.name
            }

            $http.post('/Repositories/UpdateRepositoriesList', {
                repository: repositoryDetails,
            });

        }

    }]);
