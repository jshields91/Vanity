(function () {
    var app = angular.module('mainApp', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/Intro', {
                    templateUrl: 'intro.html'

                }).
                when('/WebDev', {
                    templateUrl: 'webdev.html'

                }).
                when('/SQL', {
                    templateUrl: 'sql.html'
                }).
                when('/Analyst', {
                    templateUrl: 'analyst.html'

                }).
                when('/Infrastructure', {
                    templateUrl: 'infrastructure.html'

                }).
                when('/', {
                    templateUrl: 'bio.html'

                }).
                otherwise({
                    redirectTo: '/'
                });
    }]);

    

    app.controller('TabController', function () {
        this.tab = 0;

        this.setTab = function (tab) {
            this.tab = tab;
        };

        this.isSet = function (tab) {
            return (this.tab === tab);
        };
    });

})();