export default function slidebar() {
   if($('.link').length>1){
       $('.link').click(function(){
           $(this).parent('li').toggleClass('open');
           $(this).next().slideToggle();
           $(this).parent('li').siblings().removeClass('open').children('ul').slideUp()
       })
   }
}