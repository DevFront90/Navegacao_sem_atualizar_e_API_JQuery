$(function() {

    marcarHomeComoAtiva();
    carregarHome();
    verificarCliqueMenu();


      function marcarHomeComoAtiva() {
              $('nav ul li a').removeClass('active');
              $('#home-link').addClass('active');
      }

      function carregarHome() {
          $.ajax({
             'url': 'home.html',
             'timeout':10000,
             'erro': function(jqXHR, textStatus, errorThrown) {
                if(jqXHR.statusText == 'Not Found') {
                    console.log("Página Home não encontrada.");
                    $('#container').html('<p>Página HOME não encontrada.</p>');
                }
             }

          }).done(function(data) {
             $('#container').html('');
             $(data).appendTo('#container').fadeIn();
          })
      }

      function verificarCliqueMenu() {
          $('nav ul li a').click(function() {
             $('nav ul li a').removeClass('active');

             $(this).addClass('active');

             var href = $(this).attr('href');

             $.ajax({
                'url':href,
                'timeout':10000,
                'error': function(jqXHR, textStatus, errorThrown) {
                     if(jqXHR.statusText == 'Not Found') {
                        console.log("Página não encontrada");
                     }
                }
             }).done(function(data) {
                 $('#container').html('');
                 $(data).appendTo('#container').fadeIn();
             });

             return false;
          });
      }
});
