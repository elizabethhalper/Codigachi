var app = angular.module('codigachi', []);

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
        original: 'static-img-url-{{color}}.png',
        dancing: 'dancing-img-url-{{color}}.gif'
      };

      scope.compileUrl = function (url) {
        return url.replace(/\{\{color\}\}/g, scope.robot.color);
      };

      scope.robot.currentState = scope.compileUrl(scope.robotStates['dancing']);


      scope.engineer = {
        currentState: 'a url to the image for the engineer!!',
        currentPosition: [0, 0]
      };

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
