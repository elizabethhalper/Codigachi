var app = angular.module('codigachi', []);

app.factory('settingsSrv', function() {
  var settings = {};

  return {
    set: function (options) {
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
        selectedClass: { id: 0, name: 'Humanoid'},
        classes: [
          { id: 0, name: 'Humanoid'},
          { id: 1, name: 'Puppy-bot'},
          { id: 2, name: 'Penguin-bot'}
        ],
        name: '',
        clothes: ['dress', 'shorts', 'hat'],
        size: ['small', 'medium', 'large'],
        color: ['purple', 'blue', 'green'],
        fnc: {id: 0, name: 'Dance'}
      };

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
        color: 'blue'
      };

      scope.compileUrl = function(url) {
        return url.replace(/\{\{color\}\}/gi, scope.robot.color);
      };

      scope.robotStates = {
        'original': scope.compileUrl('images/static-url-{{color}}.gif'),
        'dancing': scope.compileUrl('images/dancing-url-{{color}}.gif')
      };

      scope.robot.currentState = scope.robotStates['original'];

      scope.engineer = {
        currentState: 'images/static-eng.gif',
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
