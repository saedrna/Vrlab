/**
 * Created by Administrator on 2015/8/20.
 */
$(document).ready(function(){

    /*********************navbar*********************/
    {
        function remove_class(){
            $('ul.nav li').each(function (){
               $(this).removeClass('active') ;
            });
        };

        $('ul.nav li').click(function(e){
            remove_class();
            $(this).addClass('active');
        });
    }

    /*********************carousel*********************/
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });

    /*********************footer*********************/
    {
        var year = new Date().getFullYear().toString();
        var footer = '';
        if(year == '2015')
        {
            footer = 'Copyright (c) 2015 '
        }
        else
        {
            footer = ''.concat('Copyright (c) 2015-', year,' ');

        }
        $('#footer_year').text(footer).append('<a href=\"http://vrlab.org.cn/~hanhu/\" target=\"_blank\"> Han Hu</a>');
    }

    /*********************research*********************/
    function init_research_animation() {
        var _SlideshowTransitions = [
            //Fade Twins
            { $Duration: 700, $Opacity: 2, $Brother: { $Duration: 1000, $Opacity: 2 } },
            //Rotate Overlap
            { $Duration: 1200, $Zoom: 11, $Rotate: -1, $Easing: { $Zoom: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Round: { $Rotate: 0.5 }, $Brother: { $Duration: 1200, $Zoom: 1, $Rotate: 1, $Easing: $JssorEasing$.$EaseSwing, $Opacity: 2, $Round: { $Rotate: 0.5 }, $Shift: 90 } },
            //Switch
            { $Duration: 1400, x: 0.25, $Zoom: 1.5, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Zoom: $JssorEasing$.$EaseInSine }, $Opacity: 2, $ZIndex: -10, $Brother: { $Duration: 1400, x: -0.25, $Zoom: 1.5, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Zoom: $JssorEasing$.$EaseInSine }, $Opacity: 2, $ZIndex: -10 } },
            //Rotate Relay
            { $Duration: 1200, $Zoom: 11, $Rotate: 1, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Round: { $Rotate: 1 }, $ZIndex: -10, $Brother: { $Duration: 1200, $Zoom: 11, $Rotate: -1, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Round: { $Rotate: 1 }, $ZIndex: -10, $Shift: 600 } },
            //Doors
            { $Duration: 1500, x: 0.5, $Cols: 2, $ChessMode: { $Column: 3 }, $Easing: { $Left: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2, $Brother: { $Duration: 1500, $Opacity: 2 } },
            //Rotate in+ out-
            { $Duration: 1500, x: -0.3, y: 0.5, $Zoom: 1, $Rotate: 0.1, $During: { $Left: [0.6, 0.4], $Top: [0.6, 0.4], $Rotate: [0.6, 0.4], $Zoom: [0.6, 0.4] }, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Brother: { $Duration: 1000, $Zoom: 11, $Rotate: -0.5, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Shift: 200 } },
            //Fly Twins
            { $Duration: 1500, x: 0.3, $During: { $Left: [0.6, 0.4] }, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true, $Brother: { $Duration: 1000, x: -0.3, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 } },
            //Rotate in- out+
            { $Duration: 1500, $Zoom: 11, $Rotate: 0.5, $During: { $Left: [0.4, 0.6], $Top: [0.4, 0.6], $Rotate: [0.4, 0.6], $Zoom: [0.4, 0.6] }, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Brother: { $Duration: 1000, $Zoom: 1, $Rotate: -0.5, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Shift: 200 } },
            //Rotate Axis up overlap
            { $Duration: 1200, x: 0.25, y: 0.5, $Rotate: -0.1, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Brother: { $Duration: 1200, x: -0.1, y: -0.7, $Rotate: 0.1, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2 } },
            //Chess Replace TB
            { $Duration: 1600, x: 1, $Rows: 2, $ChessMode: { $Row: 3 }, $Easing: { $Left: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Brother: { $Duration: 1600, x: -1, $Rows: 2, $ChessMode: { $Row: 3 }, $Easing: { $Left: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 } },
            //Chess Replace LR
            { $Duration: 1600, y: -1, $Cols: 2, $ChessMode: { $Column: 12 }, $Easing: { $Top: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Brother: { $Duration: 1600, y: 1, $Cols: 2, $ChessMode: { $Column: 12 }, $Easing: { $Top: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 } },
            //Shift TB
            { $Duration: 1200, y: 1, $Easing: { $Top: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Brother: { $Duration: 1200, y: -1, $Easing: { $Top: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 } },
            //Shift LR
            { $Duration: 1200, x: 1, $Easing: { $Left: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Brother: { $Duration: 1200, x: -1, $Easing: { $Left: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 } },
            //Return TB
            { $Duration: 1200, y: -1, $Easing: { $Top: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $ZIndex: -10, $Brother: { $Duration: 1200, y: -1, $Easing: { $Top: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $ZIndex: -10, $Shift: -100 } },
            //Return LR
            { $Duration: 1200, x: 1, $Delay: 40, $Cols: 6, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: { $Left: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $ZIndex: -10, $Brother: { $Duration: 1200, x: 1, $Delay: 40, $Cols: 6, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: { $Top: $JssorEasing$.$EaseInOutQuart, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $ZIndex: -10, $Shift: -100 } },
            //Rotate Axis down
            { $Duration: 1500, x: -0.1, y: -0.7, $Rotate: 0.1, $During: { $Left: [0.6, 0.4], $Top: [0.6, 0.4], $Rotate: [0.6, 0.4] }, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Brother: { $Duration: 1000, x: 0.2, y: 0.5, $Rotate: -0.1, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Top: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2 } },
            //Extrude Replace
            { $Duration: 1600, x: -0.2, $Delay: 40, $Cols: 12, $During: { $Left: [0.4, 0.6] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 260, $Easing: { $Left: $JssorEasing$.$EaseInOutExpo, $Opacity: $JssorEasing$.$EaseInOutQuad }, $Opacity: 2, $Outside: true, $Round: { $Top: 0.5 }, $Brother: { $Duration: 1000, x: 0.2, $Delay: 40, $Cols: 12, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 1028, $Easing: { $Left: $JssorEasing$.$EaseInOutExpo, $Opacity: $JssorEasing$.$EaseInOutQuad }, $Opacity: 2, $Round: { $Top: 0.5 } } }
        ];

        var options = {
            $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
            $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
            $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
            $Loop: 1,                                           //[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1

            $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
            $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
            $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
            //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
            //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
            $SlideSpacing: 5, 					                //[Optional] Space between each slide in pixels, default value is 0
            $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
            $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
            $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
            $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
            $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
            $FillMode: 1,

            $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
                $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
                $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
                $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                $ShowLink: true                                 //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
            },

            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

                $Loop: 1,                                       //[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1
                $AutoCenter: 3,                                 //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
                $Lanes: 1,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
                $SpacingX: 4,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                $SpacingY: 4,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
                $DisplayPieces: 4,                              //[Optional] Number of pieces to display, default value is 1
                $ParkingPosition: 0,                            //[Optional] The offset position to park thumbnail
                $Orientation: 2,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
                $DisableDrag: false                             //[Optional] Disable drag or not, default value is false
            }
        };

        var jssor_slider1 = new $JssorSlider$("slider1_container", options);

        //responsive code begin
        //you can remove responsive code if you don't want the slider scales while window resizes
        function ScaleSlider() {
            var parent_width = jssor_slider1.$Elmt.parentNode.clientWidth;
            if (parent_width) {
                var slider_width = parent_width;

                //keep the slider width no more than 810
                slider_width = Math.min(slider_width, 1960);

                jssor_slider1.$ScaleWidth(slider_width);
            }
            else
                window.setTimeout(ScaleSlider, 30);
        }
        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
    }
    init_research_animation();

    /****************lab personnel carousel****************/
    function generate_lab_carousel() {
        var defaultCss = {
            width: 100,
            height: 100,
            marginTop: 50,
            marginRight: 0,
            marginLeft: 0,
            opacity: 0.2
        };
        var selectedCss = {
            width: 150,
            height: 150,
            marginTop: 30,
            marginRight: -25,
            marginLeft: -25,
            opacity: 1
        };
        var aniOpts = {
            queue: false,
            duration: 300
            //easing: 'cubic'
        };
        var $car = $('#lab-carousel');
        $car.find('img').css('zIndex', 1).css(defaultCss);

        $car.children('div').each(function (i) {
            $(this).data('index', i);
        });

        $car.carouFredSel({
            circular: true,
            infinite: true,
            width: '100%',
            height: 250,
            align: "center",
            items: {
                visible: 3,
                start: 1
            },
            prev: '#lab_prev',
            next: '#lab_next',
            auto: false,
            swipe: {
                onTouch: true,
                onMouse: true
            },
            scroll: {
                items: 1,
                duration: 300,
                //easing: 'cubic',
                onBefore: function (data) {
                    var $comming = data.items.visible.eq(1),
                        $going = data.items.old.eq(1),
                        $commingdetail = $("div#lab-details div").eq($comming.data('index')),
                        $goingdetail = $("div#lab-details div").eq($going.data('index'));


                    $goingdetail.fadeOut(100, function () {
                        $goingdetail.siblings().hide();
                        $commingdetail.fadeIn(300);
                    });


                    $comming.find('img').css('zIndex', 2).animate(selectedCss, aniOpts);
                    data.items.old.eq(1).find('img').css('zIndex', 1).animate(defaultCss, aniOpts);
                }
            }

        });
    }
    generate_lab_carousel();

    /**************** activity popups and pagination ****************/
    function init_news_and_pagenation() {
        var n_news_page = $('#hiddennews div.artical_page').length;
        var n_news_visible_page = n_news_page < 6 ? n_news_page : 6;

        $('#news-pagination.sync-pagenation').twbsPagination({
            totalPages: n_news_page,
            visiblePages: n_news_visible_page,
            pageClass: 'pagination_page',
            onPageClick: function (event, page) {
                var page_index = page - 1;
                var new_content = $("#hiddennews div.artical_page:eq(" + page_index + ")").clone();
                $("#newspage").empty().append(new_content); //װ�ض�Ӧ��ҳ������

                $('a.popup-with-move-news').magnificPopup({
                    type: 'ajax',
                    alignTop: true,
                    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
                });
                return false;
            }
        });

        function init_first_page() {
            var new_content = $("#hiddennews div.artical_page:eq(0)").clone();
            $("#newspage").empty().append(new_content); //װ�ض�Ӧ��ҳ������
            $('a.popup-with-move-news').magnificPopup({
                type: 'ajax',
                alignTop: true,
                overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
            });
        }
        init_first_page();
    }
    init_news_and_pagenation();

    /**
     * init gallery
     */
    function init_gallery() {
        $(".grid").on("mouseenter","li",function(){
            new TweenLite($(this).find(".over"),0.4,{bottom:0,top:0});
        }).on("mouseleave","li",function(){
            new TweenLite($(this).find(".over"),0.4,{bottom:"-100%", top:"100%"});
        });

        $('.popup-with-move-anim').magnificPopup({
            type: 'image',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 400,
            mainClass: 'my-mfp-slide-bottom'
        });

        $('.popup-with-move-video').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youku: {
                        index: 'youku.com',
                        src: '%id%'
                    }
                }
            }
        });
    }
    init_gallery();

    /**
     * 研究进展相关内�?�初始化
     */
    function init_research_progress_pagination() {
        var num_progress_page = $('#hidden-progress div.artical_page').length;
        var num_progress_visible_page = num_progress_page < 6 ? num_progress_page : 6;

        $('#progress-pagination.sync-pagenation').twbsPagination({
            totalPages: num_progress_page,
            visiblePages: num_progress_visible_page,
            pageClass: 'pagination_page',
            onPageClick: function (event, page) {
                var page_index = page - 1;
                var new_content = $("#hidden-progress div.artical_page:eq(" + page_index + ")").clone();
                $("#progress-page").empty().append(new_content); //װ�ض�Ӧ��ҳ������

                $('a.popup-with-move-news').magnificPopup({
                    type: 'ajax',
                    alignTop: true,
                    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
                });
                $('a.popup-with-move-video').magnificPopup({
                    type: 'iframe',
                    iframe: {
                        patterns: {
                            youku: {
                                index: 'youku.com',
                                src: '%id%'
                            }
                        }
                    }
                });
                return false;
            }
        });

        function init_first_page() {
            var new_content = $("#hidden-progress div.artical_page:eq(0)").clone();
            $("#progress-page").empty().append(new_content); //װ�ض�Ӧ��ҳ������
            $('a.popup-with-move-news').magnificPopup({
                type: 'ajax',
                alignTop: true,
                overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
            });
            $('a.popup-with-move-video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youku: {
                            index: 'youku.com',
                            src: '%id%'
                        }
                    }
                }
            });
        }
        init_first_page();
    }
    init_research_progress_pagination()
});


$(window).load(function(){

    /*++++++++++++++++++++++++++++++++++++
     gallery masonry layout
     ++++++++++++++++++++++++++++++++++++++*/
    var $container = $('#grid');
    // initialize
    $container.masonry({
        itemSelector: 'li'
    });
});