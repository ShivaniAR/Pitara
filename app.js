/**
 * Created by Shivani on 12/13/2015.
 */
/**(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        { name: 'Azurite', price: 110.50 },
        { name: 'Bloodstone', price: 22.90 },
        { name: 'Zircon', price: 1100 },
    ];
app.controller("PanelController", function(){});
this.tab=1;
        this.selectTab = function(setTab){};
this.tab=setTab;
        this.isSelected
    }



)();*/(function() {
    var app = angular.module('tourGuide', []);



    app.directive("productGallery",function(){
        return {
            restrict: 'E',
            templateUrl:'product-gallery.html',
            controller:function(){
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs:'gallery'
        };
    })  ;

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller("ReviewController", function(){

        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };

    });

    app.directive("productDescriptions", function() {
        return {
            restrict: 'E',
            templateUrl: "product-description.html"
        };
    });

    app.directive("productReviews", function() {
        return {
            restrict: 'E',
            templateUrl: "product-reviews.html"
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict:"A",
            templateUrl: "product-specs.html"
        };
    });

    app.directive("productTabs", function() {
        return {
            restrict: "E",
            templateUrl: "product-tabs.html",
            controller: function() {
                this.tab = 1;

                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });

    var gems = [
        {
            name: 'Iskcon Temple',
            description: "Temple dedicated to Lord Krishna.Hare Krishna Hare Krishna Krishna Krishna Hare Hare." +
            "   Hare Rama HAre Rama Rama Rama Hare Hare",
            City: 'Delhi',
            EntryFee : 0,
            Country: 'India',
            location: 'xyz',
            timing: 7-12,
            images: [
                "images/img1.jpg",
                "images/img2.jpg",
                "images/img4.jpg"
            ],
            reviews: [{
                stars: 5,
                body: "I love this place!",
                author: "joe@example.org"
            }, {
                stars: 1,
                body: "This is incredible.",
                author: "tim@example.org"
            }]
        }, {
            name: 'IndiaGate',
            description: "Indiantouroist place etctetc etc",
            city: 'Delhi',
            entryFee : 0,
            country: 'India',
            location: 'xyz',
            timing: 7-12,
            images: [
                "images/img6.jpg",
                "images/img7.jpg",
                "images/img5.jpg"
            ],
            reviews: [{
                stars: 5,
                body: "JAi Hind",
                author: "JimmyDean@example.org"
            }, {
                stars: 4,
                body: "niice place",
                author: "gemsRock@example.org"
            }]
        }

    ];
})();
