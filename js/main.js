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
          clothes:'',
          size: '',
          color: '',
          fnc: ''
        };
    }
  };
}

app.directive('workShop', [workShop]);

<<<<<<< HEAD
=======
function getImgUrl

>>>>>>> 5aeac2f4f996c9842d6b350dd64bd24c9f8fcca9
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
<<<<<<< HEAD
        original: 'static-img-url-{{color}}.png',
        dancing: 'dancing-img-url-{{color}}.gif'
      };

      scope.compileUrl = function (url) {
        return url.replace(/\{\{color\}\}/g, scope.robot.color);
=======
        'original': scope.compileUrl('still/{{color}}{{size}}'),
        'danceing': scope.compileUrl('dancing/{{color}}{{size}}'),
        'running': scope.compileUrl('running/{{color}}{{size}}'),
        'walking': scope.compileUrl('walking/{{color}}{{size}}'),
        'bouncing': scope.compileUrl('bouncing/{{color}}{{size}}')
>>>>>>> 5aeac2f4f996c9842d6b350dd64bd24c9f8fcca9
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

  app.service()
}
