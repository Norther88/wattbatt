$(document).ready(function(){

    $(".header_nav a").each(function(){
        if($(this).attr("href")===location.href){
            console.log(this);
        }
        if (cur_url == link) {
            $(this).addClass('current');
        }
    
        
    });
});