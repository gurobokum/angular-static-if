(function (undefined) {

var module = angular.module('angular-static-if', []);

module.directive('ngStaticIf', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        priority: 1000,
        terminal: true,
        compile: function (element, attrs) {
            return function ($scope, element, attrs) {
                var content = element.contents();
                var cachedValue = null
                $scope.$watch(attrs.ngStaticIf, function (value) {
                    value = !!value;
                    if (value === cachedValue)
                        return;

                    cachedValue = value;
                    if (!value) {
                        element.empty();
                        return;
                    }
                    var linkFn = $compile(content);
                    element.empty();
                    element.append(linkFn($scope));
                })
            }
        }
    }

}]);

})();
