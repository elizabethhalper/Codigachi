var app = angular.module('codigachi', []);

app.controller('sharedCtrl', ['$scope', sharedCtrl]);
function sharedCtrl(scope) {

}

app.directive('settings', [settings]);
function settings() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
        scope.chosen =  {
          class: '',
          name: '',
          clothes: [dress, shorts, hat],
          size: [small, medium, large],
          color: [purple, blue, green],
          fnc: ''
        };
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
        color: 'red',
        // size: 'medium',
        // clothes: 'hat'
      };

      scope.robotStates = {
        'original': scope.compileUrl('still/{{color}}{{size}}'),
        'danceing': scope.compileUrl('dancing/{{color}}{{size}}'),
        'running': scope.compileUrl('running/{{color}}{{size}}'),
        'walking': scope.compileUrl('walking/{{color}}{{size}}'),
        'bouncing': scope.compileUrl('bouncing/{{color}}{{size}}')
      };

      scope.compileUrl = function(url) {
        return url.replace(/\{\{color\}\}/gi, scope.robot.color);
                  // .replace(/\{\{size\}\}/gi, scope.robot.size)
                  // .replace(/\{\{clothes\}\}/gi, scope.robot.clothes);
      };

      scope.robot.currentState = scope.robotStates['original'];


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
