
$(function(){

    var model = {

        current: null,

        allCats: [
            {name: "Petey",
             ID: 0, 
             clicks: 0,
             src: "images/cat1.jpg"
             },

             {name: "Eliza",
             ID: 1,
             clicks: 0,
             src: "images/cat2.jpg"
             },

             {name: "Tom and Jerry",
             ID: 2,
             clicks: 0,
             src: "images/cat3.jpg"
             },

             {name: "Finnegan",
             ID: 3,
             clicks: 0,
             src: "images/cat4.jpg"
             },

             {name: "Miles",
             ID: 4,
             clicks: 0,
             src: "images/cat5.jpg"
             }
        ],

        updateClicks: function(cat) {
            var number = this.ID;
            allCats[number].clicks = this.clicks;
            }
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
        },

        setCat: function(cat) {
            model.current = cat;
        },

        incrementCounter: function() {
            model.current.clicks++;
            console.log(model.current.clicks);
            viewCat.render();
         }
    };


    var viewButtons = {

        init: function() {
        octopus.getCats().forEach(function(cat){
            $('#selector').append("<button id=" + cat.ID + ">" + cat.name + "</button>");
        });
      },

        render: function() {
            $('button').click(function(){
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
            $('.catPic').attr("src", currentCat.src);
            $('#clicks').html("Clicks: " + currentCat.clicks);
        },
    };

    octopus.init();
});