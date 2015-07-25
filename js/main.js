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

function getImgUrl

function workShop() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {

      scope.compileUrl = function(url) {
        return url.replace(/\{\{color\}\}/gi, scope.robot.color)
                  .replace(/\{\{size\}\}/gi, scope.robot.size)
                  .replace(/\{\{clothes\}\}/gi, scope.robot.clothes);
      };

      scope.robot = {
        currentState: '',
        currentPosition: [0, 0],
        color: 'red',
        size: 'medium',
        clothes: 'hat'
      };

      scope.robotStates = {
        'original': scope.compileUrl('still/{{color}}{{size}}'),
        'danceing': scope.compileUrl('dancing/{{color}}{{size}}'),
        'running': scope.compileUrl('running/{{color}}{{size}}'),
        'walking': scope.compileUrl('walking/{{color}}{{size}}'),
        'bouncing': scope.compileUrl('bouncing/{{color}}{{size}}')
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
