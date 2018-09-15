(function($, window, undefined) {
    var InfiniteScroll = function() {
        this.initialize = function() {
            this.setupEvents();
        };
        
        this.setupEvents = function() {
            $(window).on(
                'scroll',
                this.handleScroll.bind(this)
            );
        };
 
        this.handleScroll = function() {
            var scrollTop = $(document).scrollTop();
            var windowHeight = $(window).height();
            var height = $(document).height() - windowHeight;
            var scrollPercentage = (scrollTop / height);

            // if the scroll is more than 90% from the top, load more content.
            if(scrollPercentage > 0.9) {
                this.doSomething();
            }
        }
 
        this.doSomething = function() {
            // Do something.
            // Load data or whatever.
        }
 
        this.initialize();
    }
 
    $(document).ready(
        function() {
            // Initialize scroll
            new InfiniteScroll();
        }
    );
})(jQuery, window);
