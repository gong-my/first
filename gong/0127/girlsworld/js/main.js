$(document).ready(function(){
   setInterval(slideUp, 2000);

   $(".hittext").click(function(){
     let hitborder = $('.hittext').css('border-bottom-style');
     if(hitborder == 'solid'){
        $('.hittext').css('border', 'none');
     }else{
        $('.hittext').css('border-bottom', '1px solid #999');
     }
     console.log(hitborder);
     $('.hitbox').toggle();
   });

   $(".h-bar").click(function(){
    if($(this).hasClass('click')){
        $('.h-bar').css({
            backgroundColor:'transparent'
        }); 
        $('.bar1, .bar2, .bar3').css("background-color", "#222");     
    }else{
        $('.h-bar').css({
             backgroundColor:'#fff'
        });  
        $('.bar1, .bar2, .bar3').css("background-color", "rgba(255, 125, 158,0.8)");     
    } 
    $(this).toggleClass("click");
    $('.nav-all').fadeToggle();
     
   });

   $(".main>li").hover(function(){
      $(this).find(".sub").fadeToggle(200);
   });
});

function slideUp(){
    $(".hittext-in").animate({
        top: '-25px'
    },300, function(){
        $('.hittext-in div:eq(0)').clone().appendTo('.hittext-in'); //첫 번째 박스를 복제해서 부모의 제일 뒤에 붙인다. clone, appendTo
        $('.hittext-in div:eq(0)').remove(); //첫 번째 박스를 삭제
        $('.hittext-in').css('top', 0); //top 을 0으로 초기화
    });
}