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
                // TODO: get next image source, title, and tutor from server
                
                this.loadNext("placeholder.png", "Placeholder Title", "placeholder user");
            }
        }
 
        this.loadNext = function(img_src, title, tutor) {
            $("#infinite-scroll").append("<div class=\"sub-container\"><h4>" + title + "</h4><p class=\"small\">courtesy of <span>" + tutor + "</span></p><embed src=\"" + img_src + "\" class=\"video\"></div>");
        }
 
        this.initialize();
    }
 
    $(document).ready(
        function() {
            new InfiniteScroll();
        }
    );
}) (jQuery, window);
