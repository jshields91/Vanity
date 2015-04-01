(function () {
    var app = angular.module('mainApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('bio', {
                url: '/',
                templateUrl: 'Partials/bio.html'
            })
            .state('intro', {
                url: '/Intro',
                templateUrl: 'Partials/intro.html'                
            })
            .state('webdev', {
                url: '/WebDev',
                templateUrl: 'Partials/category.html',
                controller: 'CategoryController as CatCtrl'
            })
            .state('sql', {
                url: '/SQL',
                templateUrl: 'Partials/category.html',
                controller: 'CategoryController as CatCtrl'
            })
            .state('analyst', {
                url: '/Analyst',
                templateUrl: 'Partials/category.html',
                controller: 'CategoryController as CatCtrl'
            })
            .state('infrastructure', {
                url: '/Infrastructure',
                templateUrl: 'Partials/category.html',
                controller: 'CategoryController as CatCtrl'
            })

    }])
    //.config(['$routeProvider',
    //    function ($routeProvider) {
    //        $routeProvider.
    //            when('/Intro', {
    //                templateUrl: 'Partials/intro.html'

    //            }).
    //            when('/WebDev', {
    //                templateUrl: 'Partials/category.html',
    //                controller: 'CategoryController as CatCtrl'
    //            }).
    //            when('/SQL', {
    //                templateUrl: 'Partials/category.html',
    //                controller: 'CategoryController as CatCtrl'
    //            }).
    //            when('/Analyst', {
    //                templateUrl: 'Partials/category.html',
    //                controller: 'CategoryController as CatCtrl'
    //            }).
    //            when('/Infrastructure', {
    //                templateUrl: 'Partials/category.html',
    //                controller: 'CategoryController as CatCtrl'
    //            }).
    //            when('/', {
    //                templateUrl: 'Partials/bio.html'

    //            }).
    //            otherwise({
    //                redirectTo: '/'
    //            });
    //    }])
    .factory("categoryService", function () {
        var categoryData = this;

        return {
            setCategory: function (cat) {
                categoryData.category = cat - 2;
            },
            getCategory: function () {
                return categoryData.category;
            }
        }

    
    });
    

    

    app.controller('TabController', function TabCtrl(categoryService) {
        this.tab = 1;

        this.setTab = function (tab) {
            this.tab = tab;
            if (this.tab >= 2 || this.tab <= 5) {
                categoryService.setCategory(this.tab);
            }
        };

        this.isSet = function (tab) {
            return (this.tab === tab);
        };
    });

    app.controller('CategoryController', function (categoryService) {
        this.categoryNum = categoryService.getCategory();
        this.categories = categories[this.categoryNum];

    });


    var categories = [
        {
            category: 'Web Development',
            subcategories: [{
                name: 'MVC',
                works: [{
                    title: 'Baptist Health Project',
                    url: '/WebDev/BHP'
                }, {
                    title: 'Hot Dog Lovers',
                    url: '/WebDev/HDL'
                }]
            }, {
                name: 'JavaScript',
                works: [{
                    title: 'JS Calculator',
                    url: '/WebDev/JSCalculator'
                }, {
                    title: 'JQuery Examples',
                    url: '/WebDev/JQuery'
                }, {
                    title: 'AngularJS Examples',
                    url: '/WebDev/AngularJS'
                }]
            }]
        }, {
            category: 'SQL',
            subcategories: [{
                name: 'Transact-SQL',
                works: [{
                    title: 'T-SQL Examples',
                    url: '/SQL/T-SQL'
                }]
            }, {
                name: 'Architecture',
                works: [{
                    title: 'Dependencies & Normal Form',
                    url: '/SQL/D&NF'
                }]
            }]
        }, {
            category: 'Analyst',
            subcategories: [{
                name: 'Case Reports',
                works: [{
                    title: 'Appex',
                    url: '/Analyst/Appex'
                }, {
                    title: 'Connor Formed Metal Products',
                    url: '/Analyst/CFMP'
                }, {
                    title: 'Burlington Northern',
                    url: '/Analyst/BN'
                }, {
                    title: 'Symantec',
                    url: '/Analyst/Symantec'
                }, {
                    title: 'Waco Manufacturing',
                    url: '/Analyst/Waco'
                }, {
                    title: 'Webvan',
                    url: '/Analyst/Webvan'
                }]
            }]
        }, {
            category: 'Infrastructure',
            subcategories: [{
                name: 'Infrastructure Technologies',
                works: [{
                    title: 'Infrastructure Knowledge',
                    url: '/Infrastructure/Knowledge'
                }]
            }]
        }];

})();