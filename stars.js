(function($) {
    
    $.fn.stars = function(options) {
      
        var settings = $.extend({
            stars: 5,
            emptyIcon: 'fa-star-o',
            filledIcon: 'fa-star',
            color: '#E4AD22',
            value: 0,
            text: null,
            click: function() {}
        }, options);
        
        var block = this;
        
        for (var x = 0; x < settings.stars; x++) {
            var icon = $("<i>").addClass("fa").addClass(settings.emptyIcon).css("color", settings.color);
            if (settings.text) {    
                icon.attr("data-rating-text", settings.text[x]);
            }
            this.append(icon);
        }
        
        if (settings.text) {
            var textDiv = $("<div>").addClass("rating-text");
            this.append(textDiv);
        }
        
        var stars = this.find("i");
        
        stars.on("mouseover", function() {
            var index = $(this).index() + 1;
            var starsHovered = stars.slice(0, index);
            events.removeFilledStars(stars);
            events.fillStars(starsHovered);
            
            console.log(block.find(".rating-text"));
            if (settings.text) block.find(".rating-text").html($(this).data("rating-text"));
        }).on("mouseout", function() {
            events.removeFilledStars(stars);
            events.fillStars(stars.filter(".selected"));
            if (settings.text) block.find(".rating-text").html("");
        }).on("click", function() {
            var index = $(this).index();
            settings.value = index + 1;
            stars.removeClass("selected").slice(0, settings.value).addClass("selected");
            settings.click.call(stars.get(index), settings.value);
        });
        
        events = {
            removeFilledStars: function(stars) {
                stars.removeClass(settings.filledIcon).addClass(settings.emptyIcon);
                return stars;
            },
            
            fillStars: function(stars) {
                stars.removeClass(settings.emptyIcon).addClass(settings.filledIcon);
                return stars;
            }
        };
        
        if (settings.value > 0) {
            var starsToSelect = stars.slice(0, settings.value);
            events.fillStars(starsToSelect).addClass("selected");
        }
        
    };
    
}(jQuery));