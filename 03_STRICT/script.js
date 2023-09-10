$(function(){

    $('.bars').click(function(){
        $('.manu_wrapper').toggleClass('menu_show');
    });


    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000)
    })

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > 500){
            $('.back_to_top').show(500);
        }else{
            $('.back_to_top').hide(500);
        }
    })
  



    // function open_img(){
    //     alert('hello');

    // }

    $('.close_btn').click(function(){
        $('#body_overlay').removeClass('show_overlay');
        $('.work_box img').removeClass('full_img')
    })


});