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
            .state('bhp', {
                url: '/WebDev/BHP',
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
                    sref: 'bhp'
                }, {
                    title: 'Hot Dog Lovers',
                    sref: 'hdl'
                }]
            }, {
                name: 'JavaScript',
                works: [{
                    title: 'JS Calculator',
                    sref: 'jscalculator'
                }, {
                    title: 'JQuery Examples',
                    sref: 'jquery'
                }, {
                    title: 'AngularJS Examples',
                    sref: 'angularjs'
                }]
            }]
        }, {
            category: 'SQL',
            subcategories: [{
                name: 'Transact-SQL',
                works: [{
                    title: 'T-SQL Examples',
                    sref: 't-sql'
                }]
            }, {
                name: 'Architecture',
                works: [{
                    title: 'Dependencies & Normal Form',
                    sref: 'd&nf'
                }]
            }]
        }, {
            category: 'Analyst',
            subcategories: [{
                name: 'Case Reports',
                works: [{
                    title: 'Appex',
                    sref: 'appex'
                }, {
                    title: 'Connor Formed Metal Products',
                    sref: 'cfmp'
                }, {
                    title: 'Burlington Northern',
                    sref: 'bn'
                }, {
                    title: 'Symantec',
                    sref: 'symantec'
                }, {
                    title: 'Waco Manufacturing',
                    sref: 'waco'
                }, {
                    title: 'Webvan',
                    sref: 'webvan'
                }]
            }]
        }, {
            category: 'IT Infrastructure',
            subcategories: [{
                name: 'Infrastructure Technologies',
                works: [{
                    title: 'Infrastructure Knowledge',
                    sref: 'knowledge'
                }]
            }]
        }];

})();