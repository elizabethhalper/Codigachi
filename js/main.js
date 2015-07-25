var app = angular.module('codeigatchi', []);

app.controller('sharedCtrl', ['$scope', sharedCtrl]);
function sharedCtrl(scope) {
  
}

app.directive('settings', [settings]);
function settings() {
  return {
    restrict: 'E',
    template: '<div>here\'s the settings</div>'
  };
}

app.directive('workShop', [workShop]);
function workShop() {
  return {
    restrict: 'E',
    template: '<div>this is where the workshop will go</div>'
  };
}

app.directive('codeView', [codeView]);
function codeView() {
  return {
    restrict: 'E',
    template: '<div>and here\'s where the code will be</div>'
  };
}