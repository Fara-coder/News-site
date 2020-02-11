$(function(){
    $('#button').click(function(){
        $('.news-comments').each(function(){
            if($(this).text() >= 15) {
              $(this).css('color','red');
            }
        });
    });
});