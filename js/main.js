
$(function(){

    var model = {

        current: null,

        allCats: [
            {catName: "Petey",
             ID: 0, 
             clicks: 0,
             catSrc: "images/cat1.jpg"
             },

             {catName: "Eliza",
             ID: 1,
             clicks: 0,
             catSrc: "images/cat2.jpg"
             },

             {catName: "Tom and Jerry",
             ID: 2,
             clicks: 0,
             catSrc: "images/cat3.jpg"
             },

             {catName: "Finnegan",
             ID: 3,
             clicks: 0,
             catSrc: "images/cat4.jpg"
             },

             {catName: "Miles",
             ID: 4,
             clicks: 0,
             catSrc: "images/cat5.jpg"
             }
        ]
    };


    var octopus = {

        getCats: function() {
            return model.allCats;
        },

        getCurrentCat: function() {
            return model.current;
        },

        init: function() {
            model.current = model.allCats[0];
            viewButtons.init();
            viewButtons.render();
            viewCat.init();
            viewAdmin.render();
        },

        setCat: function(cat) {
            model.current = cat;
        },

        incrementCounter: function() {
            model.current.clicks++;
            viewCat.render();
         }, 

         updateCat: function(catName, URL, clicks) {
             model.current.catName = catName;
             model.current.clicks = parseInt(clicks);
             model.current.catSrc = URL;
             octopus.setCat(model.current);
             model.allCats[model.current.ID] = model.current;
         }
    };


    var viewButtons = {

        init: function() {
            $('.catButton').remove();
            octopus.getCats().forEach(function(cat){
                $('#selector').append("<button class='catButton' id=" + cat.ID + ">" + cat.catName + "</button>");
            });
         },

        render: function() {
            $('.catButton').click(function(){
                var buttonNumber= this.id;
                var cat = octopus.getCats()[buttonNumber];
                octopus.setCat(cat);
                viewCat.render();
             });
        }

    };

    var viewCat = {

        init: function() {

             $('.catPic').click(function() {
               octopus.incrementCounter();
            });

            this.render();
        },

        render: function() {
            var currentCat = octopus.getCurrentCat();
            $('.catPic').attr("src", currentCat.catSrc);
            $('#clicks').html("Clicks: " + currentCat.clicks);
        },
    };

    var viewAdmin = {

        render: function() {
            $('#admin').click(function(){
                var currentCat = octopus.getCurrentCat();
                $('#catName').attr("value", currentCat.catName);
                $('#catURL').attr("value", currentCat.catSrc);
                $('#catClicks').attr("value", currentCat.clicks);
                $('form').css("display", "block");
            });

            $('#cancel').click(function(e){
                 e.preventDefault();
                $('form').css("display", "none");
            });

            $('#submit').click(function(e){
                e.preventDefault();
                var newCatName = $('#catName').val();
                var newCatURL = $('#catURL').val();
                var newCatClicks = $('#catClicks').val();
                octopus.updateCat(newCatName, newCatURL, newCatClicks);
                $('form').css("display", "none");
                viewButtons.init();
                viewCat.render();
                viewButtons.render();
            });
        },
    }

    octopus.init();
});