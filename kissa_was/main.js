$(function(){
    $(".faq-list dd").hide();
    $(".faq-list dt").click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    })
})