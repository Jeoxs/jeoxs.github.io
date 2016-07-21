$('#url-notas_del_nerd').click(function(){
    $('#portfolio-container').hide("slow",function(){
          $.get("portfolio/notas-del-nerd.html",function(data){
                $("#portfolio-detail").append(data);
                $("#portfolio-detail").show("slow");
          });
    });
  location.href = "#portfolio";
});

$('#url-integria').click(function(){
  $('#portfolio-container').hide("slow",function(){
    $.get("portfolio/integria.html",function(data){
          $("#portfolio-detail").append(data);
          $("#portfolio-detail").show("slow");
    });
  });
  location.href = "#portfolio";
});

$('#url-receta_salud').click(function(){
    $('#portfolio-container').hide("slow",function(){
        $.get("portfolio/receta-salud.html",function(data){
              $("#portfolio-detail").append(data);
              $("#portfolio-detail").show("slow");
        });

    });
  location.href = "#portfolio";
});
