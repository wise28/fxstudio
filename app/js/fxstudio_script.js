(function() {
    setTimeout(function() {
        $('.header__menu').mouseover(function(event){
            var target = event.target;
            if (target.className == 'nav-link header__menu-link') {
                var megaMenuWrap = $(target).next();
                if($(target).next().length == 0) {return false}
                closeMenu();
                megaMenuWrap[0].style.display = 'flex';
            }
        });
    }, 0);

        $('.header__menu').click(function(event){
            var target = event.target;
            console.log(target);
            if (target.className == 'nav-link header__menu-link') {
                var megaMenuWrap = $(target).next();
                if($(target).next().length == 0) {return false}
                closeMenu();
                megaMenuWrap[0].style.display = 'flex';
            }
            closeMenu();
        });


    function closeMenu() {
        var megaMenuWrap = document.getElementsByClassName('mega-menu');
        for (var i = 0; i < megaMenuWrap.length; i++) {
            megaMenuWrap[i].style.display = 'none';
        }
    }

    $(document).click(function(event) {
        var target = event.target;
        if(target.className != 'nav-link header__menu-link' && target.className != 'ul.mega-menu' )
        closeMenu();
    });
    //for hover elements by block last works

    $('.work-pict').hover(function(){
        $(this).toggleClass('display-none');
        $('.work-hover').toggleClass('block-none');
        $('.work-hover-text').toggleClass('block-none');
    });

    $('#work-pict-small-one').hover(function(){
        $(this).toggleClass('display-none');
        $('#work-hover-small-one').toggleClass('block-none');
    });
    $('#work-pict-small-second').hover(function(){
        $(this).toggleClass('display-none');
        $('#work-hover-small-second').toggleClass('block-none');
    });

}(jQuery));

$(document).ready(function(){
    $(function() {
        /*
         * just for this demo:
         */
        $('#showcode').toggle(
            function() {
                $(this).addClass('up').removeClass('down').next().slideDown();
            },
            function() {
                $(this).addClass('down').removeClass('up').next().slideUp();
            }
        );
        $('#panel').toggle(
            function() {
                $(this).addClass('show').removeClass('hide');
                $('#overlay').stop().animate( { left : - $('#overlay').width() + 20 + 'px' }, 300 );
            },
            function() {
                $(this).addClass('hide').removeClass('show');
                $('#overlay').stop().animate( { left : '0px' }, 300 );
            }
        );

        var $container 	= $('#am-container'),
            $imgs		= $container.find('img').hide(),
            totalImgs	= $imgs.length,
            cnt			= 0;

        $imgs.each(function(i) {
            var $img	= $(this);
            $('<img/>').load(function() {
                ++cnt;
                if( cnt === totalImgs ) {
                    $imgs.show();
                    $container.montage({
                        fixedHeight : 60
                    });

                    /*
                     * just for this demo:
                     */
                    $('#overlay').fadeIn(500);
                }
            }).attr('src',$img.attr('src'));
        });
    });
});

//for tabs

(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);