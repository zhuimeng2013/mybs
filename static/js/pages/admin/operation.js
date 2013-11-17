jQuery(function($){

    $('.mod-add-member .field-value').on('mouseenter',function(){
        $(this).addClass('hover');
    }).on('mouseleave',function(){
        $(this).removeClass('hover');
    });

});