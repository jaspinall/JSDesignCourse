
var clickViewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('images/cat1.jpg');

    this.incrementClickCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new clickViewModel());