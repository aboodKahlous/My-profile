$("nav li").on('click' , function(){
    $(this).addClass('active').siblings().removeClass('active');
})
