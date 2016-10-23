angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['Sterling', 'Miwa', 'Max'];
  $scope.addFriend = function (name){
    $scope.friends.push(name);
  };
});
