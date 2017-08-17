$(function () {
    //    $("#featured").on('appear', function () {
    //        $("#featured").addClass("animated pulse");
    //    });
    //    $("#featured").on('disappear', function () {
    //        
    //    });
    //    $("#featured").appear();


    //                  ===== ANIMATION =====
    var windowWidth = window.innerWidth;

    function animation() {

        $(".present-content1").on('appear', function () {

            $(".present-content1").animate({
                opacity: 1
            }, 0, function () {
                $(".present-content1").addClass("animated slideInRight");
            });
        });
        $(".present-content1").appear();


        $(".present-content2").on('appear', function () {
            $(".present-content2").animate({
                opacity: 1
            }, 0, function () {
                $(".present-content2").addClass("animated slideInLeft");
            });
        });
        $(".present-content2").appear();


        $(".present-content3").on('appear', function () {
            $(".present-content3").animate({
                opacity: 1
            }, 0, function () {
                $(".present-content3").addClass("animated slideInRight");
            });
        });
        $(".present-content3").appear();

    };

    if (windowWidth < 768) {
        $(".present-content1").css('opacity', '1');
        $(".present-content2").css('opacity', '1');
        $(".present-content3").css('opacity', '1');
        $(".partner").css('opacity', '1');
    };


    if (windowWidth >= 768) {
        animation();
    };

});
