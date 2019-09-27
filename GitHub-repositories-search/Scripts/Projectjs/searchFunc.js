var searchBox = angular.module('SearchModule', []);

searchBox.controller('searchFunc', ['$scope', '$http',
    function searchFunc($scope, $http) {

        //get repositories from GitHub api by the search input text.
        $scope.searchRepositories = function () {
            $http.get('https://api.github.com/search/repositories?q=' + $scope.textInput).then(function (res) {
                if (!res.data)
                    return;
                $scope.repositoriesList = res.data.items;
            });
        }
        //send bookmark item to update the seesion list. 
        $scope.bookmarkRepository = function (repository) {
          
            var repositoryDetails = {
                id: repository.id,
                avatar: repository.owner.avatar_url,
                Name: repository.name,
            }

            var post = $http({
                method: "POST",
                url: "/Repositories/UpdateBookmarksList",
                dataType: 'json',
                data: { repository: repositoryDetails },
                headers: { "Content-Type": "application/json" }
            });
        }

    }]);
