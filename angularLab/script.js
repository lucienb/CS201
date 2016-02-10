var app = angular.module('app', []);

app.controller('mainCtrl', mainCtrl);
app.directive('avatar', avatarDirective);

function mainCtrl ($scope) {
  $scope.users = [
    {
      name: 'That one TA',
      avatarUrl: 'jordan.jpg'
    },
    {
      name: 'That other TA',
      avatarUrl: 'nick.jpg'
    },

  ];
  $scope.addNew = function (user) {
    $scope.users.push({
      name: user.name,
      avatarUrl: user.url
    });
    user.name = '';
    user.url = '';
  };
  $scope.removeUser = function (user) {
    $scope.users = $scope.users.filter(function(val) {
      return val.name != user.name;
    });
  };
}

function avatarDirective () {
  return {
    scope: {
      user: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="avatar">' + 
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
      '</div>'
    ),
    link: link
  };
  
  function link (scope) {
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'default.png';
    }
  }

}