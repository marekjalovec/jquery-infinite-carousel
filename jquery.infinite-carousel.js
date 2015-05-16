/**
 * jQuery infinite carousel plugin
 *
 * @author Stéphane Roucheray
 * @author Marek Jalovec
 *
 * @url https://github.com/marekjalovec/jquery-infinite-carousel/
 */

(function ($) {
    $.fn.carousel = function (previous, next, options) {
        var sliderList = $(this).children()[ 0 ];

        if (sliderList) {
            var sizeFirstElmnt = $(sliderList).children().outerWidth(true),
                elmnts = $(sliderList).children(),
                numElmts = elmnts.length,
                shownInViewport = Math.round($(this).width() / sizeFirstElmnt),
                firstElementOnViewPort = 1,
                isAnimating = false;

            // don't create the carousel if there is not enough items
            if (numElmts <= shownInViewport) return;

            // clone initialy shown elements and append them to the end
            for (var i = 0; i < shownInViewport; i++) {
                $(sliderList).append($(elmnts[ i ]).clone(true));
            }
            $(sliderList).css('width', (numElmts + shownInViewport) * sizeFirstElmnt + 'px');

            // previous
            $(previous).click(function (event) {
                event.preventDefault();

                if (!isAnimating) {
                    if (firstElementOnViewPort == 1) {
                        $(sliderList).css('left', '-' + numElmts * sizeFirstElmnt + 'px');
                        firstElementOnViewPort = numElmts;
                    }
                    else {
                        firstElementOnViewPort--;
                    }

                    $(sliderList).animate({
                        left: '+=' + sizeFirstElmnt,
                        y: 0,
                        queue: true
                    }, 'swing', function () {
                        // set the animation flag
                        isAnimating = false;
                    });

                    isAnimating = true;
                }
            });

            // next
            $(next).click(function (event) {
                event.preventDefault();

                if (!isAnimating) {
                    if (firstElementOnViewPort > numElmts) {
                        firstElementOnViewPort = 2;
                        $(sliderList).css('left', '0px');
                    }
                    else {
                        firstElementOnViewPort++;
                    }

                    $(sliderList).animate({
                        left: '-=' + sizeFirstElmnt,
                        y: 0,
                        queue: true
                    }, 'swing', function () {
                        // unset the animation flag
                        isAnimating = false;
                    });

                    // set the animation flag
                    isAnimating = true;
                }
            });
        }
    };
})(jQuery);