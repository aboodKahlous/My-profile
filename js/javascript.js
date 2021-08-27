$("nav li").on('click' , function(){
    $(this).addClass('active').siblings().removeClass('active');
})


///////////////////// button to top 
var scrollButtom = $("#buttom-up");
$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {
        scrollButtom.fadeIn(1000);
    } else if ($(this).scrollTop() <= 300) {
        scrollButtom.fadeOut(1000);
    }
})
scrollButtom.click(function() {
    $("html,body").animate({
         scrollTop: 0     
    }, 1000);
})


$(document).ready(function(){

    $("header i").click(function(){
        $(this).toggleClass("fa-align-left fa-times");
    })

    

});

