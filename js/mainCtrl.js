angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['Sterling', 'Miwa', 'Max'];
  $scope.addFriend = function (name){
    $scope.friends.push(name);
  };
  $scope.removeFriend = function (name){
    var target = $scope.friends.indexOf(name);
    $scope.friends.splice(target, 1);
  };
});
