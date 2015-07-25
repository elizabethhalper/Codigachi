var app = angular.module('codeigatchi', []);

app.controller('sharedCtrl', ['$scope', sharedCtrl]);
function sharedCtrl(scope) {

}

app.directive('settings', [settings]);
function settings() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
        scope.name = "Lizzie";
    }
  };
}

app.directive('workShop', [workShop]);
function workShop() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      scope.robot = {
        currentState: '',
        currentPosition: [0, 0],
        color: 'red'
      };

      scope.robotStates = {
        'static': 'url',
        'dancing': function () {
          return 'other url/' + scope.robot.color + '/asdf';
        },
      };

      scope.robot.currentState = scope.robotStates['dancing']();

    }
  };
}

app.directive('codeView', [codeView]);
function codeView() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {

    }
  };
}
