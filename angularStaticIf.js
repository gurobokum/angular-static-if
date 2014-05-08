(function (undefined) {

var module = angular.module('angular-static-if', []);

module.directive('staticIf', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        priority: 1000,
        terminal: true,
        compile: function (element, attrs) {
            return function ($scope, iElement, iAttrs) {
                $scope.$watch(attrs.staticIf, function (value) {
                    if (!value) {
                        iElement.remove();
                        return;
                    }
                    var linkFn = $compile(iElement.contents());
                    iElement.empty();
                    iElement.append(linkFn($scope));
                })
            }
        }
    }

}]);

})();
