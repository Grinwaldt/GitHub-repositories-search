var searchBox = angular.module('SearchModule', []);

searchBox.controller('searchFunc', ['$scope', '$http',
    function searchFunc($scope, $http) {
        //get api for search
        $scope.getRepositoriesApi = function () {
            $http.get('https://api.github.com/search/repositories?q=' + $scope.textInput).then(function (res) {
                if (!res.data)
                    return;
                $scope.repositoriesList = res.data.items;
                console.log("all repositories",$scope.repositoriesList);
            });
        }
        //updateing in server the bookmarks items in the list 
        $scope.updateRepository = function (repository) {
          
            var repositoryDetails = {
                id: repository.id,
                avatar: repository.owner.avatar_url,
                Name: repository.name,
            }



            var post = $http({
                method: "POST",
                url: "/Repositories/UpdateRepositoriesList",
                dataType: 'json',
                data: { repository: repositoryDetails },
                headers: { "Content-Type": "application/json" }
            });

            post.success(function (data, status) {
                console.log('sucsess',data,status)
            });

            post.error(function (data, status) {
                console.log('error',data,status)
            });
        }

    }]);
