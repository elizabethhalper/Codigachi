var app = angular.module('codeigatchi', []);

app.controller('sharedCtrl', ['$scope', sharedCtrl]);
function sharedCtrl(scope) {
  
}

app.directive('settings', [settings]);
function settings() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {

    }
  };
}

app.directive('workShop', [workShop]);
function workShop() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      
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
