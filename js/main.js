var app = angular.module('codigachi', []);

app.factory('settingsSrv', function() {
  var settings = {};

  return {
    set: function (options) {
      console.log('yay!');
      settings = options;
    },
    get: function () {
      return settings;
    }
  };
});

app.controller('sharedCtrl', ['$scope', sharedCtrl]);
function sharedCtrl(scope) {

}

app.directive('settings', [settings]);
settings.$inject = [''];
function settings() {
  return {
    restrict: 'E',
    controller: ['$scope', 'settingsSrv', function(scope, settingsSrv) {
      scope.chosen =  {
        cls: '',
        name: '',
        clothes: ['dress', 'shorts', 'hat'],
        size: ['small', 'medium', 'large'],
        color: ['purple', 'blue', 'green'],
        fnc: ''
      };

      console.log(settingsSrv);

      scope.$watch('chosen', function(newVal, oldVal) {
        settingsSrv.set(newVal);
      }, true);
    }]
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
        color: 'grey'
      };

      scope.compileUrl = function(url) {
        return url.replace(/\{\{color\}\}/gi, scope.robot.color);
      };

      scope.robotStates = {
        'original': scope.compileUrl('static-url-{{color}}.png'),
        'dancing': scope.compileUrl('dancing-url-{{color}}.gif')
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
