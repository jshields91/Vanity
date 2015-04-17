(function () {
    var app = angular.module('mainApp', ['ui.router', 'ngAnimate'])
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