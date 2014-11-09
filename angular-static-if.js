angular.module('angular-static-if', [])
    .directive('ngStaticIf', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            priority: 1000,
            terminal: true,
            compile: function () {
                return function ($scope, element, attrs) {
                    var content = element.contents();
                    var cachedValue = false;

                    $scope.$watch(attrs.ngStaticIf, function (value) {
                        value = Boolean(value);
                        if (value === cachedValue) {
                            return;
                        }

                        cachedValue = value;
                        element.empty();
                        if (value) {
                            element.append($compile(content)($scope));
                        }
                    });
                };
            }
        };
    }]);
