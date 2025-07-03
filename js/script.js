$(function() {

    verificarCliqueMenu();

    function verificarCliqueMenu() {
         $('a').click(function() {
              
            var href = $(this).attr('href');

            $.ajax({
                'url':href,
                'timeout':10000,
                'error':function(jqXHR, textStatus,errorThrown) {
                   if(jqXHR.statusText == 'Not Found') {
                     console.log("Página não encontrada.");
                   }
                }
                
            }).done(function(data){
                //$('#container').html(data);
                $(data).appendTo('#container').fadeIn();
            });

            return false;
         });
    }
});