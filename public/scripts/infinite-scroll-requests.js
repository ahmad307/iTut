(function($, window, undefined) {
    var InfiniteScroll = function() {
        this.initialize = function() {
            this.setupEvents();
        };
        
        this.setupEvents = function() {
            $(window).on(
                "scroll",
                this.handleScroll.bind(this)
            );
        };
 
        this.handleScroll = function() {
            var scrollTop = $(document).scrollTop();
            var windowHeight = $(window).height();
            var height = $(document).height() - windowHeight;
            var scrollPercentage = (scrollTop/height);

            if(scrollPercentage > 0.9) {
                // TODO: get next title, description, timestamp, and asker from server
                
                // do some exception handling if there is no data left
                
                this.loadNext("Placeholder Title", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget lorem vel nulla commodo porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia tempor ipsum non feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur convallis augue eget mi placerat fermentum. Cras nisi nunc, malesuada vitae ligula in, vestibulum interdum eros. Sed vitae gravida magna. Mauris varius aliquet lectus, at suscipit ligula pellentesque quis.", "placeholder time", "placeholder asker");
            }
        }
 
        this.loadNext = function(title, description, timestamp, asker) {
            $("#infinite-scroll").append("<div class=\"sub-container\"><h4>" + title + "</h4><p class=\"small\">posted by <span>" + asker + "</span> at <span>" + timestamp + "</span></p><p>" + description + "</p></div>");
        }
 
        this.initialize();
    }
 
    $(document).ready(
        function() {
            new InfiniteScroll();
        }
    );
}) (jQuery, window);
