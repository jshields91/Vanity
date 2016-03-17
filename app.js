(function () {
    var app = angular.module('mainApp', ['ui.router', 'ngAnimate', 'ngCookies'])
    .config(['$rootScope', '$stateProvider', '$urlRouterProvider', 'categoryServiceProvider', 'pagePersistenceServiceProvider', function ($rootScope, $stateProvider, $urlRouterProvider, categoryServiceProvider, pagePersistenceServiceProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('bio', {
                url: '/',
                templateUrl: 'Partials/bio.html',
                onEnter: function (pagePersistenceService) {
                    $rootScope.tab = 1;
                    pagePersistenceService.setTabData($rootScope.tab);
                }
            })
            .state('intro', {
                url: '/Intro',
                templateUrl: 'Partials/intro.html'
            })
            .state('webdev', {
                url: '/WebDev',
                templateUrl: 'Partials/category.html',
                controller: 'CategoryController as CatCtrl',
                onEnter: function (categoryService, pagePersistenceService) {
                    $rootScope.tab = 2;
                    pagePersistenceService.setTabData($rootScope.tab);
                    categoryService.setCategory($rootScope.tab);
                }
            })
            .state('sql', {
                url: '/SQL',
                templateUrl: 'Partials/category.html',
                controller: 'CategoryController as CatCtrl',
                onEnter: function (categoryService, pagePersistenceService) {
                    $rootScope.tab = 3;
                    pagePersistenceService.setTabData($rootScope.tab);
                    categoryService.setCategory($rootScope.tab);
                }
            })
            .state('analyst', {
                url: '/Analyst',
                templateUrl: 'Partials/category.html',
                controller: 'CategoryController as CatCtrl',
                onEnter: function (categoryService, pagePersistenceService) {
                    $rootScope.tab = 4;
                    pagePersistenceService.setTabData($rootScope.tab);
                    categoryService.setCategory($rootScope.tab);
                }
            })
            .state('infrastructure', {
                url: '/Infrastructure',
                templateUrl: 'Partials/category.html',
                controller: 'CategoryController as CatCtrl',
                onEnter: function (categoryService, pagePersistenceService) {
                    $rootScope.tab = 5;
                    pagePersistenceService.setTabData($rootScope.tab);
                    categoryService.setCategory($rootScope.tab);
                }
            })

    }])

    .factory("pagePersistenceService", ["$cookies", function ($cookies) {
        var currentTab = 1;

        return {
            setTabData: function (tab) {
                currentTab = tab;
                $cookies.put("currentTab", currentTab);
            },
            getTabData: function () {
                currentTab = $cookies.get("currentTab");
                return currentTab;
            },
            clearTabData: function () {
                currentTab = 1;
                $cookies.remove("currentTab");
            }
        }

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

    app.controller('TabController', function TabCtrl($scope, categoryService, pagePersistenceService) {
        $scope.tab = 1;

        this.setTab = function (tab) {
            $scope.tab = tab;

            if ($scope.tab >= 2 || $scope.tab <= 5) {
                categoryService.setCategory($scope.tab);
            }
        };

        this.isSet = function (tab) {
            return ($scope.tab === tab);
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
                       link: {
                           repourl: 'https://github.com/jshields91/MVC_BaptistProjectPartial',
                           ghurl: 'http://www.jordanshields.net/MVC_BaptistProjectPartial/'
                       }
                   }, {
                       title: 'Hot Dog Lovers',
                       link: {
                           
                       }
                   }]
               }, {
                   name: 'JavaScript',
                   works: [{
                       title: 'JS Calculator',
                       link: {
                           repourl: 'https://github.com/jshields91/Pure-JS-Calculator',
                           ghurl: 'http://www.jordanshields.net/Pure-JS-Calculator/'
                       }
                   }, {
                       title: 'JQuery Examples -- Tic-Tac-Toe',
                       link: {
                           repourl: 'https://github.com/jshields91/JQuery-tic-tac-toe',
                           ghurl: 'http://www.jordanshields.net/JQuery-tic-tac-toe/'
                       }
                   }, {
                       title: 'AngularJS Examples',
                       link: {
                           repourl: 'https://github.com/jshields91/AngularJS-examples',
                           ghurl: 'http://www.jordanshields.net/AngularJS-examples/'
                       }
                   }]
               }]
           }, {
               category: 'SQL',
               subcategories: [{
                   name: 'Transact-SQL',
                   works: [{
                       title: 'T-SQL Examples',
                       link: {
                           repourl: 'https://github.com/jshields91/T-SQL',
                           ghurl: 'http://www.jordanshields.net/T-SQL/'
                       }
                   }]
               }]
           }, {
               category: 'Analyst',
               subcategories: [{
                   name: 'Case Reports',
                   works: [{
                       title: 'Appex',
                       link: {
                           repourl: 'https://github.com/jshields91/Business-Analysis',
                           ghurl: 'http://www.jordanshields.net/Business-Analysis/Appex.html'
                       }
                   }, {
                       title: 'Connor Formed Metal Products',
                       link: {
                           repourl: 'https://github.com/jshields91/Business-Analysis',
                           ghurl: 'http://www.jordanshields.net/Business-Analysis/CFMP.html'
                       }
                   }, {
                       title: 'Burlington Northern',
                       link: {
                           repourl: 'https://github.com/jshields91/Business-Analysis',
                           ghurl: 'http://www.jordanshields.net/Business-Analysis/BN.html'
                       }
                   }, {
                       title: 'Symantec',
                       link: {
                           repourl: 'https://github.com/jshields91/Business-Analysis',
                           ghurl: 'http://www.jordanshields.net/Business-Analysis/Symantec.html'
                       }
                   }, {
                       title: 'Waco Manufacturing',
                       link: {
                           repourl: 'https://github.com/jshields91/Business-Analysis',
                           ghurl: 'http://www.jordanshields.net/Business-Analysis/Waco.html'
                       }
                   }, {
                       title: 'Webvan',
                       link: {
                           repourl: 'https://github.com/jshields91/Business-Analysis',
                           ghurl: 'http://www.jordanshields.net/Business-Analysis/Webvan.html'
                       }
                   }]
               }]
           }, {
               category: 'IT Infrastructure',
               subcategories: [{
                   name: 'Infrastructure Technologies',
                   works: [{
                       title: 'Infrastructure Knowledge',
                       link: {
                           repourl: 'https://github.com/jshields91/IT-Infrastructure',
                           ghurl: 'http://www.jordanshields.net/IT-Infrastructure/'
                       }
                   }]
               }]
           }];

})();