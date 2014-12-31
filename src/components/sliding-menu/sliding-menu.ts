/// <reference path="../../../../definitelytyped/angularjs/angular.d.ts" />
module ngShared
{
    export function slidingMenu() : ng.IDirective
    {
        var move = ( element: ng.IAugmentedJQuery, offset: number ) =>
        {
            var trans = "translateX(" + offset + "px)";

            element.css(
                {
                    "-moz-transform": trans,
                    "-ms-transform": trans,
                    "-o-transform": trans,
                    "-webkit-transform": trans,
                    "transform": trans
                });
        };

        return {
            link: ( scope:any, element, attrs ) =>
            {
                var menu = angular.element( element[0].querySelector( ".menu" ) );
                var content = angular.element( element[0].querySelector( ".content" ) );

                var offset = menu.outerWidth();

                if ( offset ) // has a menu to work with
                {
                    scope.$watch( "isOpen", ( n, o ) =>
                    {
                        console.log( n );
                        move( content, n ? offset : 0 );
                    });
                }
            },
            replace: true,
            restrict: "E",
            scope:
            {
                isOpen: "="
            },
            template: '<div class="slide-menu" ng-transclude ng-cloak></div>',
            transclude: true
        }
    }
    slidingMenu.$inject = [];
}